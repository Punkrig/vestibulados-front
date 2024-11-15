import Menu from "../../components/Menu";
import { useState } from "react";
import { PlayerGame } from "../../services/player/player";
import { HostGame } from "../../services/host/host";

interface GameplayProps {
  game: PlayerGame | HostGame;
}

const Gameplay = ({ game }: GameplayProps) => {
  const [selecionada, setSelecionada] = useState<number | null>(null); // Estado para armazenar a alternativa selecionada
  const perguntaAtual = game.getCurrentQuestion(); // Call as a function to access the current question
  const tick = game.getTick(); // Call as a function to get the current tick
  let answered = false

  function handleAnswer() {
    if (selecionada !== null){
      game.answer(selecionada)
      answered = true
    }
  }

  return (
    <>
      <Menu />
      <div className="flex flex-col items-center mt-10 ">
        <div className="w-[500px] flex-wrap">
          {perguntaAtual ? ( // Check if perguntaAtual is not null
            <>
              <div className="mt-4 text-gray-700">
                {perguntaAtual.content.data ? (
                  <p>{perguntaAtual.content.data}</p>
                ) : (
                  <p>Loading content...</p>
                )}
              <h1 className="font-bold">{perguntaAtual.name}</h1>
              </div>
            </>
          ) : (
            <h1>Loading question...</h1>
          )}
        </div>
        <div className="flex flex-col cursor-pointer mt-10 mb-10 ">
          <div>{tick}</div> {/* Display the tick value */}

          {perguntaAtual?.choices?.map((choice, index) => (
            <button
              key={index}
              onClick={() => setSelecionada(index)}
              className={`m-2 p-2 border rounded w-[500px] text-left ${
                selecionada === index
                  ? "bg-black text-white" // Cor de fundo preta e texto branco ao selecionar
                  : "bg-white text-black" // Cor de fundo branca e texto preto
              }`}
            >
              {index}: {choice.name}
            </button>
          ))}
        </div>
        <div>
          <button className="m-10 p-2 w-[200px] rounded-2xl border border-black" onClick={handleAnswer}>
            Responder
          </button>
        </div>
      </div>
    </>
  );
};

export default Gameplay;
