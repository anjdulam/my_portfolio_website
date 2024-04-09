import React from "react";

import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  // Filter the history array to only include the first two items
  const displayedHistory = history.slice(0, 2);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.historyGrid}>
          {displayedHistory.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>

                <div className={styles.historyItemUrl}>
                  <a href={historyItem.url} target="_blank" rel="noopener noreferrer">
                    {historyItem.url}
                  </a>
                </div>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};