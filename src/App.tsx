import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WaitingRoom from "./pages/game/WaitingRoom";
import HostMainPage from "./pages/game/host/HostMainPage";
import Result from "./pages/game/Result";
import PrivateRoute from "./components/isAuthenticated";
import PlayerMainPage from "./pages/game/player/PlayerMainPage";
import Roulette from "./pages/game/Roulette";

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
        <Route path="/home/*" element={
          <PrivateRoute>
            <PlayerMainPage />
          </PrivateRoute>
          } />
        <Route path="/waiting-room" element={
          <PrivateRoute>
            <WaitingRoom />
          </PrivateRoute>}/>
        <Route path="/host/*" element={
          <PrivateRoute>
            <HostMainPage/>
          </PrivateRoute>} />
        <Route path="/result" element={
          <PrivateRoute>
            <Result/>
          </PrivateRoute>} />
        <Route path="/roulette" element={<Roulette/>} />
      </Routes>
    </Router>
  );
}

export default App;
