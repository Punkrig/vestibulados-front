import React from "react";

interface LeaderboardEntry {
  name: string;
  points: number;
}

interface LeaderboardProps {
  leaderboard: LeaderboardEntry[];
  finish?: boolean;
}

const finishColors = ["bg-yellow-500", "bg-[silver]", "bg-yellow-700"];

const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboard, finish = false }) => {
  return (
    <div className="bg-purple-600 flex rounded-xl p-4 flex-col gap-4 w-96">
      <h2 className="text-white text-center text-3xl">Leaderboard</h2>
      {leaderboard.map((entry, i) => (
        <div
          key={i}
          className="bg-purple-500 text-white p-2 text-2xl rounded-xl flex items-center gap-6"
        >
          {finish && (
            <div
              className={`${finishColors[i < 3 ? i : 2]} w-14 h-14 rounded-full flex items-center justify-center ml-8`}
            >
              {i + 1}
            </div>
          )}
          <p>{entry.name} - {entry.points}</p>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
