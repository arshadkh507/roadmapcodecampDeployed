import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const CSSSelectors016 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "CSS Selectors (MDN Docs)",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
    },
    {
      id: 2,
      title: "CSS Selectors (W3Schools)",
      url: "https://www.w3schools.com/cssref/css_selectors.asp",
    },

    {
      id: 3,
      title: "CSS Selectors - CSS | MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>CSS Selectors</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-learn-the-basics-15"
          nextTo="/roadmaps/frontend/css-colors-17"
        />
        <hr />

        <h2>CSS Selectors</h2>
        <p>
          Welcome to "CSS Selectors", where you'll learn about the powerful tools used to target specific elements on a webpage for styling. CSS selectors range from simple element names to more complex rules that can select based on attributes, state, and more. By mastering CSS selectors, you'll be able to create more efficient and maintainable stylesheets.
        </p>
        <p>
          CSS selectors are used to select and style HTML elements. They are used in conjunction with CSS properties to define how an element should look on a webpage. CSS selectors can be used to select elements based on their tag name, class name, ID, attribute values, and more. By using CSS selectors effectively, you can create more efficient and maintainable stylesheets
        </p>

        <TopicVideoPlayer
          videoTitle="CSS Selectors - Web Development Tutorial"
          videoSrc="https://www.youtube.com/embed/7UGnp5HeMhE"
        />
        <TopicVideoPlayer
          videoTitle="CSS Selectors Explained"
          videoSrc="https://www.youtube.com/embed/cFzF0oOPKLk"
        />
        <TopicVideoPlayer
          videoTitle="Mastering CSS Selectors"
          videoSrc="https://www.youtube.com/embed/4Nj2Y6x8ObE"
        />

        <hr />

        <div className={styles.topicResources}>
          <h2>Recommended Reading</h2>
          <ul>
            {recommendedReading.map((item) => (
              <li key={item.id}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <TaskStateButtons
          topicName="CSSSelectors016"
          topicId={16}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-learn-the-basics-15"
          nextTo="/roadmaps/frontend/css-colors-17"
        />
      </div>
    </div>
  );
};

export default CSSSelectors016;





