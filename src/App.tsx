import AboutUs from "./pages/AboutUs"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Pricing from "./pages/Pricing"

function App() {

  return (
    <main>
      <Hero />
      <section>
        <AboutUs id="about-us"/>
      </section>
      <section>
        <Pricing id="pricing"/>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default App
