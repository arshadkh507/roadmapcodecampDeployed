import { Link } from "react-router-dom";
import styles from "../roadmapsAssets/topics.module.css";

const PaginationButtons = ({ prevTo, nextTo }) => {
  return (
    <div className={styles.nextprevButtons}>
      <Link to={prevTo} className={styles.prevBtn}>
        ❮ Previous
      </Link>
      <Link to={nextTo} className={styles.nextBtn}>
        Next ❯
      </Link>
    </div>
  );
};

export default PaginationButtons;