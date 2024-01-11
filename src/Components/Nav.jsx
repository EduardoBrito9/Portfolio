import React from "react";
import styles from "./Nav.module.css";
import "../App.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <header>
      <nav className={`${styles.navegacao} container`}>
        <Link to="/">
          <h2 className={styles.name}>Eduardo</h2>
        </Link>

        <ul className={styles.infs}>
          <Link to="about">About</Link>
          <Link to="skills">Skills</Link>
          <Link to="projects">Projects</Link>
        </ul>
        <h3>Imagem</h3>
      </nav>
    </header>
  );
};

export default Nav;
