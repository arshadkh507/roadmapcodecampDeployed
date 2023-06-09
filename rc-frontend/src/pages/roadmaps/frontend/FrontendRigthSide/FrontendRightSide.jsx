
import { useEffect, useState } from "react";
import styles from "../../roadmapsAssets/rightside.module.css";

import { FiExternalLink } from 'react-icons/fi';
import { useLocation } from "react-router-dom";

const FrontendRightSide = () => {

  const [ roadmapName, setRoadmapName ] = useState('');
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path.includes('frontend')) {
      setRoadmapName("Frontend");
    }
  }, [ path ]);

  return (
    <>
      <div className={styles.rightSideContainer}>
        <h2>{roadmapName} Learning resources</h2>
        <div className={styles.rightSideCards}>
          <RoadmapRightSideCard
            website="FreeCodeCamp"
            title="Responsive Web Design Certification"
            image="https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.png"
            link="https://www.freecodecamp.org/certification/fcc5d6d5e06-5ee8-4cb4-bc4e-f09de352a062/responsive-web-design"
          />
          <RoadmapRightSideCard
            website="Udacity"
            title="Front-End Web Developer Nanodegree"
            image="https://www.udacity.com/assets/iridium/images/core/header/udacity-wordmark.svg"
            link="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011"
          />
          <RoadmapRightSideCard
            website="Codecademy"
            title="Front-End Engineer Career Path"
            image="https://cdn-images-1.medium.com/max/1200/1*FEE98iWinlZBYkxBAG8MvA.png"
            link="https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
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
        <p >
          {website}
          <FiExternalLink className={styles.cardLinkIcon} />
        </p>

      </div>
    </div>
  );
};


export default FrontendRightSide;



