import React from "react";
import Leaderboard from "../../components/Leaderboard";
import { HostGame } from "../../services/host/host";
import { PlayerGame } from "../../services/player/player";

interface GameplayProps {
  game: HostGame | PlayerGame;
}

const GameIntermissionView: React.FC<GameplayProps> = ({ game }) => {
  const leaderboard = game.getLeaderboard()
  console.log(leaderboard)
  return (
    <>
      <Leaderboard leaderboard={leaderboard} />
    </>
  );
};

export default GameIntermissionView;
