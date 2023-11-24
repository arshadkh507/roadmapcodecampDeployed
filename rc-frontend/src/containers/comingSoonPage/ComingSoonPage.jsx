import React from "react";
import styles from "./comingSoon.module.css";

const ComingSoonPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sorry, Roadmaps are under construction!</h1>
      <p className={styles.description}>
        We're working hard to bring you the best roadmaps for Python, AI, ML,
        DL, Backend, Android, JavaScript, ReactJS, NodeJS, Java, Flutter, CS,
        Frontend, and more! Your patience is highly appreciated.
      </p>

      <div className={styles.gifcontainer}>
        <div className={styles.gifWrapper}>
          <iframe
            src="https://giphy.com/embed/5Kz0kIpeDjzFCR5XB1"
            title="Construction Gif"
            width="100%"
            height="100%"
            className={styles.giphyEmbed}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
        

      <div className={styles.socialIconsContainer}>
        <a href="https://twitter.com/yourcompany">
          <i className={`fab fa-twitter ${styles.socialIcon}`}></i>
        </a>
        <a href="https://facebook.com/yourcompany">
          <i className={`fab fa-facebook ${styles.socialIcon}`}></i>
        </a>
        <a href="https://linkedin.com/company/yourcompany">
          <i className={`fab fa-linkedin ${styles.socialIcon}`}></i>
        </a>
      </div>
    </div>
  );
};

export default ComingSoonPage;
