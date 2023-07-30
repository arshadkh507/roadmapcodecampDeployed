import React, { useEffect, useState } from "react";
import styles from "../../roadmapsAssets/rightside.module.css";
import { FiExternalLink } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const AIRightSide = () => {
  const [roadmapName, setRoadmapName] = useState("");
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    switch (true) {
      case path.includes("ai"):
        setRoadmapName("Artificial Intellegence");
        break;
      default:
        setRoadmapName("");
        break;
    }
  }, [path]);

  return (
    <>
      <div className={styles.rightSideContainer}>
        <h2>{roadmapName} Learning resources</h2>
        <div className={styles.rightSideCards}>
          <RoadmapRightSideCard
            website="Coursera"
            title="AI For Everyone"
            image="https://upload.wikimedia.org/wikipedia/commons/e/e5/Coursera_logo.PNG"
            link="https://www.coursera.org/learn/ai-for-everyone"
          />
          <RoadmapRightSideCard
            website="Udacity"
            title="Artificial Intelligence Nanodegree"
            image="https://tse2.mm.bing.net/th?id=OIP.VqUfhw5PDAT5oqKxk024qAHaD4&pid=Api&P=0&h=180"
            link="https://www.udacity.com/course/artificial-intelligence-nanodegree--nd889"
          />
          <RoadmapRightSideCard
            website="edX"
            title="Introduction to Artificial Intelligence (AI)"
            image="https://partnerships.edx.org/hubfs/Logo%20Files/edX%20Logo%20-%20SVG.svg"
            link="https://www.edx.org/course/introduction-to-artificial-intelligence-ai"
          />
        </div>
      </div>
    </>
  );
};

const RoadmapRightSideCard = ({ website, title, image, link }) => {
  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.card} onClick={() => handleCardClick(link)}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p>
          {website}
          <FiExternalLink className={styles.cardLinkIcon} />
        </p>
      </div>
    </div>
  );
};

export default AIRightSide;
