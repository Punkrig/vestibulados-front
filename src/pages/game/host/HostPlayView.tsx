import { GameViewProps } from "../../../model/quiz"

const HostPlayView: React.FC<GameViewProps> = ({ game }) => {
  return (
    <>
    HostPlayView
    {game.getTick}
    </>
  )
}

export default HostPlayView