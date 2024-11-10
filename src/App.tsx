import Home from "./pages/Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WaitingRoom from "./pages/WaitingRoom";
import Roulette from "./pages/Roulette";

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
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/waiting-room" element={<WaitingRoom />}/>
        <Route path="/roulette" element={<Roulette/>} />
      </Routes>
    </Router>
  );
}

export default App;
