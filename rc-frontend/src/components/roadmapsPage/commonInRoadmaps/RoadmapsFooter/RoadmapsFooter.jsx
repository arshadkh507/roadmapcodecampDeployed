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
          {/* <Link to="/roadmaps/javascript" className={styles.link}>
            <h5>JavaScript</h5>
          </Link>
          <Link to="/roadmaps/reactjs" className={styles.link}>
            <h5>ReactJS</h5> 
          </Link> */}
        </div>
        <div className={styles.roadmapsFooter}>
          <h3>Advanced</h3>
          <Link to="/roadmaps/ai" className={styles.link}>
            <h5>AI</h5>
          </Link>
          <Link to="/roadmaps/ml" className={styles.link}>
            <h5>ML</h5>
          </Link>
          {/* <Link to="/roadmaps/dl" className={styles.link}>
            <h5>DL</h5>
          </Link> */}
        </div>
        <div className={styles.roadmapsFooter}>
          {/* <h3>Backend</h3>
          <Link to="/roadmaps/expressjs" className={styles.link}>
            <h5>ExpressJS</h5>
          </Link>
          <Link to="/roadmaps/nodejs" className={styles.link}>
            <h5>NodeJS</h5>
          </Link>
          <Link to="/roadmaps/mongodb" className={styles.link}>
            <h5>MongoDB</h5>
          </Link> */}
        </div>
        <div className={styles.roadmapsFooter}>
          <h3>Others</h3>
          {/* <Link to="/roadmaps/python" className={styles.link}>
            <h5>Python</h5>
          </Link> */}
          <Link to="/roadmaps/cs" className={styles.link}>
            <h5>Computer Science</h5>
          </Link>
          {/* <Link to="/roadmaps/java" className={styles.link}>
            <h5>Java</h5>
          </Link> */}
        </div>
       
      </div>
    </div>
  );
};


export default RoadmapsFooter;