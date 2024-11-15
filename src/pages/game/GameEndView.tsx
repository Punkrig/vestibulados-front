import { useNavigate } from "react-router-dom";
import { HostGame } from "../../services/host/host";
import { PlayerGame } from "../../services/player/player";
import Leaderboard from "../../components/Leaderboard";

export interface GameViewProps {
  game: HostGame | PlayerGame;
}

const GameEndView: React.FC<GameViewProps> = ({ game }) => {
  const navigate = useNavigate();
  const leaderboard = game.getLeaderboard();

  const handleLeave = () => {
    navigate("/player/lobby"); // Redirect to player lobby.
    game.setState(0)
  };

  return (
    <>
      <Leaderboard leaderboard={leaderboard} />
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={handleLeave}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
        >
          Sair
        </button>
      </div>
    </>
  );
};

export default GameEndView;
