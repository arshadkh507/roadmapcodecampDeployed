import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Closures045 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Closures in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
    },
    {
      id: 2,
      title: "Understanding JavaScript Closures",
      url: "https://www.w3schools.com/js/js_function_closures.asp",
    },
    {
      id: 3,
      title: "JavaScript Closures Explained",
      url: "https://www.javascripttutorial.net/javascript-closure/",
    },
    {
      id: 4,
      title: "JavaScript Closures for Beginners",
      url: "https://www.youtube.com/watch?v=71AtaJpJHw0",
    },
    {
      id: 5,
      title: "Master the JavaScript Interview: What is a Closure?",
      url: "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Closures</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-higher-order-functions-44"
          nextTo="/roadmaps/frontend/advance-javascript-promises-async-await-46"
        />
        <hr />

        <h2>Closures</h2>
        <p>
        Closures in JavaScript are a powerful concept that allow functions to remember and access variables from an outer function scope, even after the outer function has finished execution. This is like a backpack that a function carries around wherever it goes, filled with all the variables it needs to do its job.
        <br /> <br />
        We use closures in JavaScript for data privacy and encapsulation, to create function factories, and in event handlers and callbacks, among other things. They're a fundamental part of the language and understanding them will make you a much stronger JavaScript developer.

        </p>

        <TopicVideoPlayer
          videoTitle="Closures in JavaScript | JavaScript Tutorial in Hindi "
          videoSrc="https://www.youtube.com/embed/Ze-JGb4I9zU"
        />
        <TopicVideoPlayer
          videoTitle="Closures Explained in 100 Seconds "
          videoSrc="https://www.youtube.com/embed/vKJpN5FAeF4"
        />
        <TopicVideoPlayer
          videoTitle="Closures in JS 🔥 | Namaste JavaScript Episode 10"
          videoSrc="https://www.youtube.com/embed/qikxEIxsXco"
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
          topicName= "Closures045"
          topicId={45}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-higher-order-functions-44"
          nextTo="/roadmaps/frontend/advance-javascript-promises-async-await-46"
        />
      </div>
    </div>
  )
}

export default Closures045;