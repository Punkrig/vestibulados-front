import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Pricing from "./pages/Pricing";
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
