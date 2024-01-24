import React from "react";
import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <section className={`${styles.projects} container`}>
      <h1 className={styles.titleProject}>Open Source. Side Project.</h1>
      <div className={styles.showing}>
        <h1>All projects</h1>
        <div className={styles.myprojects}>
          <h3>2024</h3>
          <ul>
            <li>
              <a href="">GymGenius </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
