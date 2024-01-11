import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.home}`}>
      <div className={styles.apresentacao}>
        <h1 className={styles.name}>Eduardo Brito</h1>
        <div className={styles.informations}>
          <p>
            Data Lead at TOTVS, Hacker and Content Creator at Acker code
          </p>
          
          <p>Programming makes me happy :-().</p>
        </div>
      </div>

      <footer className={styles.mdsociais}>
        <ul className={styles.listaMidias}>
          <li>
            <a href="">Email</a>
          </li>
          <li>
            <a href="">twitter</a>
          </li>
          <li>
            <a href="https://github.com/EduardoBrito9">github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eduardo-paulino-brito/">linkedin</a>
          </li>
          <li>
            <a href="https://www.instagram.com/duubritoo_/">instagram</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
