import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { AuthContext } from "../contexts/AuthContext";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
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

  // Function to handle redirection to sections on the landing page
  function handleSectionNavigation(sectionId: string) {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
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

          <div className="hidden md:block">
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
          </div>

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
              <button
                className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                onClick={signOut}
              >
                Sign Out
              </button>
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

        {/* Mobile Menu */}
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
              {!isAuthenticated ? (
                <li>
                  <button
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    onClick={openRegisterModal}
                  >
                    Register
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white"
                    onClick={signOut}
                  >
                    Sign Out
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}

        {/* Render Login Modal */}
        {isLoginOpen && <Login onClose={closeLoginModal} />}

        {/* Render Register Modal */}
        {isRegisterOpen && <Register onClose={closeRegisterModal} />}
      </div>
    </header>
  );
};

export default Menu;
