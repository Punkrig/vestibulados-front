import React from 'react';
import type { Player } from '../../model/quiz';

interface PlayerCardProps {
  player: Player;
  onClick?: () => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, onClick }) => {
  return (
    <button onClick={onClick} className="focus:outline-none">
      <h3
        className="text-3xl text-white px-4 py-2 rounded-xl hover:line-through"
        style={{ backgroundColor: 'rgba(33, 33, 33, 0.3)' }}
      >
        {player.name}
      </h3>
    </button>
  );
};

export default PlayerCard;
