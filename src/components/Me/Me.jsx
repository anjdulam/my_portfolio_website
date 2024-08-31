import React from "react";

import styles from "./Me.module.css";
import { getImageUrl } from "../../utils";

export const Me = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anjali</h1>
        <p className={styles.description}>
        Passionate Computer Science Engineer | Innovating at the Intersection of Code and Technology        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("me/myimg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
