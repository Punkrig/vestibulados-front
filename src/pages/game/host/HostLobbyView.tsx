import { GameViewProps } from "../../../model/quiz"

const HostLobbyView: React.FC<GameViewProps> = ({ game }) => {
  return (
    <>
    HostLobbyView
    {game.getTick}
    </>
  )
}

export default HostLobbyView