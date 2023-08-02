import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Vuejs064 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Vue.js Guide",
      url: "https://vuejs.org/v2/guide/",
    },
    {
      id: 2,
      title: "Vue.js API",
      url: "https://vuejs.org/v2/api/",
    },
    {
      id: 3,
      title: "Vue.js Style Guide",
      url: "https://vuejs.org/v2/style-guide/",
    },
    {
      id: 4,
      title: "Vue.js Examples",
      url: "https://vuejsexamples.com/",
    },
    {
      id: 5,
      title: "Vue.js Tutorial for Beginners",
      url: "https://www.tutorialspoint.com/vuejs/index.htm",
    },
    {
      id: 6,
      title: "Vue.js - The Progressive JavaScript Framework",
      url: "https://www.youtube.com/watch?v=4deVCNJq3qc",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Vuejs</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/pick-a-framework-angular-63"
          nextTo="/roadmaps/frontend/pick-a-framework-svelte-65"
        />
        <hr />

        <h2>Vuejs064</h2>
        <p>
        Vue.js is a progressive JavaScript framework that's designed to be approachable, versatile, and performant. Its core library focuses on the view layer only, making it easy to integrate with other libraries or existing projects. But what truly sets Vue.js apart is its simplicity and ease of use. It's designed from the ground up to be incrementally adoptable. The core library focuses on declarative rendering and component composition, and it's easy to understand and pick up. This makes it a great choice for both beginners and seasoned developers alike.

        </p>

        <TopicVideoPlayer
          videoTitle="Vue.js Explained in 100 Seconds"
          videoSrc="https://www.youtube.com/embed/nhBVL41-_Cw"
        />
        <TopicVideoPlayer
          videoTitle="Vue.js Tutorial: Beginner to Front-End Developer"
          videoSrc="https://www.youtube.com/embed/1GNsWa_EZdw"
        />
        <TopicVideoPlayer
          videoTitle="Vue JS Crash Course"
          videoSrc="https://www.youtube.com/embed/qZXt1Aom3Cs"
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
          topicName= "Vuejs064"
          topicId={64}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/pick-a-framework-angular-63"
          nextTo="/roadmaps/frontend/pick-a-framework-svelte-65"
        />
      </div>
    </div>
  )
}

export default Vuejs064;