import { LeaderboardEntry } from "../services/net";
import Menu from "./Menu";

export interface LeaderboardProps {
  leaderboard: LeaderboardEntry[]; // Accepting an array of LeaderboardEntry
}

const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboard }) => {
  return (
    <>
      <Menu />
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
        {leaderboard.map((entry, index) => (
          <div
            key={index}
            className={`flex items-center justify-between w-[500px] h-[50px] px-4 mb-5 rounded-lg text-white ${
              index === 0 ? "bg-yellow-500 font-bold" : "bg-gray-800"
            }`}
          >
            <span className="text-lg">{index + 1}º</span>
            <span className="text-lg">{entry.name}</span>
            <span className="text-lg">{entry.points} pts</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Leaderboard;
