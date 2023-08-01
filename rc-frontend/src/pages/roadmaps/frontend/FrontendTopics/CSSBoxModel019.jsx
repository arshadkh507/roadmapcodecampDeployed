import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const CSSBoxModel019 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "CSS Box Model Explained",
      url: "https://www.w3schools.com/css/css_boxmodel.asp",
    },
    {
      id: 2,
      title: "Understanding the CSS Box Model",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",
    },
    {
      id: 3,
      title: "CSS Box Model Tutorial",
      url: "https://www.youtube.com/watch?v=rIO5326FgPE",
    },
    {
      id: 4,
      title: "How to use the CSS Box Model",
      url: "https://www.freecodecamp.org/news/css-box-model-explained-by-living-in-a-boring-suburban-neighborhood/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>CSS Box Model</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-typography-18"
          nextTo="/roadmaps/frontend/javascript-20"
        />
        <hr />

        <h2>CSS Box Mode</h2>
        <p>
          The CSS Box Model is a fundamental concept in web design and development. It's a box that wraps around every HTML element, consisting of: the content, padding, border, and margin. This model allows us to place elements in relation to others, control their spacing, and design in a more structured and precise way. We use it by setting CSS properties like width, height, padding, border, and margin to control how elements interact with each other on the page.

        </p>

        <TopicVideoPlayer
          videoTitle="CSS Box Model, Margin and Padding | Web Development Tutorials"
          videoSrc="https://www.youtube.com/embed/5koxb4JaDqc"
        />
        <TopicVideoPlayer
          videoTitle="CSS Tutorial for Beginners | Complete CSS with Project, Notes & Code"
          videoSrc="https://www.youtube.com/embed/ESnrn1kAD4E"
        />
        <TopicVideoPlayer
          videoTitle="10 CSS Pro Tips - Code this, NOT that!"
          videoSrc="https://www.youtube.com/embed/Qhaz36TZG5Y"
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
          topicName="CSSBoxModel019"
          topicId={19}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-typography-18"
          nextTo="/roadmaps/frontend/javascript-20"
        />
      </div>
    </div>
  );
};

export default CSSBoxModel019;