import { Link } from "react-router-dom";
import styles from "./roadmapsMegamenu.module.css";
import { FaTimes } from "react-icons/fa";


const RoadmapsMegaMenu = ({ handleClose }) => {


  return (
    <div className={styles.MegaMenuContainer} >
      <div className={styles.MegaMenuWrapper}>

        <header>
          <h2><b>Roadmaps</b></h2>
          <button className={styles.closeBtn} onClick={handleClose}>
            <FaTimes className={styles.closeBtnIcon} />
          </button>
        </header>

        <div className={styles.MegaMenuContent}>
          <div className={styles.roadmapsContainer}>
            <div className={styles.roadmaps}>
              <CategoryLink categoryName="Frontend" linkTo="/roadmaps/frontend" click={handleClose} />
              <RoadmapLink to="/roadmaps/javascript" title="JavaScript" click={handleClose} />
              <RoadmapLink to="/roadmaps/reactjs" title="ReactJS" click={handleClose} />
              <RoadmapLink to="/roadmaps/cs" title="Computer Science" click={handleClose} />
            </div>
            <div className={styles.roadmaps}>
              <CategoryLink categoryName="Backend" linkTo="/roadmaps/backend" click={handleClose} />
              <RoadmapLink to="/roadmaps/nodejs" title="NodeJS" click={handleClose} />
              <RoadmapLink to="/roadmaps/expressjs" title="ExpressJS" click={handleClose} />
              <RoadmapLink to="/roadmaps/mongodb" title="MonogDB" click={handleClose} />
            </div>
            <div className={styles.roadmaps}>
              <CategoryLink categoryName="Others" linkTo="/roadmaps/python" click={handleClose} />
              <RoadmapLink to="/roadmaps/python" title="Python" click={handleClose} />
              <RoadmapLink to="/roadmaps/java" title="Java" click={handleClose} />
              <RoadmapLink to="/roadmaps/flutter" title="Flutter" click={handleClose} />
            </div>
            <div className={styles.roadmaps}>
              <CategoryLink categoryName="Advanced" linkTo="/roadmaps/ai" click={handleClose} />
              <RoadmapLink to="/roadmaps/ai" title="Artificial Intellegence" click={handleClose} />
              <RoadmapLink to="/roadmaps/ml" title="Machine Learning" click={handleClose} />
              <RoadmapLink to="/roadmaps/dl" title="Deep Learning" click={handleClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryLink = ({ categoryName, linkTo, click }) => {
  return (
    <Link to={linkTo} className={styles.categoryLink} onClick={click}>
      <h3>{categoryName}</h3>
    </Link>
  );
};

const RoadmapLink = ({ to, title, click }) => (
  <Link to={to} className={styles.link} onClick={click}>
    <h5>{title}</h5>
  </Link>
);

export default RoadmapsMegaMenu;