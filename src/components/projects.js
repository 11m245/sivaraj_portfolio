import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import GradeIcon from "@mui/icons-material/Grade";

import { refContext } from "../App";
import { useContext } from "react";

function Projects() {
  const { projectsRef } = useContext(refContext);

  const projects = [
    {
      title: "Moto Service App",
      image_url:
        "https://cdn.vectorstock.com/i/preview-1x/54/01/insurance-motorcycle-color-icon-moto-safety-vector-43845401.jpg",
      summary:
        "Both Workshop, user module done, users can book service for their two wheelers and workshops can process their bookings on their login",
      topics: ["React", "Bootstrap", "Express JS", "MongoDB"],
      isRecommended: false,
      links: {
        sourceFrontEnd: "https://github.com/11m245/motorcyclerepair-frontend",
        deployedFrontEnd: "https://whimsical-nasturtium-77b914.netlify.app",
        sourceBackEnd: "https://github.com/11m245/motorcyclerepair-backend",
        deployedBackEnd: "https://motorcyclerepair-backend.vercel.app/",
      },
    },
    {
      title: "Daily Savings Collection App",
      image_url:
        "https://s3.us-east-2.amazonaws.com/website-assets-prod/OptionsOfSavingMoneyInYourDailyLife.jpg",
      summary:
        " Daily Cash Collection - Data Maintaining App for Financiers & Agents",
      topics: ["React", "Express JS", "Mongo DB", "CSS", "Javascript"],
      isRecommended: false,
      links: {
        sourceFrontEnd: "https://github.com/11m245/daily-collection-frontend",
        deployedFrontEnd: "https://daily-savings.netlify.app/",
        sourceBackEnd: "https://github.com/11m245/daily-collection-backend",
        deployedBackEnd: "https://daily-collection-backend.vercel.app/",
      },
    },

    {
      title: "Pizza Order App",
      image_url:
        "https://w7.pngwing.com/pngs/736/179/png-transparent-pizza-pizza-logo-pizza-icon-white-food-camera-icon-thumbnail.png",
      summary:
        "Both Shop, user module done, users can order pizza  and shop can process their orders on its login",
      topics: [
        "React",
        "Bootstrap",
        "Express JS",
        "Mongo DB",
        "Payment Gateway",
        "Stripe",
      ],
      isRecommended: false,
      links: {
        sourceFrontEnd: "https://github.com/11m245/pizza-delivery-frontend",
        deployedFrontEnd: "https://candid-blancmange-22f08a.netlify.app",
        sourceBackEnd: "https://github.com/11m245/pizza-delivery-backend",
        deployedBackEnd: "https://pizza-delivery-backend.vercel.app",
      },
    },
    {
      title: "Chat App",
      image_url: "https://i.ibb.co/QDkbTJK/schat-app-logo-icon-vector.png",
      summary: "User Room Chat can be availed using this app ",
      topics: [
        "React",
        "CSS",
        "Javascript",
        "ExpressJS",
        "MongoDB",
        "Socket IO",
      ],
      isRecommended: false,
      links: {
        sourceFrontEnd: "https://github.com/11m245/chat-app-frontend",
        deployedFrontEnd: "https://coruscating-druid-7fa808.netlify.app",
        sourceBackEnd: "https://github.com/11m245/chat-app-backend",
        deployedBackEnd: "https://chat-app-backend-j5l6.onrender.com",
      },
    },
  ];

  return (
    <>
      <div ref={projectsRef} className="projects-container section">
        <h2 className="text-center title">Projects</h2>

        <div className="projects-wrapper">
          {/* <div className="credentials project-wrapper">
            <h3
              style={{ borderBottom: "2px solid green", paddingBottom: "3px" }}
            >
              Login Credentials
            </h3>
            <h4 style={{ color: "#0d6efd", textAlign: "center" }}>
              User Module
            </h4>
            <h5>Login ID : user@gmail.com </h5>
            <h5>Password : 12345678 </h5>
            <h4 style={{ color: "#0d6efd", textAlign: "center" }}>
              Admin Module
            </h4>
            <h5>Login ID : admin@gmail.com </h5>
            <h5>Password : 12345678 </h5>
          </div> */}
          {projects.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

function Project({ project }) {
  const { title, image_url, summary, topics, links, isRecommended } = project;

  return (
    <>
      <div
        className={
          isRecommended
            ? "project-wrapper recommended-project"
            : "project-wrapper"
        }
        style={{ position: "relative" }}
      >
        <img className="project-image" src={image_url} alt="project1-logo" />
        <h4 className="project-title text-center">{title}</h4>
        <p className="project-summary"> {summary}</p>
        <div className="tags-container">
          {topics.map((topic, i) => (
            <Tag key={i} index={i} topic={topic} />
          ))}
        </div>
        <Link links={links} />
        {isRecommended ? (
          <div
            className="star-wrapper"
            style={{ position: "absolute", top: 0, right: 0, padding: "6px" }}
          >
            <GradeIcon color="secondary" />
          </div>
        ) : null}
      </div>
    </>
  );
}

function Tag({ topic, index }) {
  return (
    <>
      {index % 2 === 0 ? (
        <span className="badge rounded-pill bg-primary d-block topic">
          {topic}
        </span>
      ) : (
        <span className="badge rounded-pill bg-success d-block topic">
          {topic}
        </span>
      )}
    </>
  );
}

function Link({ links }) {
  const { sourceFrontEnd, deployedFrontEnd, sourceBackEnd, deployedBackEnd } =
    links;
  return (
    <>
      <div className="links-container">
        <a href={sourceFrontEnd} target="_blank" rel="noopener noreferrer">
          <IconButton
            sx={{
              "&:hover": { backgroundColor: "hsl(210deg 79% 85%)" },
              fontSize: "large",
            }}
            aria-label="delete"
          >
            <GitHubIcon sx={{ fontSize: { md: "30px" }, color: "black" }} />
          </IconButton>
        </a>
        <a href={deployedFrontEnd} target="_blank" rel="noopener noreferrer">
          <IconButton
            sx={{
              "&:hover": { backgroundColor: "hsl(210deg 79% 85%)" },
              fontSize: "large",
            }}
            aria-label="delete"
          >
            <LanguageIcon sx={{ fontSize: { md: "30px" }, color: "#1976d2" }} />
          </IconButton>
        </a>
        {sourceBackEnd ? (
          <a href={sourceBackEnd} target="_blank" rel="noopener noreferrer">
            <IconButton
              sx={{
                "&:hover": { backgroundColor: "hsl(210deg 79% 85%)" },
                fontSize: "large",
              }}
              aria-label="delete"
            >
              <GitHubIcon sx={{ fontSize: { md: "30px" }, color: "#228C22" }} />
            </IconButton>
          </a>
        ) : null}
        {deployedBackEnd ? (
          <a href={deployedBackEnd} target="_blank" rel="noopener noreferrer">
            <IconButton
              sx={{
                "&:hover": { backgroundColor: "hsl(210deg 79% 85%)" },
                fontSize: "large",
              }}
              aria-label="delete"
            >
              <LaptopChromebookIcon
                sx={{ fontSize: { md: "30px" }, color: "#1976d2" }}
              />
            </IconButton>
          </a>
        ) : null}
      </div>
    </>
  );
}

export { Projects };
