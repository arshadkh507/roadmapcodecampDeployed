import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Await046 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "JavaScript Async/Await: A Complete Guide",
      url: "https://dmitripavlutin.com/javascript-async-await/",
    },
    {
      id: 2,
      title: "Understanding JavaScript’s async await",
      url: "https://ponyfoo.com/articles/understanding-javascript-async-await",
    },
    {
      id: 3,
      title: "Async/await in JavaScript",
      url: "https://javascript.info/async-await",
    },
    {
      id: 4,
      title: "Async/Await: The Hero JavaScript Deserved",
      url: "https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial",
    },
    {
      id: 5,
      title: "Using async/await in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Await</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-closures-45"
          nextTo="/roadmaps/frontend/advance-javascript-event-loop-concurrency-47"
        />
        <hr />

        <h2>Await</h2>
        <p>
        'Await' in JavaScript is a special operator used with Promises. It's used to pause the execution of async functions, 
        allowing you to write asynchronous code that looks synchronous. It makes your code cleaner and easier to understand. 
        You'll often see 'await' used in tasks that are IO-bound, like network requests or file system operations, 
        where you need to wait for the Promise to resolve or reject before moving on with the rest of your code.

        </p>

        <TopicVideoPlayer
          videoTitle="Asynchronous JavaScript Course (Async/Await, Promises, Callbacks)"
          videoSrc="https://www.youtube.com/embed/ZYb_ZU8LNxs"
        />
        <TopicVideoPlayer
          videoTitle="Async JS Crash Course - Callbacks, Promises, Async Await"
          videoSrc="https://www.youtube.com/embed/PoRJizFvM7s"
        />
        <TopicVideoPlayer
          videoTitle="Async/Await in JavaScript | JavaScript Tutorial in Hindi "
          videoSrc="https://www.youtube.com/embed/bLre6Uf4Op0"
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
          topicName= "Await046"
          topicId={46}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-closures-45"
          nextTo="/roadmaps/frontend/advance-javascript-event-loop-concurrency-47"
        />
      </div>
    </div>
  )
}

export default Await046;