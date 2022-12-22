import { useContext } from "react";
import { refContext } from "../App";

import Button from '@mui/material/Button';
import GetAppIcon from '@mui/icons-material/GetApp';



function Header({ isMobile }) {

    const { homeRef, aboutRef, skillsRef, projectsRef, contactRef } = useContext(refContext);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });

    }

    return (<>

        {isMobile ? null : <nav className="header-container container">
            <h3>Sivaraj</h3>
            <ul className="options">
                <li onClick={() => scrollToSection(homeRef)} >Home</li>
                <li onClick={() => scrollToSection(aboutRef)}>About</li>
                <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
                <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
                <li onClick={() => scrollToSection(contactRef)}>Contact Me</li>
                <a style={{ textDecoration: "none" }} href="./assets/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="text" endIcon={<GetAppIcon sx={{ color: "#c2f7c2", borderRadius: "50%", backgroundColor: "#1976d2" }} />}>

                        <li className="resume-button" style={{ textTransform: "capitalize", color: "#212529", "&:hover": { color: "red!important" } }}>Resume</li>

                    </Button>
                </a>
            </ul>
        </nav>}


    </>)
}

export { Header }