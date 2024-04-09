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
              <h3>Frontend Developer</h3>
              <p>
                Proficient in Java, Python, and JavaScript, with hands-on experience in HTML, CSS, Bootstrap, ReactJS, Vite. I focus on crafting responsive and optimized sites to deliver exceptional user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Proficienct in Node.js, Express.js, and MongoDBI, MySQL. I'm diving into creating foundational backend systems and APIs. 
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
              Possessing a keen eye for detail and a drive for problem-solving, I architect robust solutions powering core functionalities of web applications.              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
