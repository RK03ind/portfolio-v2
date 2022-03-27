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
          Hi 👋 <br />
          I'm Rudra Konar, a 18 year old Web Developer. <br /> I have a serious
          passion for coding and software development, always open to learn and
          adapt new technologies. <br /> I am a very good problem solver both in
          real life and in computers. Currently levelling up my MERN stack
          knowledge. If you've any project or questions in mind feel free to dm
          me I'd be happy to discuss 😀
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
