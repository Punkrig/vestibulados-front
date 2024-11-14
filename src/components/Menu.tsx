import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { AuthContext } from "../contexts/AuthContext";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // Adicionando estado para o menu de usuário
  const { isAuthenticated, signOut } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  function openLoginModal() {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
    closeMobileMenu();
  }

  function closeLoginModal() {
    setIsLoginOpen(false);
  }

  function openRegisterModal() {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
    closeMobileMenu();
  }

  function closeRegisterModal() {
    setIsRegisterOpen(false);
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleSectionNavigation(sectionId) {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  }

  // Função para alternar o menu do usuário
  function toggleUserMenu() {
    setIsUserMenuOpen(!isUserMenuOpen);
  }

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </Link>
          </div>

          {!isAuthenticated ?(<div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-10 text-lg">
                <li>
                  <button
                    className="text-gray-500 transition hover:text-teal-600"
                    onClick={() => handleSectionNavigation("home")}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="text-gray-500 transition hover:text-teal-600"
                    onClick={() => handleSectionNavigation("about-us")}
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button
                    className="text-gray-500 transition hover:text-teal-600"
                    onClick={() => handleSectionNavigation("pricing")}
                  >
                    Planos
                  </button>
                </li>
              </ul>
            </nav>
          </div>):(
            <div> </div>
          )}

          <div className="flex items-center gap-4">
            {!isAuthenticated ? (
              <div className="sm:flex sm:gap-4">
                <button
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  onClick={openLoginModal}
                >
                  Login
                </button>
                <div className="hidden sm:flex">
                  <button
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    onClick={openRegisterModal}
                  >
                    Register
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden md:relative md:block">
                <button
                  type="button"
                  className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                  onClick={toggleUserMenu} // Alternar menu do usuário ao clicar
                >
                  <span className="sr-only">Toggle dashboard menu</span>

                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="User"
                    className="size-10 object-cover"
                  />
                </button>

                {isUserMenuOpen && ( // Verifica se o menu do usuário está aberto
                  <div
                    className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                    role="menu"
                  >
                    <div className="p-2">
                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                      >
                        Meu Perfil
                      </a>


                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                      >
                        Estatísticas
                      </a>
                    </div>

                    <div className="p-2">
                      <form method="POST" action="#">
                        <button
                          type="submit"
                          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                          role="menuitem"
                          onClick={signOut}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                            />
                          </svg>
                          Logout
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="block md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-2">
            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <button
                  className="text-gray-500 transition hover:text-teal-600"
                  onClick={() => handleSectionNavigation("home")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="text-gray-500 transition hover:text-teal-600"
                  onClick={() => handleSectionNavigation("about-us")}
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  className="text-gray-500 transition hover:text-teal-600"
                  onClick={() => handleSectionNavigation("pricing")}
                >
                  Planos
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Modal de Login */}
      {isLoginOpen && <Login onClose={closeLoginModal} />}
      {/* Modal de Registro */}
      {isRegisterOpen && <Register onClose={closeRegisterModal} />}
    </header>
  );
};

export default Menu;
