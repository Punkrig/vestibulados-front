import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { HostGame } from "../../../services/host/host";
import { GameState } from "../../../services/net";
import HostLobbyView from "./HostLobbyView";
import { Quiz } from "../../../model/quiz";
import Settings from "../Settings";
import Gameplay from "../Gameplay";
import GameIntermissionView from "../GameIntermissionView";
import GameEndView from "../GameEndView";
import { useAuth } from "../../../contexts/AuthContext";
import RevealView from "../RevealView";

const HostMainPage: React.FC = () => {
  const { user } = useAuth()
  const [game] = useState(() => new HostGame(user!.id, user!.name)); // Stable instance of HostGame
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!game.isInitialized) { // Add a flag in `HostGame` to prevent re-initialization
      game.initializeGame();
      game.isInitialized = true;
    }

    const interval = setInterval(() => {
      const currentState = game.getState(); // Get the current state from HostGame

      switch (currentState) {
        case GameState.Lobby:
          navigate("/host/lobby");
          break;
        case GameState.Play:
          navigate("/host/play");
          break;
        case GameState.Intermission:
          navigate("/host/intermission");
          break;
        case GameState.Reveal:
          navigate("/host/reveal")
          break
        case GameState.End:
          navigate("/host/end");
          break;
        default:
          navigate("/host/lobby");
      }
    }, 100);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [navigate]); // Removed `game` from dependencies

  function onHost(detail: Quiz) {
    game.hostQuiz(detail.id);
    setActive(true);
    navigate("/host/play");
  }

  return (
    <div>
      {active ? (
        <Routes>
          <Route path="lobby" element={<HostLobbyView game={game} />} />
          <Route path="play" element={<Gameplay game={game} />} />
          <Route path="intermission" element={<GameIntermissionView game={game} />} />
          <Route path="end" element={<GameEndView game={game} />} />
          <Route path="reveal" element={<RevealView game={game} />} />
        </Routes>
      ) : (
        <Settings onHost={onHost}/>
      )}
    </div>
  );
};

export default HostMainPage;
