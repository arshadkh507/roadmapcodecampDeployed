import SearchBar from "./SearchBar";
import styles from "./searchSection.module.css";

const SearchSection = () => {
  return (
    <>
      <section className={styles.searchSectionContainer} >
        <div className={styles.searchSectionTop}>
          <h1> Tech Skills Journey </h1>
          <h3>Your Guide to Progress and Success</h3>
          <br />
          <SearchBar />
          <h3>From Beginner to Tech Pro: <br /><br />
            Your Roadmap for CS, ML, and much More
          </h3>
        </div>
        <svg className={styles.svg} width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" className={styles.svgPath}></path>
        </svg>
      </section>
    </>
  );
};

export default SearchSection; 