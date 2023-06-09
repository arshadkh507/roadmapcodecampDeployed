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
            image="https://via.placeholder.com/400x225?text=Placeholder+Image"
            link="https://www.edx.org/course/cs50s-introduction-to-computer-science"
          />
          <RoadmapRightSideCard
            website="Coursera"
            title="Algorithms and Data Structures Specialization"
            image="https://via.placeholder.com/400x225?text=Placeholder+Image"
            link="https://www.coursera.org/specializations/algorithms"
          />
          <RoadmapRightSideCard
            website="Codecademy"
            title="Data Science Career Path"
            image="https://via.placeholder.com/400x225?text=Placeholder+Image"
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



