import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { PlayerGame } from "../../../services/player/player";
import { GameState } from "../../../services/net";
import Home from "../Home";
import PlayerLobbyView from "./PlayerLobbyView";
import Gameplay from "../Gameplay";
import GameIntermissionView from "../GameIntermissionView";
import GameEndView from "../GameEndView";

const PlayerMainPage: React.FC = () => {
  const [game] = useState(() => new PlayerGame());
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentState = game.getState(); // Get the current state from HostGame

      switch (currentState) {
        case GameState.Lobby:
          navigate("/player/lobby");
          break;
        case GameState.Play:
          navigate("/player/play");
          break;
        case GameState.Intermission:
          navigate("/player/intermission");
          break;
        case GameState.End:
          navigate("/player/end");
          break;
        default:
          navigate("/player/lobby");
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [game, navigate]);

  const updateActive = () => {
    setActive(true)
  }

  return (
    <div>
      {active ? (
        <Routes>
          <Route path="lobby" element={<PlayerLobbyView game={game} />} />
          <Route path="play" element={<Gameplay game={game} />} />
          <Route path="intermission" element={<GameIntermissionView game={game} />} />
          <Route path="end" element={<GameEndView game={game} />} />
        </Routes>
      ) : (
        <Home game={game} active={updateActive}/>
      )}
    </div>
  );
};

export default PlayerMainPage;
