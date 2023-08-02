import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const EventLoopConcurrency047 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding the Node.js Event Loop",
      url: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",
    },
    {
      id: 2,
      title: "JavaScript Visualized: Event Loop",
      url: "https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif",
    },
    {
      id: 3,
      title: "The JavaScript Event Loop: Explained",
      url: "https://blog.carbonfive.com/the-javascript-event-loop-explained/",
    },
    {
      id: 4,
      title: "Event loop and the rise of Async programming",
      url: "https://flaviocopes.com/javascript-event-loop/",
    },
    {
      id: 5,
      title: "What the heck is the event loop anyway?",
      url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Event Loop Concurrency</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-promises-async-await-46"
          nextTo="/roadmaps/frontend/advance-javascript-performance-optimization-48"
        />
        <hr />

        <h2>Event Loop Concurrency</h2>
        <p>
        Event Loop Concurrency is a fascinating concept in JavaScript. It's the secret sauce that allows JavaScript, a single-threaded language, to handle multiple tasks at once. This is achieved by using an event loop which constantly checks if there are any tasks that need to be executed.
<br /> <br />
        Why is it important, you ask? Well, imagine you're running a piece of code that takes a while to execute, like fetching data from a server. Without the event loop, your entire application would freeze, waiting for the data to arrive. But with the event loop, JavaScript can put that task aside, continue running other tasks, and come back to it once the data is ready. Pretty neat, right?
        <br /> <br />

        So, where do we use it? The answer is - everywhere in JavaScript! Every time you see a setTimeout, an API call, or even a simple button click in a JavaScript application, you're looking at the event loop in action. It's an essential part of how JavaScript works, and understanding it can help you write more efficient, non-blocking code.

        </p>

        <TopicVideoPlayer
          videoTitle="Event Loop and Concurrency Model - Node.js Basics Part 4"
          videoSrc="https://www.youtube.com/embed/Kizk3a6UTPc"
        />
        <TopicVideoPlayer
          videoTitle="What the heck is the event loop anyway? | Philip Roberts | JSConf EU"
          videoSrc="https://www.youtube.com/embed/8aGhZQkoFbQ"
        />
        <TopicVideoPlayer
          videoTitle="Node.js Tutorial - 42 - Event Loop"
          videoSrc="https://www.youtube.com/embed/L18RHG2DwwA"
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
          topicName= "EventLoopConcurrency047"
          topicId={47}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-promises-async-await-46"
          nextTo="/roadmaps/frontend/advance-javascript-performance-optimization-48"
        />
      </div>
    </div>
  )
}

export default EventLoopConcurrency047;