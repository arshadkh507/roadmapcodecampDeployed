import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Less042 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Less.js: Beginner's Guide",
      url: "https://www.tutorialsteacher.com/less/less-tutorial",
    },
    {
      id: 2,
      title: "Less CSS Pre-Processor: An Introduction",
      url: "https://www.sitepoint.com/less-css-pre-processor-tutorial/",
    },
    {
      id: 3,
      title: "Getting started with Less",
      url: "https://www.youtube.com/watch?v=3Pnzuq5Z4pA",
    },
    {
      id: 4,
      title: "Mastering Less: Advanced Techniques",
      url: "https://www.smashingmagazine.com/2017/04/start-using-less/",
    },
    {
      id: 5,
      title: "Less.js Tutorial",
      url: "https://www.javatpoint.com/less",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Less</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-preprocessors-sass-41"
          nextTo="/roadmaps/frontend/css-preprocessors-postcss-43"
        />
        <hr />

        <h2>Less</h2>
        <p>
        Less, short for Leaner Style Sheets, is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets (CSS) and run on the client side or server side. It's designed to make your CSS more maintainable, themable and extendable by bringing features from programming languages into CSS such as variables, mixins, operations and functions.
<br /> <br />
        We use Less because it provides a more efficient, powerful and flexible way of writing CSS. It speeds up the development process and makes it easier to maintain large style sheets. With Less, you can write CSS in a more programming-like way, which is a big advantage for developers coming from a programming background.
        <br /> <br />

        So, if you're looking to make your CSS more efficient and maintainable, Less might be just what you need. Give it a try!

        </p>

        <TopicVideoPlayer
          videoTitle="Less CSS Pre-Processor Tutorial"
          videoSrc="https://www.youtube.com/embed/YD91G8DdUsw"
        />
        <TopicVideoPlayer
          videoTitle="Why you should use a CSS Preprocessor! SASS, LESS are Better than CSS"
          videoSrc="https://www.youtube.com/embed/5hNDzcpWwFM"
        />
        <TopicVideoPlayer
          videoTitle="Convert Less to CSS easily on Save | Less Compiler"
          videoSrc="https://www.youtube.com/embed/oZXiFxd1owE"
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
          topicName= "Less042"
          topicId={42}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-preprocessors-sass-41"
          nextTo="/roadmaps/frontend/css-preprocessors-postcss-43"
        />
      </div>
    </div>
  )
}

export default Less042;