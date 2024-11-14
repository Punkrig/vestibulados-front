import { HostGame } from "../../services/host/host"
import { PlayerGame } from "../../services/player/player"

export interface GameViewProps {
  game: HostGame | PlayerGame
}

const GameEndView: React.FC<GameViewProps> = ({ game }) => {
  return (
    <>
    HostEndView
    {game.getTick}
    </>
  )
}

export default GameEndView