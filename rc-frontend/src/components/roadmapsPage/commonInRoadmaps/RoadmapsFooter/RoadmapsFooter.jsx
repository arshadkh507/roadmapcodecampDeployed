import { Link } from "react-router-dom";
import styles from "./roadmapsFooter.module.css";


const RoadmapsFooter = () => {
  return (
    <div className={styles.roadmpasFooterContainer}>
      <div className={styles.roadmapsFooterWrapper}>
        <div className={styles.roadmapsFooter}>
          <Link to="/roadmaps/frontend" className={styles.link}>
            <h3>Frontend</h3>
          </Link>
          <h5>JavaScript</h5>
          <h5>ReactJS</h5>
          <h5>CSS</h5>
        </div>
        <div className={styles.roadmapsFooter}>
          <h3>Backend</h3>
          <h5>ExpressJS</h5>
          <h5>NoteJS</h5>
          <h5>MongoDB</h5>
        </div>
        <div className={styles.roadmapsFooter}>
          <h3>Others</h3>
          <h5>Python</h5>
          <h5>Flutter</h5>
          <h5>Java</h5>
        </div>
        <div className={styles.roadmapsFooter}>
          <h3>Advnaced</h3>
          <h5>AI</h5>
          <h5>ML</h5>
          <h5>DL</h5>
        </div>
      </div>
    </div>
  );
};

export default RoadmapsFooter;