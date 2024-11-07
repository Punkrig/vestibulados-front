import Menu from "../components/Menu"

const Home = () => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <section className="flex justify-between items-center m-10">
        {/* Primeira coluna */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-[300px] h-[300px] border border-black">
            <div className="w-[300px] h-[200px] border-b border-black flex items-center justify-center">
              <p>
                <strong className="text-[150px]">0</strong>
              </p>
            </div>
            <div className="bg-slate-400 h-[97px] text-center flex items-center justify-center  ">
              <p >
                jogue uma partida para completar
                a sua streack de hoje
              </p>
            </div>
          </div>
          <div className="w-[300px] h-[100px] border border-black mt-4 rounded-2xl">
            <div className="flex">
              <div className="m-4">
                <img src="src/assets/Trophy.png" alt="Troféu preto" />
              </div>
              <div className="flex flex-col ml-10">
                <div >
                  <p className="text-[25px]">
                    <strong>
                      Conquistas
                    </strong>
                  </p>
                </div>
                <div>
                  <p>
                    02/100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda coluna */}

        <div className="w-[600px] h-[500px] border border-black rounded-2xl">
          <div className="w-[598px] h-3/4 border-b border-black bg-pink-400 rounded-2xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[200px] h-[200px]">
              <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
              <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
            </svg>
          </div>
          <div className="flex flex-col items-center mt-5">
            <h2 className="font-bold text-[20px]">Treinar questões com os amigos</h2>
            <button className="w-[200px] h-[40px] border rounded-2xl bottom-0 border-gray-600 bg-gray-600 mt-5 text-white font-bold">Jogar</button>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home
