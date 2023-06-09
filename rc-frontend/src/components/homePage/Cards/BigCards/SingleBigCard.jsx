import styles from './bigcards.module.css';
import PropTypes from 'prop-types';
import image from "../../../../assets/images/frontend.jpg";
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




// Defining Types of Different variables
/* !Defining Types of Different variables
 SingleBigCard.propTypes = {
  name: PropTypes.string.isRequired, // define the name prop as a required string
};

SingleBigCard.defaultProps = {
  name: 'Default Name', // set the default value for name prop
}; 
*/