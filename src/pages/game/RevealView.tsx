import { HostGame } from '../../services/host/host';
import { PlayerGame } from '../../services/player/player';

interface RevealProps {
  game: HostGame | PlayerGame
}

const RevealView: React.FC<RevealProps> = ({ game }) => {
  var points = game.getPoints()
  const correct = points > 0;

  return (
    <div
      className={`min-h-screen text-white w-full flex justify-center items-center ${
        correct ? 'bg-green-500' : 'bg-red-600'
      }`}
    >
      {correct ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold">Correto!</h2>
          <p className="text-2xl">+ {points} pontos</p>
        </div>
      ) : (
        <h2 className="text-3xl">Incorreto!</h2>
      )}
    </div>
  );
};

export default RevealView;
