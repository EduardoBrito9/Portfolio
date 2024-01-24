import React from "react";
import styles from "./Nav.module.css";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <header>
      <nav className={`${styles.navegacao} container`}>
        <Link to="/">
          <h2 className={styles.name}>Eduardo</h2>
        </Link>

        <ul className={styles.infs}>
          <NavLink to="about">About</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="projects">Projects</NavLink>
        </ul>
        <h3>Imagem</h3>
      </nav>
    </header>
  );
};

export default Nav;
