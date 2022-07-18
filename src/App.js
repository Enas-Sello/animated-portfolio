import { useEffect } from 'react';
import Home from './components/home/intro';
import Navbar from './components/nav-bar/nav';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Footer from './components/footer/footer';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
// import Contact from './components/';

function App ()
{
  useEffect( () =>
  {
    Aos.init()
Aos.refresh()
  },[])
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer/>
    </>
  );
}

export default App;
