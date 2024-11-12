import { GameViewProps } from "../../model/quiz"

const HostIntermissionView: React.FC<GameViewProps> = ({ game }) => {
  return (
    <>
    HostIntermissionView
    {game.getTick}
    </>
  )
}

export default HostIntermissionView