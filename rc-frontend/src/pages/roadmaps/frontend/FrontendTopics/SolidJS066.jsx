import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const SolidJS066 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Solid JS Official Documentation",
      url: "https://www.solidjs.com/docs",
    },
    {
      id: 2,
      title: "Solid JS Tutorial by Dev.to",
      url: "https://dev.to/dailydevtips1/i-created-the-same-app-in-react-and-solid-js-here-are-the-differences-59p",
    },
    {
      id: 3,
      title: "Introduction to Solid JS",
      url: "https://www.youtube.com/watch?v=3d9FPPG4tug",
    },
    {
      id: 4,
      title: "Solid JS vs React",
      url: "https://www.youtube.com/watch?v=RH1KhhRn4O8",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Solid JS</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/pick-a-framework-svelte-65"
          nextTo="/roadmaps/frontend/modern-css-styled-components-67"
        />
        <hr />

        <h2>Solid JS</h2>
        <p>
        Solid JS is a declarative JavaScript library for building user interfaces. It's designed to be simple, fast, and reactive. It's used in web development to create interactive and dynamic web applications. One of its unique features is its fine-grained reactivity system, which updates only the parts of the DOM that need to change, resulting in highly efficient updates and no virtual DOM diffing. It's a great choice if you're looking for a lightweight and efficient alternative to other libraries like React or Vue.

        </p>

        <TopicVideoPlayer
          videoTitle="Introduction to Solid JS"
          videoSrc="https://www.youtube.com/embed/uPXn9S31o7Q"
        />
        <TopicVideoPlayer
          videoTitle="Solid in 100 Seconds"
          videoSrc="https://www.youtube.com/embed/hw3Bx5vxKl0"
        />
        <TopicVideoPlayer
          videoTitle="SolidJS Crash Course - Better Than React!"
          videoSrc="https://www.youtube.com/embed/WDodWU-B-aY"
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
          topicName= "SolidJS066"
          topicId={66}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/pick-a-framework-svelte-65"
          nextTo="/roadmaps/frontend/modern-css-styled-components-67"
        />
      </div>
    </div>
  )
}

export default SolidJS066;