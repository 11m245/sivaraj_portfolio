import { refContext } from "../App";
import { useContext } from "react";

function About() {

    const { aboutRef } = useContext(refContext);

    return (<>
        <div ref={aboutRef} className="about-container section">
            <h2 className="text-center title">About me</h2>
            <p className="text-summary">I am Sivaraj, graduated Mechanical Engineering from TamilNadu, India. Now pursuing
                my career as a
                FullStack WebDeveloper from GUVI. I am a passionate on exploring and building projects, using various
                technologies. I am a frontend web developer well versed in HTML,
                CSS, JavaScript and stand at a beginner-intermediate level of React.</p>

        </div>
    </>)
}

export { About }