import Menu from '../components/Menu' // Importando o novo componente Menu
import { Link } from 'react-router-dom' // Importando Link do react-router-dom

const Hero = () => {
  return (
    <div className="bg-white" id='#home'>
      {/* Substituindo o menu existente pelo componente Menu */}
      <header className="absolute inset-x-0 top-0 z-50">
        <Menu /> {/* Aqui, o componente Menu é adicionado */}
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* ...resto do conteúdo da página Hero... */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Vestibulados
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Uma nova forma de estudar e se preparar para os exames
              mais importantes da sua carreira.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/home" // Usando Link para navegação interna
                className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Comece Agora!
              </Link>
              <Link to="#" className="text-sm/6 font-semibold text-gray-900">
                Leia Mais <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
