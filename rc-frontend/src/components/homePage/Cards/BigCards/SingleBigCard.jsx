import styles from './bigcards.module.css';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";


const SingleBigCard = (props) => {
  const { title, image, description, url, category } = props;

  return (

    <Link className={`${ styles.singleBigCard }  ${ styles[ category ] }`} to={`roadmaps/${ url }`} >
      <div className={styles.bigcardHeader}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.bigcardBody}>
        <h2>{title}</h2>
        <p className="card-description">{description}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.bigcardButton} >Get Started <BsArrowRight className={styles.bigcardIcon} /></button>
        </div>
      </div>
    </Link>
  );
};

export default SingleBigCard;



