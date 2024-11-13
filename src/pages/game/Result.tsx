import Menu from "../../components/Menu";
import { users } from "../../constants";

const Result = () => {
  return (
    <>
      <Menu />
      <div className="flex flex-col items-center mt-10">
        {users.map((user, index) => (
          <div
            key={index}
            className={`flex items-center justify-between w-[500px] h-[50px] px-4 mb-5 rounded-lg text-white ${
              index === 0 ? "bg-yellow-500 font-bold" : "bg-gray-800"
            }`}
          >
            <span className="text-lg">{index + 1}º</span>
            <span className="text-lg">{user.name}</span>
            <span className="text-lg">{user.score} pts</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
          Nova partida
        </button>
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300">
          Sair
        </button>
      </div>
    </>
  );
};

export default Result;
