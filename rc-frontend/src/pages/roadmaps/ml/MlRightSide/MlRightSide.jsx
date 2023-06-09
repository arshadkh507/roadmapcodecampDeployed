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
            image="https://i.imgur.com/0WwHMTe.jpg"
            link="https://www.coursera.org/learn/machine-learning"
          />
          <RoadmapRightSideCard
            website="Fast.ai"
            title="Fast.ai"
            image="https://i.imgur.com/8sW7Cye.jpg"
            link="https://www.fast.ai/"
          />
          <RoadmapRightSideCard
            website="Stanford University"
            title="CS229: Machine Learning"
            image="https://i.imgur.com/2S2mPfK.jpg"
            link="https://see.stanford.edu/Course/CS229"
          />
          <RoadmapRightSideCard
            website="Udacity"
            title="Machine Learning Engineer Nanodegree"
            image="https://i.imgur.com/PpA6ZBO.jpg"
            link="https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t"
          />
          <RoadmapRightSideCard
            website="Machine Learning Mastery"
            title="Machine Learning Mastery"
            image="https://i.imgur.com/wMdw42x.jpg"
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



