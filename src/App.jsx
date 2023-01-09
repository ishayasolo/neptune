import AboutUs from "components/AboutUs"
import Features from "components/Features"
import Footer from "components/Footer"
import Hero from "components/Hero"
import HowToStart from "components/HowToStart"
import NavBar from "components/NavBar"

const App = () => {
  return (
    <div className="pt-8 flex flex-col">
      <NavBar />
      <Hero />
      <AboutUs />
      <Features />
      <HowToStart />
      <Footer />
    </div>
  )
}

export default App
