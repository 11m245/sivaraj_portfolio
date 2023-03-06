import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { refContext } from "../App";
import { useContext } from "react";

function Home() {
  const { homeRef, contactRef } = useContext(refContext);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div ref={homeRef} className="home-container section">
        <div className="myphoto-wrapper">
          <img
            className="myphoto"
            src="./assets/photo3.png"
            alt="displaypicture"
          />
        </div>
        <div className="content-wrapper  text-center ">
          <h1 className="title">Hi, I'm Sivaraj</h1>
          <h5 className="sub-title">I am into Web Development</h5>

          <div className="buttons-wrapper d-flex gap-2 justify-content-center">
            <Button
              onClick={() => scrollToSection(contactRef)}
              sx={{
                borderRadius: "18px",
                fontSize: "16px",
                fontWeight: 600,
                "&:hover": { backgroundColor: "green" },
              }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Contact
            </Button>
            <a
              href="https://drive.google.com/file/d/1iN_v860X_MqKPwzKQxtUdQKuinN-ywv4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                sx={{
                  backgroundColor: "#9c27b0",
                  borderRadius: "18px",
                  fontSize: "16px",
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "green" },
                }}
                variant="contained"
                endIcon={<GetAppRoundedIcon />}
              >
                Resume
              </Button>
            </a>
          </div>

          <div className="social-links-container d-flex justify-content-center gap-2 mt-2">
            <a
              href="https://github.com/11m245/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                sx={{
                  "&:hover": { backgroundColor: "hsl(210deg 79% 85%)" },
                  fontSize: "large",
                }}
                aria-label="delete"
              >
                <GitHubIcon sx={{ fontSize: { md: "36px" } }} />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/sivaraj-m-32a62172/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                sx={{ "&:hover": { backgroundColor: "hsl(210deg 79% 85%)" } }}
                color="primary"
                aria-label="add to shopping cart"
              >
                <LinkedInIcon sx={{ fontSize: { md: "36px" } }} />{" "}
              </IconButton>
            </a>
            <a
              href="mailto:sivaraj2siva@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                sx={{ "&:hover": { backgroundColor: "bisque" } }}
                color="secondary"
                aria-label="add an alarm"
              >
                {" "}
                <ForwardToInboxIcon sx={{ fontSize: { md: "36px" } }} />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export { Home };
