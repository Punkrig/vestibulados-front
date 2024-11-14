import React from "react";
import Button from "../../components/Button";
import Leaderboard from "../../components/Leaderboard";
import { HostGame } from "../../services/host/host";
import { PlayerGame } from "../../services/player/player";

interface GameplayProps {
  game: HostGame | PlayerGame; // Directly use HostGame or PlayerGame types
}

const Gameplay: React.FC<GameplayProps> = ({ game }) => {
  // Function to handle "Skip" functionality
  const leaderboard = game.getLeaderboard()
  const skip = () => {
    // Check if `game` has the `start` method (HostGame specific)
    if ("start" in game && typeof game.start === "function") {
      game.start(); // Call start only if it's a HostGame
    }
  };

  return (
    <div className="bg-purple-500 min-h-screen w-full">
      <div className="flex justify-end p-8">
        {/* Only show "Skip" button if game is a HostGame */}
        {"start" in game && (
          <Button onClick={skip}>Skip</Button>
        )}
      </div>
      <div className="mt-20 flex justify-center">
        {/* Render leaderboard, available in both HostGame and PlayerGame */}
        <Leaderboard leaderboard={leaderboard} />
      </div>
    </div>
  );
};

export default Gameplay;
