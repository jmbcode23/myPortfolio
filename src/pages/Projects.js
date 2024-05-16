import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import { motion } from "framer-motion";


import "../styles/Projects.css";

function Projects() {
  return (
    <motion.div className="projects"
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight, transition: { duration: 0.5 } }}
    >
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
