import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HostMainPage from "./pages/game/host/HostMainPage";
import PrivateRoute from "./components/isAuthenticated";
import PlayerMainPage from "./pages/game/player/PlayerMainPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página Principal */}
        <Route 
          path="/" 
          element={
            <main>
              <Hero />
              <section>
                <AboutUs />
              </section>
              <section>
                <Pricing />
              </section>
              <section>
                <Footer />
              </section>
            </main>
          } 
        />

        {/* Outras rotas */}
        <Route path="/player/*" element={
          <PrivateRoute>
            <PlayerMainPage />
          </PrivateRoute>
          } />
        <Route path="/host/*" element={
          <PrivateRoute>
            <HostMainPage/>
          </PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
