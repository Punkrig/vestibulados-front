import Menu from "../../../components/Menu"

const PlayerLobbyView = () => {
  return(
    <>
      <Menu />
      <div className="w-screen h-screen flex justify-center items-center bg-white">
        <h1 className="text-black font-bold text-9xl">
          Esperando o Host começar o jogo!
        </h1>
      </div>
    </>
  )
}

export default PlayerLobbyView