import React from "react";
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const CSSLearnTheBasics015 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "CSS Basics (MDN Docs)",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps",
    },
    {
      id: 2,
      title: "Introduction to CSS (W3Schools)",
      url: "https://www.w3schools.com/css/",
    },
    {
      id: 3,
      title: "CSS Tutorial (CSS-Tricks)",
      url: "https://css-tricks.com/guides/beginner/",
    },
    {
      id: 4,
      title: "Learn CSS (Codecademy)",
      url: "https://www.codecademy.com/learn/learn-css",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>CSS Learn Basics</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-making-layouts-14"
          nextTo="/roadmaps/frontend/css-selectors-16"
        />
        <hr />

        <h2>CSS Learn Basics</h2>
        <p>
          Welcome to "CSS Learn Basics", the perfect starting point for your
          journey into the world of CSS. CSS, or Cascading Style Sheets, is a
          cornerstone technology used to style and layout web pages. In this
          topic, you'll learn the fundamental concepts of CSS, from selectors
          and properties to the box model and positioning. By the end of this
          topic, you'll have a solid foundation in CSS and be ready to style
          your own web pages. Happy learning!
        </p>

        <TopicVideoPlayer
          videoTitle="CSS Crash Course For Absolute Beginners"
          videoSrc="https://www.youtube.com/embed/yfoY53QXEnI"
        />
        <TopicVideoPlayer
          videoTitle="Learn CSS in 20 Minutes"
          videoSrc="https://www.youtube.com/embed/1Rs2ND1ryYc"
        />
        <TopicVideoPlayer
          videoTitle="CSS Full Course - Includes Flexbox and CSS Grid Tutorials"
          videoSrc="https://www.youtube.com/embed/ieTHC78giGQ"
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
          topicName="CSSLearnTheBasics015"
          topicId={15}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-making-layouts-14"
          nextTo="/roadmaps/frontend/css-selectors-16"
        />
      </div>
    </div>
  );
};

export default CSSLearnTheBasics015;
