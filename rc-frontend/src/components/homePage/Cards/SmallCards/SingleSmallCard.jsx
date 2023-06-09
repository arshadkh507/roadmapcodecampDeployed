import { Link } from "react-router-dom";
import styles from "./smallcards.module.css";

const SingleSmallCard = (props) => {
  const { title, description, color, url } = props;
  return (
    <div className={styles.smallCard} style={{ backgroundColor: `var(${ color })` }}>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <Link to={`roadmaps/${ url }`} className={styles.smallCardButton} >Follow Roadmap</Link>
    </div>
  );
};

export default SingleSmallCard; 
