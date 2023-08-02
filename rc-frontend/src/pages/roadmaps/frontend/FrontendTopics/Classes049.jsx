import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Classes049 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "JavaScript Classes - MDN Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",
    },
    {
      id: 2,
      title: "Understanding Classes in JavaScript",
      url: "https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript",
    },
    {
      id: 3,
      title: "JavaScript Classes - W3Schools",
      url: "https://www.w3schools.com/js/js_classes.asp",
    },
    {
      id: 4,
      title: "ES6 Classes in Depth",
      url: "https://www.youtube.com/watch?v=T-HGdc8L-7w",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Classes</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-performance-optimization-48"
          nextTo="/roadmaps/frontend/advance-javascript-prototypes-50"
        />
        <hr />

        <h2>Classes049</h2>
        <p>
        Classes in JavaScript are a blueprint for creating objects. They encapsulate data with code to manipulate that data. Classes in JS are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.
<br /><br />
        We use classes in JavaScript when we want to create multiple objects of the same kind. For instance, if we want to create multiple objects representing individual students in a school, we can create a 'Student' class and use it to instantiate as many student objects as we need.
        <br /><br />

        Classes are a fundamental part of JavaScript and a powerful tool for developers. They make our code more efficient, easier to read and maintain, and provide a foundation for object-oriented programming in JavaScript.

        </p>

        <TopicVideoPlayer
          videoTitle="Advance Javascript - OOP Introduction Tutorial in Hindi / Urdu"
          videoSrc="https://www.youtube.com/embed/ckdDIhQyK_A"
        />
        <TopicVideoPlayer
          videoTitle="JavaScript Classes Tutorial"
          videoSrc="https://www.youtube.com/embed/2ZphE5HcQPQ"
        />
        <TopicVideoPlayer
          videoTitle="Classes and Objects in JavaScript | JavaScript Tutorial in Hindi "
          videoSrc="https://www.youtube.com/embed/7RpdfkSyJfU"
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
          topicName= "Classes049"
          topicId={49}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-performance-optimization-48"
          nextTo="/roadmaps/frontend/advance-javascript-prototypes-50"
        />
      </div>
    </div>
  )
}

export default Classes049;