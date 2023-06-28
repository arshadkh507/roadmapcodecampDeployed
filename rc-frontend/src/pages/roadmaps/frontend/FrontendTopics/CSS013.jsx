import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const CSS013 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is CSS?",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS",
    },
    {
      id: 2,
      title: "CSS Tutorial for Beginners",
      url: "https://youtu.be/yfoY53QXEnI",
    },
    {
      id: 3,
      title: "CSS Basics",
      url: "https://www.w3schools.com/css/css_intro.asp",
    },
    {
      id: 4,
      title: "CSS Selectors",
      url: "https://www.w3schools.com/css/css_selectors.asp",
    },
    {
      id: 5,
      title: "CSS Layout",
      url: "https://www.w3schools.com/css/css_layout.asp",
    },
    {
      id: 6,
      title: "CSS Flexbox",
      url: "https://www.w3schools.com/css/css3_flexbox.asp",
    },
    {
      id: 7,
      title: "CSS Grid",
      url: "https://www.w3schools.com/css/css_grid.asp",
    },
    {
      id: 8,
      title: "CSS Animations",
      url: "https://www.w3schools.com/css/css3_animations.asp",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>CSS</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/html-seo-basics-12"
          nextTo="/roadmaps/frontend/css-making-layouts-14"
        />
        <hr />

        <h2>CSS-Cascading Style Sheets</h2>
        <p>
          CSS stands for Cascading Style Sheets.It is a language that describes how web pages should look and behave.CSS can control the appearance, layout, and interaction of web elements, such as fonts, colors, backgrounds, borders, margins, padding, alignment, animation, and more.CSS can make web pages more attractive, consistent, and responsive.CSS works together with HTML and JavaScript to create dynamic and interactive web pages.HTML defines the structure and content of web pages, while CSS defines the style and presentation of web pages.JavaScript adds functionality and interactivity to web pages.CSS can be written in a separate file with a.css extension, or embedded in an HTML file using the  style  tag.
        </p>
        <p>
          CSS can also be applied to individual HTML elements using the style attribute.CSS uses rules or declarations to specify how web pages should look and behave.A CSS rule consists of a selector and a declaration block.A selector is a way of identifying which HTML element or elements the rule applies to.A declaration block is a set of one or more declarations that define the style properties and values for the selected element or elements.A declaration consists of a property and a value, separated by a colon and ending with a semicolon.
        </p>

        <TopicVideoPlayer
          videoTitle="CSS Crash Course For Absolute Beginners"
          videoSrc="https://www.youtube.com/embed/yfoY53QXEnI"
        />

        <TopicVideoPlayer
          videoTitle="CSS Full Course - Includes Flexbox and CSS Grid Tutorials"
          videoSrc="https://www.youtube.com/embed/ieTHC78giGQ"
        />

        <TopicVideoPlayer
          videoTitle="Learn CSS in 12 Minutes"
          videoSrc="https://www.youtube.com/embed/0afZj1G0BIE"
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
          topicName="CSS013"
          topicId={13}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/html-seo-basics-12"
          nextTo="/roadmaps/frontend/css-making-layouts-14"
        />
      </div>
    </div>
  );
};

export default CSS013;









