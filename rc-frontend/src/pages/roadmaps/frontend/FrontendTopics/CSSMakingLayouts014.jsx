import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const CSSMakingLayouts014 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "CSS Layout Basics",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction",
    },
    {
      id: 2,
      title: "CSS Layout Tutorial for Beginners",
      url: "https://youtu.be/qm0IfG1GyZU",
    },
    {
      id: 3,
      title: "CSS Layout Techniques",
      url: "https://www.w3schools.com/css/css_layout.asp",
    },
    {
      id: 4,
      title: "CSS Flexbox Tutorial",
      url: "https://www.w3schools.com/css/css3_flexbox.asp",
    },
    {
      id: 5,
      title: "CSS Grid Tutorial",
      url: "https://www.w3schools.com/css/css_grid.asp",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Making Layouts</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-13"
          nextTo="/roadmaps/frontend/css-learn-the-basics-15"
        />
        <hr />

        <h2>CSS-Making Layouts</h2>
        <p>
          CSS - Making layouts is about arranging the parts of a web page in a neat and clear way. CSS can help you make different kinds of layouts, like fixed, fluid, responsive, grid, flexbox, and more. CSS can also help you adjust the parts of a layout to fit different screens and devices, and make your web pages easier to use and see. To make good layouts with CSS, you need to know some basic things.
        </p>
        <li>The box model</li>
        <li>The display property</li>
        <li>The position property</li>
        <li>The float and clear properties</li>
        <li>The flexbox layout</li>
        <li>The grid layout</li>

        <TopicVideoPlayer
          videoTitle=""
          videoSrc=""
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
          topicName="CSSMakingLayouts014"
          topicId={14}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-13"
          nextTo="/roadmaps/frontend/css-learn-the-basics-15"
        />
      </div>
    </div>
  );
};

export default CSSMakingLayouts014;