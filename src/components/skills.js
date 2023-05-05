import { refContext } from "../App";
import { useContext } from "react";

function Skills() {
  const { skillsRef } = useContext(refContext);

  const sets = [
    {
      setTitle: "Front-End",
      courses: [
        {
          courseLogo: "./assets/reactjs-logo.png",
          courseTitle: "React JS",
        },
        {
          courseLogo: "./assets/bootstrap-logo.png",
          courseTitle: "Bootstrap",
        },
        {
          courseLogo: "./assets/html5-logo.png",
          courseTitle: "HTML",
        },
        {
          courseLogo: "./assets/css3-logo.png",
          courseTitle: "CSS",
        },
        {
          courseLogo: "./assets/javascript-logo.png",
          courseTitle: "Javascript",
        },
      ],
    },
    {
      setTitle: "Back-End",
      courses: [
        {
          courseLogo: "https://img.icons8.com/office/512/express-js.png",
          courseTitle: "express JS",
        },
        {
          courseLogo:
            "https://banner2.cleanpng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg",
          courseTitle: "Node JS",
        },
      ],
    },
    {
      setTitle: "Database",
      courses: [
        {
          courseLogo:
            "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
          courseTitle: "MongoDB",
        },
        {
          courseLogo:
            "https://w7.pngwing.com/pngs/170/924/png-transparent-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-microsoft-azure.png",
          courseTitle: "SQL",
        },
      ],
    },

    {
      setTitle: "Tools",
      courses: [
        {
          courseLogo: "./assets/visual-studio-logo.png",
          courseTitle: "VS Code",
        },
        {
          courseLogo: "./assets/github-logo.png",
          courseTitle: "Git Hub",
        },
        {
          courseLogo: "./assets/netlify-logo.png",
          courseTitle: "Netlify",
        },
        {
          courseLogo:
            "https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png",
          courseTitle: "Vercel",
        },
        {
          courseLogo:
            "https://cdn.hashnode.com/res/hashnode/image/upload/v1611203263006/RsePA3pzj.png",
          courseTitle: "Postman",
        },
      ],
    },
  ];

  return (
    <>
      <div ref={skillsRef} className="skills-container section pt-5">
        <h2 className="text-center title">Skills</h2>
        <div className="skill-sets-container d-flex flex-column">
          {sets.map((set, i) => (
            <SkillSet key={i} set={set} />
          ))}
        </div>
      </div>
    </>
  );
}

function SkillSet({ set }) {
  const { setTitle, courses } = set;

  return (
    <>
      <div className="skill-set-container mb-3 ">
        <h3 className="sub-title set-title ">{setTitle}</h3>
        <div className="course-cards-container">
          {courses.map((course, i) => (
            <Course key={i} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}

function Course({ course }) {
  const { courseLogo, courseTitle } = course;

  return (
    <>
      <div className="course-wrapper">
        <img className="course-logo" src={courseLogo} alt={courseTitle} />
        <span className="course-name">{courseTitle}</span>
      </div>
    </>
  );
}

export { Skills };
