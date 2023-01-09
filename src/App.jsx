import AboutUs from "components/AboutUs"
import Features from "components/Features"
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
    </div>
  )
}

export default App
