import { useEffect, useState } from "react";
import styles from "./searchSection.module.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const listOfSearchResults = [
    { title: "Python", url: "/roadmaps/python", id: 1 },
    { title: "Artificail Intelligence", url: "/roadmaps/ai", id: 2 },
    { title: "Machine Learning", url: "/roadmaps/ml", id: 3 },
    { title: "Deep Learning", url: "/roadmaps/dl", id: 4 },
    { title: "Backend", url: "/roadmaps/backend", id: 5 },
    { title: "Android", url: "/roadmaps/android", id: 6 },
    { title: "JavaScript", url: "/roadmaps/javascript", id: 7 },
    { title: "ReactJS", url: "/roadmaps/reactjs", id: 8 },
    { title: "NodeJS", url: "/roadmaps/nodejs", id: 9 },
    { title: "Java", url: "/roadmaps/java", id: 10 },
    { title: "Flutter", url: "/roadmaps/flutter", id: 11 },
    { title: "Frontend", url: "/roadmaps/frontend", id: 12 },
    { title: "Computer Scrience", url: "/roadmaps/cs", id: 13 },
  ];

  const [ inputText, setInputText ] = useState("");
  const [ searchResults, setSearchResults ] = useState([]);
  const [ typed, setTyped ] = useState(false);

  const handleInput = (event) => {
    if (event.target.value) {
      setTyped(true);
    } else {
      setTyped(false);
    }

    setInputText(event.target.value);

    if (event.target.value) {
      const filteredResults = listOfSearchResults.filter((result) =>
        result.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchResults(filteredResults.slice(0, 5));
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    // Add event listener to the document
    document.addEventListener("mousedown", handleMouseDown);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const handleMouseDown = (event) => {
    // Check if the event target is a search result link or the search input
    const isSearchResultLink = event.target.closest(`.${ styles.searchItem }`);
    const isSearchInput = event.target.closest(`.${ styles.searchInput }`);

    // If the user clicks outside of the search input or the search results container or on a search result link, hide the search results
    if (!isSearchResultLink && !isSearchInput) {
      setTyped(false);
      // setSearchResults([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <div className={styles.searchbarContainer}>
          <input
            type="text"
            className={
              typed
                ? `${ styles.inputTyped } ${ styles.searchInput }`
                : styles.searchInput
            }
            placeholder="Search our roadmaps, e.g. Frontend"
            autoComplete="off"
            value={inputText}
            onChange={handleInput}
            onBlur={handleMouseDown}
          />

          {/* && searchResults.length > 0 */}
          {typed && (
            <div
              className={styles.listofSearchResults}
              onMouseDown={handleMouseDown}
            >
              {searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <Link
                    to={result.url}
                    key={result.id}
                    className={styles.searchItem}
                  >
                    {result.title}
                  </Link>
                ))
              ) : (
                <span className={styles.searchItem}>No results found.</span>
              )}
            </div>
          )}

          <button type="button" className={styles.searchButton}>
            <FaSearch className={styles.searchIcon} />
          </button>
        </div>
        <div className={styles.listofSearchResults}></div>
      </form>
    </>
  );
};

export default SearchBar;
