import AboutUs from "components/AboutUs"
import Hero from "components/Hero"
import NavBar from "components/NavBar"

const App = () => {
  return (
    <div className="pt-8 flex flex-col">
      <NavBar />
      <Hero />
      <AboutUs />
    </div>
  )
}

export default App
