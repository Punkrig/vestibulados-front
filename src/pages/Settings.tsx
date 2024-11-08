import Menu from "../components/Menu";
import { materias } from "../constants";

const Settings = () => {
  return (
    <>
    <Menu />
    <div className="flex flex-col items-center min-h-screen"> {/* Centraliza o conteúdo da página */}
      
      <div className="flex flex-col items-center mb-10">
        <h1 className="mt-10 font-bold text-4xl">Escolha as matérias</h1>
        <input
          type="text"
          name="materias"
          placeholder="   Buscar matérias"
          className="mt-5 w-[500px] h-[30px] rounded-2xl"
        />
      </div>
      <div className="flex flex-wrap justify-center"> {/* Centraliza os botões das matérias */}
        {materias.map((materia, index) => (
          <button key={index} className="m-10 p-2 bg-black text-white w-[200px] rounded-2xl">
            {materia.value} {/* Replace with the property you need to display */}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="bg-[#7491FF] w-[200px] h-[40px] rounded-2xl">
          Continue
        </button>
      </div>
    </div>
    </>
  );
};

export default Settings;
