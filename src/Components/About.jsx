import React from "react";
import "../App.css";
import styles from "./About.module.css";
import Photo from "../../images/fotoperfilIA.png?react";

const About = () => {
  return (
    <section className={`${styles.aboutContainer} container`}>
      <h1 className={styles.titulo}>About me, I hope you like it</h1>
      <div className={styles.about}>
        <div className={styles.imagem}>
          <img src={Photo} alt="" />
        </div>
        <div className={styles.text}>
          <p>
            <strong>Hey, Im Alestan Alves. </strong>
            Im passionate about technology! I repair computers since I was 10
            and I create software since I was 13. <br />
          </p>
          <p>
            im currently the <strong>Data & Analytics Lead</strong> at TOTVS and
            Content Creator / Ethical Hacking at @ackercode. Is a young
            brazilian, living in <strong> Sao Paulo</strong> with my amazing
            wife.
          </p>
          <p>
            {" "}
            <strong>I love star wars</strong>, open source, and side projects.
            When Im not working, I like games, watching movies and action
            figures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
