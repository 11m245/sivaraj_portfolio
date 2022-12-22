import './App.css';
import { useRef, createContext, useState, useEffect } from "react";
import { Home } from './components/home';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Header } from "./components/header";


export const refContext = createContext();

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const refsObj = { aboutRef, homeRef, skillsRef, projectsRef, contactRef }





  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
    }
    window.addEventListener("resize", handleResize);
    console.log(isMobile);
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log(isMobile);
    }
  })

  return (

    <div className="App container-fluid">

      <refContext.Provider value={refsObj}>
        <div className="project-container container">
          <Header isMobile={isMobile} />
          <div className="content-container">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
          {/* <Footer /> */}
        </div>
      </refContext.Provider>
    </div>
  );
}

export default App;
