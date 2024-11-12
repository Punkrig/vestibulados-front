// HostLobbyView.tsx
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import PlayerCard from "../../../components/game/PlayerCard";
import type { HostGame } from "../../../services/host/host";
import { Quiz } from "../../../model/quiz";


interface HostLobbyViewProps {
  game: HostGame;
  onHost: (event: { detail: Quiz }) => void;
}

const HostLobbyView: React.FC<HostLobbyViewProps> = ({ game, onHost }) => {
  const [playerList, setPlayerList] = useState(game.getPlayers());
  
  useEffect(() => {
    // Poll the players list at regular intervals to check for updates
    const interval = setInterval(() => {
      setPlayerList(game.getPlayers());
    }, 100);

    return () => clearInterval(interval);
  }, [game]);

  const startGame = () => {
    game.start();
  };

  return (
    <div className="p-8 bg-purple-500 min-h-screen w-full">
      <div className="flex justify-end">
        <Button onClick={startGame}>Start Game</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {playerList.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default HostLobbyView;
