import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { HostGame } from "../../../services/host/host";
import { GameState } from "../../../services/net";
import HostLobbyView from "./HostLobbyView";
import HostPlayView from "../GamePlayView";
import HostEndView from "../GameEndView";
import HostIntermissionView from "../GameIntermissionView";
import { Quiz } from "../../../model/quiz";
import Settings from "./Settings";

const HostMainPage: React.FC = () => {
  const [game] = useState(() => new HostGame());
  const [active, setActive] = useState(false);
  const [state, setState] = useState(GameState.Lobby);
  const navigate = useNavigate();

  useEffect(() => {
    game.initializeGame();

    const interval = setInterval(() => {
      setState((prevState) => {
        const newState = (prevState + 1) % 4;
        console.log("Updated state:", newState);

        switch (newState) {
          case GameState.Lobby:
            navigate("/host/lobby");
            break;
          case GameState.Play:
            navigate("/host/play");
            break;
          case GameState.Intermission:
            navigate("/host/intermission");
            break;
          case GameState.End:
            navigate("/host/end");
            break;
          default:
            navigate("/host/lobby");
        }

        return newState;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [game, navigate]);

  function onHost(detail: Quiz) {
    game.hostQuiz(detail.id);
    setActive(true);
    navigate("/host/play");
  }

  return (
    <div>
      {active ? (
        <Routes>
          <Route path="lobby" element={<Settings game={game} onHost={onHost} />} />
          <Route path="play" element={<HostPlayView game={game} />} />
          <Route path="intermission" element={<HostIntermissionView game={game} />} />
          <Route path="end" element={<HostEndView game={game} />} />
        </Routes>
      ) : (
        <HostLobbyView game={game} />
      )}
    </div>
  );
};

export default HostMainPage;
