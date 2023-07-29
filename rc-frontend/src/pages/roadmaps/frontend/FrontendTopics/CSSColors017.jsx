import React from "react";
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const CSSColors017 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "CSS Colors (MDN Docs)",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors",
    },
    {
      id: 2,
      title: "CSS Colors (W3Schools)",
      url: "https://www.w3schools.com/cssref/css_colors.php",
    },
    {
      id: 3,
      title: "CSS Colors Explained",
      url: "https://www.sitepoint.com/css-colors-explained/",
    },
    {
      id: 4,
      title: "CSS Colors: A Complete Guide",
      url: "https://www.digitalocean.com/community/tutorials/css-colors-a-complete-guide",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>CSS Colors</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-selectors-16"
          nextTo="/roadmaps/frontend/css-typography-18"
        />
        <hr />

        <h2>CSS Colors</h2>
        <p>
          CSS colors are used to define the color of HTML elements. They can be
          used to set the background color of an element, the text color, or any
          other color property. CSS colors can be specified in a variety of
          ways, including by name, by hexadecimal value, by RGB value, and more.
          By using CSS colors effectively, you can create visually appealing and
          engaging webpages.
        </p>

        <TopicVideoPlayer
          videoTitle="CSS Colors Tutorial"
          videoSrc="https://www.youtube.com/embed/Ddc-IIrIot0"
        />
        <TopicVideoPlayer
          videoTitle="CSS Colors Explained"
          videoSrc="https://www.youtube.com/embed/srg4sIbzE1k"
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
          topicName="CSSColors017"
          topicId={17}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-selectors-16"
          nextTo="/roadmaps/frontend/css-typography-18"
        />
      </div>
    </div>
  );
};

export default CSSColors017;
