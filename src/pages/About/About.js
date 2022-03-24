import react from "../../assets/react-skill.png";
import js from "../../assets/js-skill.png";
import java from "../../assets/java-skill.png";
import html from "../../assets/html-skill.png";
import css from "../../assets/css-skill.png";
import mui from "../../assets/mui-skill.png";
import mongo from "../../assets/mongo-skill.png";
import express from "../../assets/express-skill.png";
import node from "../../assets/node-skill.png";
import firebase from "../../assets/firebase-skill.png";
import rq from "../../assets/rq-skill.svg";
import git from "../../assets/git-skill.png";
import SkillItem from "./components/SkillItem";
import "./About.css";

const About = () => {
  const skillData = [
    {
      src: js,
      skill: "JavaScript",
    },
    {
      src: java,
      skill: "Java",
    },
    {
      src: html,
      skill: "HTML5",
    },
    {
      src: css,
      skill: "CSS3",
    },
    {
      src: mongo,
      skill: "MongoDB",
    },
    {
      src: express,
      skill: "ExpressJS",
    },
    {
      src: react,
      skill: "ReactJS",
    },
    {
      src: node,
      skill: "NodeJS",
    },
    {
      src: mui,
      skill: "MaterialUI",
    },
    {
      src: firebase,
      skill: "Firebase",
    },
    {
      src: rq,
      skill: "React Query",
    },
    {
      src: git,
      skill: "Git & Github",
    },
  ];

  return (
    <main className="about-main">
      <div className="about-me">
        <h2>About Me</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          esse eaque veniam, illo expedita voluptatum, totam recusandae odio
          natus laborum nisi alias architecto enim, est facere doloremque
          similique officiis. Recusandae!
        </span>
      </div>
      <div className="skills">
        <h2>Skills & Technologies</h2>
        <div className="skill-item-container">
          {skillData.map((skill) => {
            return <SkillItem {...skill} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default About;