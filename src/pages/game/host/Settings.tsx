import { useContext, useState } from "react";
import Menu from "../../../components/Menu";
import { materias } from "../../../constants";
import { QuizContext } from "../../../contexts/QuizContext";
import type { HostGame } from "../../../services/host/host";
import { Quiz } from "../../../model/quiz";

interface SettingsProps {
  game: HostGame;
  onHost: (detail: Quiz) => void
}

const Settings: React.FC<SettingsProps> = ({ game, onHost }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [clickedIndices, setClickedIndices] = useState<number[]>([]);
  const { createQuiz } = useContext(QuizContext)

  const filteredMaterias = materias.filter((materia) =>
    materia.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleButtonClick = (index: number) => {
    setClickedIndices((prevClickedIndices) =>
      prevClickedIndices.includes(index)
        ? prevClickedIndices.filter((i) => i !== index) // Remove index if already clicked
        : [...prevClickedIndices, index] // Add index if not clicked
    );
  };
  
  const handleCreateQuiz = async () => {
    const selectedSubjects = clickedIndices.map((index) => materias[index].value);

    try {
      const quiz = await createQuiz(selectedSubjects); 
      onHost(quiz)
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };

  return (
    <>
      <Menu />
      <div className="flex flex-col items-center min-h-screen">
        
        <div className="flex flex-col items-center mb-10">
          <h1 className="mt-10 font-bold text-4xl">Escolha as matérias</h1>
          <input
            type="text"
            name="materias"
            placeholder="Buscar matérias"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-4 mt-5 w-[500px] h-[30px] rounded-2xl"
          />
        </div>
        
        <div className="flex flex-wrap justify-center">
          {filteredMaterias.map((materia, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`m-10 p-2 w-[200px] rounded-2xl transition-all duration-300 ease-in-out transform ${
                clickedIndices.includes(index)
                  ? "bg-white text-black border-4 border-black scale-105" // Inverted colors and thicker border for clicked
                  : "bg-black text-white border-2 border-transparent" // Normal styling for unclicked
              }`}
            >
              {materia.value}
            </button>
          ))}
        </div>
        
        <div className="flex items-center justify-center mt-10">
          <button className="bg-[#7491FF] w-[200px] h-[40px] rounded-2xl" onClick={handleCreateQuiz}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Settings;
