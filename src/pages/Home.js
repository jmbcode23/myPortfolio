import React from "react";
import "../styles/Home.css";
import profile from '../assets/profile.png';
import { motion } from "framer-motion";
import cv from '../assets/CV Jonathan Milolo Beya.pdf';

function Home() {
  
  return (
    <motion.div className="home"
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight, transition: { duration: 0.5 } }}
    >
      <div className="about">
        <h2> Hi there, My Name is Jonathan</h2>
        <motion.button ><a href={cv} target="_blank">Curriculum Vitae</a></motion.button>
        <motion.img drag whileHover={{ scale: 1.1 }} src={profile} style={{ borderRadius: 10, width: 200 }} />
        <div className="prompt">
          <p>A Web developer with a passion for learning and creating amazing Designs.</p>
          {/* <LinkedInIcon />
          <EmailIcon />
          <GithubIcon /> */}
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, BootStrap, Ant design, Framer Motion
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Version controls</h2>
            <span>Git and GitHub</span>
          </li>
        </ol>
      </div>
    </motion.div>
  );
}

export default Home;
