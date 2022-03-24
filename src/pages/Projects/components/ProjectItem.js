import { ReactComponent as HTML } from "../../../assets/html-mini.svg";
import { ReactComponent as CSS } from "../../../assets/css-mini.svg";
import { ReactComponent as React } from "../../../assets/react-mini.svg";
import { ReactComponent as Node } from "../../../assets/node-mini.svg";
import { ReactComponent as Express } from "../../../assets/express-mini.svg";
import { ReactComponent as Mongo } from "../../../assets/mongo-mini.svg";
import { ReactComponent as Firebase } from "../../../assets/firebase-mini.svg";
import { ReactComponent as Android } from "../../../assets/android-mini.svg";
import { ReactComponent as Java } from "../../../assets/java-mini.svg";
import { ReactComponent as Kotlin } from "../../../assets/kotlin-mini.svg";
import { ReactComponent as JavaScript } from "../../../assets/js-mini.svg";
import "./ProjectItem.css";

const ProjectItem = (props) => {
  const openLiveDemo = () => {
    window.open(props.liveLink, "_blank");
  };

  const openGithubLink = () => {
    window.open(props.githubLink, "_blank");
  };

  return (
    <div className="project-item animate__animated slideInUpCustom">
      <div className="title">{props.title}</div>
      <span className="timeline">{props.timeTaken}</span>
      <div className="desc">{props.desc}</div>
      <div className="techstack-container">
        <span>Tech Stack:</span>
        {props.techStack.includes("html") && <HTML />}
        {props.techStack.includes("css") && <CSS />}
        {props.techStack.includes("mongo") && <Mongo />}
        {props.techStack.includes("express") && <Express />}
        {props.techStack.includes("react") && <React />}
        {props.techStack.includes("node") && <Node />}
        {props.techStack.includes("firebase") && <Firebase />}
        {props.techStack.includes("android") && <Android />}
        {props.techStack.includes("java") && <Java />}
        {props.techStack.includes("kotlin") && <Kotlin />}
        {props.techStack.includes("javascript") && <JavaScript />}
        {/* {props.techStack.includes("techName") && <Tech-Icon/>}  -> dummy code for displaying tech stack*/}
      </div>
      <div className="button-container">
        <button className="live" onClick={openLiveDemo}>
          Live Demo
        </button>
        <button className="github" onClick={openGithubLink}>
          View Source
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
