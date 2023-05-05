import { useContext, useState } from "react";
import { refContext } from "../App";

import Button from "@mui/material/Button";
import GetAppIcon from "@mui/icons-material/GetApp";

function Header() {
  const { homeRef, aboutRef, skillsRef, projectsRef, contactRef } =
    useContext(refContext);
  const [activeSection, setActiveSection] = useState("Home");
  const scrollToSection = (elementRef) => {
    // window.scrollTo({
    //   top: elementRef.current.offsetTop,
    //   behavior: "smooth",
    // });
    elementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="header-container container">
        <h3>Sivaraj</h3>
        <ul className="options">
          <li
            className={activeSection === "Home" ? "activeSection" : null}
            onClick={() => {
              scrollToSection(homeRef);
              setActiveSection("Home");
            }}
          >
            Home
          </li>
          <li
            className={activeSection === "About" ? "activeSection" : null}
            onClick={() => {
              scrollToSection(aboutRef);
              setActiveSection("About");
            }}
          >
            About
          </li>
          <li
            className={activeSection === "Skills" ? "activeSection" : null}
            onClick={() => {
              scrollToSection(skillsRef);
              setActiveSection("Skills");
            }}
          >
            Skills
          </li>
          <li
            className={activeSection === "Projects" ? "activeSection" : null}
            onClick={() => {
              scrollToSection(projectsRef);
              setActiveSection("Projects");
            }}
          >
            Projects
          </li>
          <li
            className={activeSection === "Contact" ? "activeSection" : null}
            onClick={() => {
              scrollToSection(contactRef);
              setActiveSection("Contact");
            }}
          >
            Contact Me
          </li>
          <a
            style={{ textDecoration: "none" }}
            href="https://drive.google.com/file/d/1iN_v860X_MqKPwzKQxtUdQKuinN-ywv4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="text"
              endIcon={
                <GetAppIcon
                  sx={{
                    color: "#c2f7c2",
                    borderRadius: "50%",
                    backgroundColor: "#1976d2",
                  }}
                />
              }
            >
              <li
                className="resume-button"
                style={{
                  textTransform: "capitalize",
                  color: "#212529",
                  "&:hover": { color: "red!important" },
                }}
              >
                Resume
              </li>
            </Button>
          </a>
        </ul>
      </div>
    </>
  );
}

export { Header };
