import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const JavaScript020 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "JavaScript Guide - Mozilla Developer Network",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    },
    {
      id: 2,
      title: "JavaScript Tutorial - W3Schools",
      url: "https://www.w3schools.com/js/",
    },
    {
      id: 3,
      title: "JavaScript - Wikipedia",
      url: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      id: 4,
      title: "JavaScript Fundamentals - JavaScript.info",
      url: "https://javascript.info/first-steps",
    },
    {
      id: 5,
      title: "Why Use JavaScript? - Stack Overflow",
      url: "https://stackoverflow.com/questions/209126/why-use-javascript",
    },
    {
      id: 6,
      title: "How JavaScript works: an overview of the engine, the runtime, and the call stack",
      url: "https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>JavaScript</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-box-model-19"
          nextTo="/roadmaps/frontend/javascript-syntax-and-basics-constructs-21"
        />
        <hr />

        <h2>JavaScript</h2>
        <p>
        JavaScript is a powerful programming language that brings life to the web. It's the magic behind the interactive elements on websites, from simple animations to complex single-page applications.  <br /> <br />
         As a frontend developer, we use JavaScript to manipulate the Document Object Model (DOM), handle events, and even fetch data from servers. It's the language that allows us to create dynamic, responsive, and user-friendly interfaces. So, let's dive into the world of JavaScript and explore its potential together!

        </p>

        <TopicVideoPlayer
          videoTitle="JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour"
          videoSrc="https://www.youtube.com/embed/W6NZfCO5SIk"
        />
        <TopicVideoPlayer
          videoTitle="Learn JavaScript - Full Course for Beginners"
          videoSrc="https://www.youtube.com/embed/PkZNo7MFNFg"
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
          topicName= "JavaScript020"
          topicId={20}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-box-model-19"
          nextTo="/roadmaps/frontend/javascript-syntax-and-basics-constructs-21"
        />
      </div>
    </div>
  )
}

export default JavaScript020;