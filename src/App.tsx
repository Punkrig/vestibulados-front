import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Pricing from "./pages/Pricing";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
                <AboutUs id="about-us" />
              </section>
              <section>
                <Pricing id="pricing" />
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
      </Routes>
    </Router>
  );
}

export default App;
