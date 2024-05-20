import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl(".aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Web Developer</h3>
              <p>
              Experienced in creating seamless user experiences and scalable web applications using modern front-end technologies (React, Vite, Yarn, Next) and back-end technologies (Node.js, Express.js, MongoDB, MySQL)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>AI Engineer with expertise in NLP and LLMs</h3>
              <p>
              Skilled in developing end-to-end AI solutions across diverse domains. Proficient in leveraging cutting-edge tools such as Google's Gemini AI model and OpenAI API to enhance language understanding and generation. Committed to driving innovation and facilitating meaningful communication through AI technology
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/pp.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Continuous Learning</h3>
              <p>
              Committed to ongoing self-improvement, I have completed courses in Python for Data Science and Java Data Structures and Algorithms, enhancing my expertise in key areas of technology.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem-Solving Passion</h3>
              <p>
              Passionate about DSA (Data Structures and Algorithms) and actively engaged in their application to solve real-world problems.        
              </p>
              </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
