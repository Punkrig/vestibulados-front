import { GameViewProps } from "../../model/quiz"

const HostEndView: React.FC<GameViewProps> = ({ game }) => {
  return (
    <>
    HostEndView
    {game.getTick}
    </>
  )
}

export default HostEndView