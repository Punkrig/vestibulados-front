import React, { useState, useEffect } from "react";
import { HostGame } from "../../../services/host/host";
import { GameState } from "../../../services/net";
import HostLobbyView from "./HostLobbyView";
import HostPlayView from "../GamePlayView";
import HostEndView from "../GameEndView";
import HostIntermissionView from "../GameIntermissionView";
import { Quiz } from "../../../model/quiz";

const HostMainPage: React.FC = () => {
  const [game] = useState(() => new HostGame)
  const [active, setActive] = useState(false)
  const [state, setState] = useState<GameState>(GameState.Lobby)

  useEffect(() => {
    game.initializeGame();

    const interval = setInterval(() => {
      setState(game.getState()); // Update local state based on HostGame’s internal state
    }, 100);

    return () => {
      clearInterval(interval)
    }
    
  }, [game])

  function onHost(event: {detail: Quiz}) {
    game.hostQuiz(event.detail.id)
    setActive(true)
  }

  //TO DO: implementar as views
  let view;
  switch (state) {
    case GameState.Lobby:
      view = <HostLobbyView game={game} />;
      break;
    case GameState.Play:
      view = <HostPlayView game={game} />;
      break;
    case GameState.Intermission:
      view = <HostIntermissionView game={game} />;
      break;
    case GameState.End:
      view = <HostEndView game={game} />;
      break;
    default:
      view = <HostLobbyView game={game} />;
      break;
  }

  return (
    <div>
      {active ? view : <HostLobbyView game={game} />} {/* Render based on active state */}
    </div>
  );
};

export default HostMainPage;