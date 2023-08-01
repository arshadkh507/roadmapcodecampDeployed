import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const JavaScriptSyntaxBasicsConstructs021 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "JavaScript Syntax Basics Constructs - W3Schools",
      url: "https://www.w3schools.com/js/js_syntax.asp",
    },
    {
      id: 2,
      title: "JavaScript Basics - Mozilla Developer Network",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
    },
    {
      id: 3,
      title: "JavaScript Syntax - Tutorial Republic",
      url: "https://www.tutorialrepublic.com/javascript-tutorial/javascript-syntax.php",
    },
    {
      id: 4,
      title: "JavaScript Syntax Basics - JavaTpoint",
      url: "https://www.javatpoint.com/javascript-syntax",
    },
    {
      id: 5,
      title: "JavaScript Syntax - GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/javascript-syntax/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>JavaScript Syntax Basics Constructs</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/javascript-20"
          nextTo="/roadmaps/frontend/learn-dom-manipulation-22"
        />
        <hr />

        <h2>JavaScript Syntax Basics Constructs</h2>
        <p>
        JavaScript Syntax Basics Constructs are the building blocks of writing code in JavaScript. They include variables, data types, functions, loops, conditionals, and more. Understanding these constructs is essential to write efficient and effective JavaScript code. We'll be diving into each of these constructs in detail, so stay tuned!

        </p>

        <TopicVideoPlayer
          videoTitle="100+ JavaScript Concepts you Need to Know"
          videoSrc="https://www.youtube.com/embed/lkIFF4maKMU"
        />
        <TopicVideoPlayer
          videoTitle="Javascript Introduction | Lecture 1 | Web Development Course"
          videoSrc="https://www.youtube.com/embed/B7wHpNUUT4Y"
        />
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
          topicName= "JavaScriptSyntaxBasicsConstructs021"
          topicId={21}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/javascript-20"
          nextTo="/roadmaps/frontend/learn-dom-manipulation-22"
        />
      </div>
    </div>
  )
}

export default JavaScriptSyntaxBasicsConstructs021;