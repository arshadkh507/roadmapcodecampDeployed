import { useEffect, useState } from "react";
import styles from "../../roadmapsAssets/rightside.module.css";
import { FiExternalLink } from 'react-icons/fi';
import { useLocation } from "react-router-dom";

const MlRightSide = () => {

  const [ roadmapName, setRoadmapName ] = useState('');
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path.includes('ml')) {
      setRoadmapName("Machine Learning");
    }
  }, [ path ]);

  return (
    <>
      <div className={styles.rightSideContainer}>
        <h2>{roadmapName} Learning resources</h2>
        <div className={styles.rightSideCards}>
          <RoadmapRightSideCard
            website="Coursera"
            title="Machine Learning"
            image="https://venturebeat.com/wp-content/uploads/2020/04/coursera-social-logo.png?w=1200&strip=all"
            link="https://www.coursera.org/learn/machine-learning"
          />
          <RoadmapRightSideCard
            website="Fast.ai"
            title="Fast.ai"
            image="https://tse1.mm.bing.net/th?id=OIP.R19cvVFeOywO09RWFbj7DQHaD3&pid=Api&P=0&h=180"
            link="https://www.fast.ai/"
          />
          <RoadmapRightSideCard
            website="Stanford University"
            title="CS229: Machine Learning"
            image="https://tse1.mm.bing.net/th?id=OIP.BILU3a1liEu6HHwPyCSbAgHaHa&pid=Api&P=0&h=180"
            link="https://see.stanford.edu/Course/CS229"
          />
          <RoadmapRightSideCard
            website="Udacity"
            title="Machine Learning Engineer Nanodegree"
            image="https://tse2.mm.bing.net/th?id=OIP.VqUfhw5PDAT5oqKxk024qAHaD4&pid=Api&P=0&h=180"
            link="https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t"
          />
          <RoadmapRightSideCard
            website="Machine Learning Mastery"
            title="Machine Learning Mastery"
            image="https://machinelearningmastery.com/wp-content/uploads/2014/07/MachineLearningMastery.png"
            link="https://machinelearningmastery.com/start-here/"
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


export default MlRightSide;



