import "./App.css";
import { useRef, createContext, useState, useEffect } from "react";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const refContext = createContext();

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 772 ? true : false
  );
  const [width, setWidth] = useState(window.innerWidth);
  const refsObj = { aboutRef, homeRef, skillsRef, projectsRef, contactRef };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      width < 772 ? setIsMobile(true) : setIsMobile(false);
      // console.log(width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div className="App container-fluid">
      <refContext.Provider value={refsObj}>
        <div className="project-container container">
          {isMobile ? null : <Header />}
          <div className="content-container">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            {isMobile ? <Footer /> : null}
          </div>
        </div>
      </refContext.Provider>
    </div>
  );
}

export default App;
