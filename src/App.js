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
  const refsObj = { aboutRef, homeRef, skillsRef, projectsRef, contactRef }

  const [isMobile, setIsMobile] = useState(null);



  return (

    <div className="App container-fluid">

      <refContext.Provider value={refsObj}>
        <div className="project-container container">
          <Header />
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
