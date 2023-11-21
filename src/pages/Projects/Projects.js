import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProjectItem from "./components/ProjectItem";
import "./Projects.css";

const Projects = () => {
  const projectsData = [
    // {
    //   title: "Expense Tracker (PWA)",
    //   desc: "A very simple Expense Tracker PWA with intiutive expense tracking charts and complete offline working capabilities. Built with ReactJS and Workbox.",
    //   timeTaken: "Dec 2021",
    //   techStack: ["react", "html", "css", "javascript"],
    //   liveLink: "https://expense-tracker-offline.netlify.app/",
    //   githubLink: "https://github.com/RK03ind/expense-tracker-pwa",
    // },
    {
      title: "Movie List",
      desc: "A MERN Stack based Web App for viewing & searching trending/old movies and making watchlists with them.",
      timeTaken: "March 2023 - April 2023",
      techStack: ["react", "express", "mongo", "node"],
      liveLink: "https://movie-list.rudrakonar.dev/",
      githubLink: "https://github.com/RK03ind/movie-list-public",
    },
    {
      title: "Travellers Stash",
      desc: "A MERN Stack based Social Media App. A place to share the beauty of this amazing world with people. Share places you've visited or want to visit, share any knowledge or facts regarding that place.",
      timeTaken: "Feb 2023 - March 2023",
      techStack: ["react", "express", "mongo", "node"],
      liveLink: "https://travellers-stash.rudrakonar.dev/",
      githubLink: "https://github.com/RK03ind/Travellers-Stash-Public",
    },
    {
      title: "Realtime Chat App",
      desc: "A Realtime Chat WebApp built with ReactJS, Firebase and MUI Library including User Authentication, complete CRUD operations and multiple features.",
      timeTaken: "Dec 2022 - Jan 2023",
      techStack: ["react", "html", "css", "firebase"],
      liveLink: "https://livechat1.netlify.app/",
      githubLink: "https://github.com/RK03ind/Realtime-Chat",
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

  const neogProjectsData = [
    {
      title: "Do you know me? (Mark 1)",
      desc: "A simple CLI quiz app about me. ",
      timeTaken: "September 2022",
      techStack: ["javascript", "node"],
      liveLink: "https://replit.com/@RK03ind/DoYouKnowMe#index.js",
      githubLink: "https://github.com/RK03ind/Do-you-know-me-CLI-Quiz---mark1",
    },
    {
      title: "Dishonored Quiz (Mark 2)",
      desc: "A simple CLI quiz app about Dishonored Game Series. ",
      timeTaken: "September 2022",
      techStack: ["javascript", "node"],
      liveLink: "https://replit.com/@RK03ind/Are-you-a-dishonored-fan#index.js",
      githubLink: "https://github.com/RK03ind/Dishonored-CLI-Quiz-App--mark2",
    },
    {
      title: "Portfolio Website and Github (Mark 3,4,5)",
      desc: "This is my second portfolio site, created in March 2022. You can check the source code this and my earlier projects on github.",
      timeTaken: "-",
      techStack: ["html", "css", "react", "javascript"],
      liveLink: "https://github.com/RK03ind",
      githubLink: "https://github.com/RK03ind/portfolio-v2",
      button1: "My Github",
    },
    {
      title: "Minion Translator (Mark 6)",
      desc: "Translates standard english to minion language",
      timeTaken: "September 2022",
      techStack: ["html", "css", "javascript"],
      liveLink: "https://minion-translator-rk03.netlify.app/",
      githubLink:
        "https://github.com/RK03ind/Minion-Translator-Neog---Mark-Six-/",
    },
    {
      title: "Shakespeare Translator (Mark 7)",
      desc: "Translates standard english to shakespearean english",
      timeTaken: "September 2022",
      techStack: ["html", "css", "javascript"],
      liveLink: "https://english-shakespeare-translator.netlify.app/",
      githubLink:
        "https://github.com/RK03ind/Shakespeare-Translator--MarkSeven/",
    },
    {
      title: "Emoji Interpreter (Mark 8)",
      desc: "Interprets the meaning of certain emojis",
      timeTaken: "September 2022",
      techStack: ["html", "css", "javascript", "react"],
      liveLink: "https://emoji-meaning-rk03.netlify.app/",
      githubLink: "https://github.com/RK03ind/emoji-interpreter--mark8",
    },
    {
      title: "Good Games (Mark 9)",
      desc: "Provides game recommendations from various genres.",
      timeTaken: "September 2022",
      techStack: ["html", "css", "javascript", "react"],
      liveLink: "https://goodgames-rk03.netlify.app/",
      githubLink: "https://github.com/RK03ind/good-games--mark9",
    },
    {
      title: "Cash Register Manager (Mark 10)",
      desc: "Calculates the amount of change the cashier must return.",
      timeTaken: "September 2022",
      techStack: ["html", "css", "javascript"],
      liveLink: "https://cash-register-manager-rk03.netlify.app/",
      githubLink: "https://github.com/RK03ind/Cash-Register-Manager--mark10",
    },
    {
      title: "Is Your Birthday Lucky (Mark 11)",
      desc: "Checks if your birthdate is lucky",
      timeTaken: "September 2022",
      techStack: ["html", "css", "javascript"],
      liveLink: "https://lucky-birthday-rk03.netlify.app/",
      githubLink: "https://github.com/RK03ind/Is-Your-Birthday-Lucky--mark11",
    },
    {
      title: "Fun with Triangles  (Mark 12)",
      desc: "Webapp for quiz and calculator related to triangle",
      timeTaken: "September 2022",
      techStack: ["html", "css", "javascript", "react"],
      liveLink: "https://fun-with-triangles-rk03.netlify.app/",
      githubLink: "https://github.com/RK03ind/fun-with-triangles--mark12",
    },
    {
      title: "Palindrome Birthday (Mark 13)",
      desc: "Checks if your birthdate is palidrome",
      timeTaken: "September 2022",
      techStack: ["html", "css", "javascript"],
      liveLink: "https://palindrome-dob-rk03.netlify.app/",
      githubLink: "https://github.com/RK03ind/palidrome-birthday--mark13",
    },
    {
      title: "Profit or Loss (Mark 14)",
      desc: "Determines stock's profit or loss",
      timeTaken: "September 2022",
      techStack: ["html", "css", "javascript"],
      liveLink: "https://stock-rk03.netlify.app/",
      githubLink: "https://github.com/RK03ind/Profit-Loss-Calculator--mark14",
    },
    {
      title: "Linkedin and Blogs (Mark 15)",
      desc: "Visit my hashnode page to read blogs and linkedin to learn more about me.",
      timeTaken: "-",
      techStack: [],
      liveLink: "https://www.linkedin.com/in/rudra-konar/",
      githubLink: "/blogs",
      button1: "My Linkedin",
      button2: "Read my blogs",
    },
  ];
  const navigate = useNavigate();

  const location = useLocation();

  const [projectState, setProjectState] = useState(true);

  const switchProjectState = () => setProjectState((prevState) => !prevState);

  useEffect(() => {
    if (location.hash === "#neog") {
      setProjectState(false);
    }
  }, []);

  useEffect(() => {
    if (projectState) {
      navigate("/projects");
    } else {
      navigate("/projects#neog");
    }
  }, [navigate, projectState]);

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
          ? projectsData.map((project, index) => {
              return (
                <ProjectItem
                  {...project}
                  index={index}
                  key={`${index}+${project.title}`}
                />
              );
            })
          : neogProjectsData.map((project, index) => {
              return (
                <ProjectItem
                  {...project}
                  index={index}
                  key={`${index}+${project.title}`}
                />
              );
            })}
      </div>
    </main>
  );
};

export default Projects;
