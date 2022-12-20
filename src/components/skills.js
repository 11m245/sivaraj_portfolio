

function Skills() {

    const sets = [
        {
            setTitle: "Languages",
            courses: [{
                courseLogo: "./assets/html5-logo.png",
                courseTitle: "HTML"
            }, {
                courseLogo: "./assets/css3-logo.png",
                courseTitle: "CSS"
            }, {
                courseLogo: "./assets/javascript-logo.png",
                courseTitle: "Javascript"
            }]
        }, {
            setTitle: "FrameWorks & Libraries",
            courses: [{
                courseLogo: "./assets/reactjs-logo.png",
                courseTitle: "React JS"
            }, {
                courseLogo: "./assets/bootstrap-logo.png",
                courseTitle: "Bootstrap"
            }]
        }, {
            setTitle: "Tools",
            courses: [{
                courseLogo: "./assets/visual-studio-logo.png",
                courseTitle: "VS Code"
            }, {
                courseLogo: "./assets/github-logo.png",
                courseTitle: "Git Hub"
            }, {
                courseLogo: "./assets/netlify-logo.png",
                courseTitle: "Netlify"
            }]

        }
    ]

    return (<>

        <div className="skills-container section">
            <h2 className="text-center title">Skills</h2>
            <div className="skill-sets-container d-flex flex-column">
                {sets.map((set) => <SkillSet set={set} />)}
            </div>
        </div>

    </>)
}

function SkillSet({ set }) {

    const { setTitle, courses } = set;

    return (<>
        <div className="skill-set-container mb-3 ">
            <h3 className="sub-title set-title " >{setTitle}</h3>
            <div className="d-flex card-body">
                {courses.map((course) => <Course course={course} />)}
            </div>
        </div>
    </>)


}



function Course({ course }) {

    const { courseLogo, courseTitle } = course;

    return (<>
        <div className="course-wrapper">
            <img class="course-logo" src={courseLogo} alt={courseTitle} />
            <span class="course-name">{courseTitle}</span>
        </div>
    </>)
}



export { Skills }