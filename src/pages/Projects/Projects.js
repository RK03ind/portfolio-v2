import { useState } from "react";
import ProjectItem from "./components/ProjectItem";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Expense Tracker (PWA)",
      desc: "A very simple Expense Tracker PWA with intiutive expense tracking charts and complete offline working capabilities. Built with ReactJS and Workbox.",
      timeTaken: "Dec 2021",
      techStack: ["react", "html", "css", "javascript"],
      liveLink: "https://expense-tracker-offline.netlify.app/",
      githubLink: "https://github.com/RK03ind/expense-tracker-pwa",
    },
    {
      title: "Realtime Chat App",
      desc: "A Realtime Chat WebApp built with ReactJS, Firebase and MUI Library including User Authentication, complete CRUD operations and multiple features.",
      timeTaken: "Dec 2021 - Jan 2021",
      techStack: ["react", "html", "css", "firebase"],
      liveLink: "https://livechat1.netlify.app/",
      githubLink: "https://github.com/RK03ind/Realtime-Chat",
    },
    {
      title: "Travellers Stash",
      desc: "A MERN Stack based Social Media App. A place to share the beauty of this amazing world with people. Share places you've visited or want to visit, share any knowledge or facts regarding that place.",
      timeTaken: "Feb 2022 - March 2022",
      techStack: ["react", "express", "mongo", "node"],
      liveLink: "https://travellers-stash.netlify.app/",
      githubLink: "https://github.com/RK03ind/Travellers-Stash-Public",
    },
    {
      title: "Derivative Calculator",
      desc: "Official Android version of a famous derivative calculation website, built with the help of native Android SDK, Java and Kotlin it has support of multiple languages and a whole lot of different features.",
      timeTaken: "May 2021 - July 2021",
      techStack: ["java", "kotlin", "android", "javascript"],
      liveLink:
        "https://play.google.com/store/apps/details?id=de.david_scherfgen.derivative_calculator",
      githubLink: "https://www.derivative-calculator.net/",
    },
  ];

  const neogProjectData = [
    {
      title: "Expense Tracker (PWA)",
      desc: "A very simple Expense Tracker PWA with intiutive expense tracking charts and complete offline working capabilities. Built with ReactJS and Workbox.",
      timeTaken: "Dec 2021",
      techStack: ["react", "html", "css", "javascript"],
      liveLink: "https://expense-tracker-offline.netlify.app/",
      githubLink: "https://github.com/RK03ind/expense-tracker-pwa",
    },
  ];

  const [projectState, setProjectState] = useState(true);

  const switchProjectState = () => setProjectState((prevState) => !prevState);

  return (
    <main className="main-projects">
      <h2>Some awesome work of mine</h2>
      <div className="projects-switcher">
        <h3
          className={projectState ? "active" : ""}
          onClick={switchProjectState}
        >
          My Projects
        </h3>
        <h3
          className={!projectState ? "active" : ""}
          onClick={switchProjectState}
        >
          Neog Projects
        </h3>
      </div>
      <div className="project-item-container">
        {projectState
          ? projectData.map((project, index) => {
              return (
                <ProjectItem
                  {...project}
                  index={index}
                  key={`index+${Math.random()}`}
                />
              );
            })
          : neogProjectData.map((project, index) => {
              return (
                <ProjectItem
                  {...project}
                  index={index}
                  key={`index+${Math.random()}`}
                />
              );
            })}
      </div>
    </main>
  );
};

export default Projects;
