import Menu from "../../components/Menu";
import { perguntas } from "../../constants"; // Substitua pelo caminho correto do arquivo onde está o array de perguntas
import  { useState } from "react";

const Gameplay = () => {
  const [selecionada, setSelecionada] = useState(null); // Estado para armazenar a alternativa selecionada
  const perguntaAtual = perguntas[0]; // Acessa a primeira pergunta

  return (
    <>
      <Menu />
      <div className="flex flex-col items-center mt-10 ">
        <div className="w-[500px]  flex-wrap">
          <h1>{perguntaAtual.enunciado}</h1>
        </div>
        <div className="flex flex-col cursor-pointer mt-10 mb-10 ">

          {perguntaAtual.alternativas.map((alternativa, index) => (
            <button
              key={index}
              onClick={() => setSelecionada(index)}
              className={`m-2 p-2 border rounded w-[500px] text-left ${
                selecionada === index
                  ? "bg-black text-white" // Cor de fundo preta e texto branco ao selecionar
                  : "bg-white text-black" // Cor de fundo branca e texto preto
              }`}
            >
              {alternativa.opcao}: {alternativa.texto}
            </button>
          ))}
        </div>
        <div>
        <button
              
              
              className={`m-10 p-2 w-[200px] rounded-2xl  border border-black`}
            >
              Responder
            </button>
        </div>
      </div>
    </>
  );
};

export default Gameplay;
