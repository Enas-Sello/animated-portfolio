import "aos/dist/aos.css"
import "./App.css"
import Home from "./components/home/Home"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import ContactMe from "./components/contact/ContactMe"
import Footer from "./components/footer/footer"
import StarsCanvas from "./components/3D/StarsCanvas"

function App() {
  return (
    <div className=" hiddenScrollBar scroll-smooth relative z-0  ">
      <div className=" relative z-0">
        <StarsCanvas />
        <Home />
        <Projects />
        <Skills />
        <ContactMe />
        <Footer />
      </div>
    </div>
  )
}

export default App
