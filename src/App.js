import "aos/dist/aos.css"
import "./App.css"
import Projects from "./page/Projects/Projects"
import Skills from "./page/Skills/Skills"
// import ContactMe from "./page/contact/ContactMe"
import Footer from "./components/footer/footer"
import StarsCanvas from "./components/3D/StarsCanvas"
import Home from "./page/home/Home"
import OnGoingLearning from "./page/OnGoingLearning/OnGoingLearning"

function App() {
  return (
    <div className=" hiddenScrollBar scroll-smooth relative z-0  ">
      <div className=" relative z-0">
        <StarsCanvas />
        <Home />
        <Projects />
        <OnGoingLearning />
        <Skills />
        {/* <ContactMe /> */}
        <Footer />
      </div>
    </div>
  )
}

export default App
