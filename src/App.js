import './App.css';
import { Home } from './components/home';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Header } from "./components/header"
function App() {


  return (

    <div className="App container-fluid">

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

    </div>
  );
}

export default App;
