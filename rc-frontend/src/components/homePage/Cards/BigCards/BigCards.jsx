import styles from './bigcards.module.css';
import SingleBigCard from './SingleBigCard';
import bigcardsData from "./bigcardsData";


const BigCards = () => {
  return (

    <section className={styles.bigCardsContainer}>
      <div className={styles.bigCardsWrapper}>
        {bigcardsData.map((bigcard, index) => {
          const { id, title, image, description, url, category } = bigcard;
          return (
            <SingleBigCard key={id}
              title={title}
              image={image}
              description={description}
              url={url}
              category={category}
            />
          );
        })}

      </div>
    </section>

  );
};

export default BigCards;