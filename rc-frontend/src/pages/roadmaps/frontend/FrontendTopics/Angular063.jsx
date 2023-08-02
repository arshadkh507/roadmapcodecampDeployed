import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Angular063 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Angular - Official Documentation",
      url: "https://angular.io/docs",
    },
    {
      id: 2,
      title: "Angular Tutorial for Beginners: Learn Angular & TypeScript",
      url: "https://www.youtube.com/watch?v=k5E2AVpwsko",
    },
    {
      id: 3,
      title: "Angular - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Angular_(web_framework)",
    },
    {
      id: 4,
      title: "Learn Angular - Full Tutorial Course",
      url: "https://www.freecodecamp.org/news/learn-angular-full-tutorial-course/",
    },
    {
      id: 5,
      title: "Angular Tutorial - W3Schools",
      url: "https://www.w3schools.com/angular/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Angular</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/pick-a-framework-react-62"
          nextTo="/roadmaps/frontend/pick-a-framework-vuejs-64"
        />
        <hr />

        <h2>Angular</h2>
        <p>
        Angular is a powerful and dynamic JavaScript-based framework. It's used for creating single-page web applications, allowing you to create interactive and user-friendly websites. It's maintained by Google, so you know it's got a strong support system. Stay tuned as we dive deeper into this fascinating tool!

        </p>

        <TopicVideoPlayer
          videoTitle="Angular JS Tutorial 1"
          videoSrc="https://www.youtube.com/embed/1tRLveSyNz8"
        />
        <TopicVideoPlayer
          videoTitle="Angular JS Tutorial 2"
          videoSrc="https://www.youtube.com/embed/3dHNOWTI7H8"
        />
        <TopicVideoPlayer
          videoTitle="Angular Tutorial in Hindi"
          videoSrc="https://www.youtube.com/embed/0LhBvp8qpro"
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
          topicName= "Angular063"
          topicId={63}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/pick-a-framework-react-62"
          nextTo="/roadmaps/frontend/pick-a-framework-vuejs-64"
        />
      </div>
    </div>
  )
}

export default Angular063;