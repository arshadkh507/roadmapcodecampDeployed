import styles from "./smallcards.module.css";
import SingleSmallCard from "./SingleSmallCard";
import smallcardsData from "./smallcardsData";

const SmallCards = () => {
  return (
    <>
      <section className={styles.smallcardsContainer}>
        <div className={styles.smallcardsWrapper}>
          <div className={styles.smallcardsContent}>
            {
              smallcardsData.map((card) => {
                const { id, title, description, color, url } = card;
                return (
                  <SingleSmallCard
                    title={title} key={id}
                    url={url} color={color}
                    description={description}
                  />
                );
              }
              )
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default SmallCards; 
