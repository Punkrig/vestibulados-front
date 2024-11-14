import { PlayerGame } from "../../../services/player/player"

interface LobbyViewProps {
  game: PlayerGame
}

const PlayerLobbyView = ({ game }: LobbyViewProps) => {
  const state = game.getState()
  return(
    <>
      <p>{state}</p>
    </>
  )
}

export default PlayerLobbyView