import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ModuleBundlersVite057 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Vite.js Guide",
      url: "https://vitejs.dev/guide/",
    },
    {
      id: 2,
      title: "Vite.js GitHub Repository",
      url: "https://github.com/vitejs/vite",
    },
    {
      id: 3,
      title: "Introduction to Vite.js",
      url: "https://www.youtube.com/watch?v=1R6D1E6ofIs",
    },
    {
      id: 4,
      title: "Vite.js: Faster Frontend Tooling",
      url: "https://www.youtube.com/watch?v=4l5Hh66vQhE",
    },
    {
      id: 5,
      title: "Vite.js vs Webpack",
      url: "https://blog.logrocket.com/vite-vs-webpack/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Module Bundlers Vite</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-npm-scripts-56"
          nextTo="/roadmaps/frontend/build-tools-module-bundlers-esbuild-58"
        />
        <hr />

        <h2>ModuleBundlersVite057</h2>
        <p>
        Vite is a modern front-end build tool, created by Evan You (the creator of Vue.js). It offers a faster and leaner development experience for modern web projects. Vite provides features like hot module replacement and esbuild powered fast bundling in production. It's used to speed up the development process, making it a great choice for developers who want to build web applications quickly and efficiently.

        </p>

        <TopicVideoPlayer
          videoTitle="Vite in 100 Seconds"
          videoSrc="https://www.youtube.com/embed/KCrXgy8qtjM"
        /> <TopicVideoPlayer
        videoTitle="How to make your JavaScript Bundle Smaller"
        videoSrc="https://www.youtube.com/embed/kwUfeWe7DCw"
      /> <TopicVideoPlayer
      videoTitle="Vite: The Death of Webpack? 😨"
      videoSrc="https://www.youtube.com/embed/nBYo2B2XN5s"
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
          topicName= "ModuleBundlersVite057"
          topicId={57}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-npm-scripts-56"
          nextTo="/roadmaps/frontend/build-tools-module-bundlers-esbuild-58"
        />
      </div>
    </div>
  )
}

export default ModuleBundlersVite057;