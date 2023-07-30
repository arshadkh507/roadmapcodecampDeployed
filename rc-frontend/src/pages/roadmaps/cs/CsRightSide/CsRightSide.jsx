import { useEffect, useState } from "react";
import styles from "../../roadmapsAssets/rightside.module.css";
import { FiExternalLink } from 'react-icons/fi';
import { useLocation } from "react-router-dom";

const CsRightSide = () => {

  const [ roadmapName, setRoadmapName ] = useState('');
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path.includes('cs')) {
      setRoadmapName("Computer Science");
    }
  }, [ path ]);

  return (
    <>
      <div className={styles.rightSideContainer}>
        <h2>{roadmapName} Learning resources</h2>
        <div className={styles.rightSideCards}>
          <RoadmapRightSideCard
            website="edX"
            title="Introduction to Computer Science"
            image="https://partnerships.edx.org/hubfs/Logo%20Files/edX%20Logo%20-%20SVG.svg"
            link="https://www.edx.org/course/cs50s-introduction-to-computer-science"
          />
          <RoadmapRightSideCard
            website="Coursera"
            title="Algorithms and Data Structures Specialization"
            image="https://venturebeat.com/wp-content/uploads/2020/04/coursera-social-logo.png?w=1200&strip=all"
            link="https://www.coursera.org/specializations/algorithms"
          />
          <RoadmapRightSideCard
            website="Codecademy"
            title="Data Science Career Path"
            image="https://getlogovector.com/wp-content/uploads/2020/11/codecademy-logo-vector.png"
            link="https://www.codecademy.com/learn/paths/data-science"
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


export default CsRightSide;



