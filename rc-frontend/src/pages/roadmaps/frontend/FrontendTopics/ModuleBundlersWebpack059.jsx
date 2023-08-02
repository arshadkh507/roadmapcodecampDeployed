import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ModuleBundlersWebpack059 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Webpack Concepts",
      url: "https://webpack.js.org/concepts/",
    },
    {
      id: 2,
      title: "Webpack Documentation",
      url: "https://webpack.js.org/concepts/",
    },
    {
      id: 3,
      title: "Introduction to Webpack",
      url: "https://www.youtube.com/watch?v=TaWKUpahFZM",
    },
    {
      id: 4,
      title: "Webpack Tutorial for Beginners",
      url: "https://www.youtube.com/watch?v=lziuNMk_8eQ",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Module Bundlers Webpack</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-module-bundlers-esbuild-58"
          nextTo="/roadmaps/frontend/build-tools-module-bundlers-rollup-60"
        />
        <hr />

        <h2>Module Bundlers Webpack</h2>
        <p>
        Webpack is a powerful module bundler used in modern JavaScript applications. It takes modules with dependencies and generates static assets representing those modules. This helps to optimize your code for production and boosts performance. It's commonly used in conjunction with tools like Babel and React to build complex web applications. Stay tuned for more detailed information and practical examples.

        </p>

        <TopicVideoPlayer
          videoTitle="Module Bundlers Explained... Webpack, Rollup, Parcel, and Snowpack"
          videoSrc="https://www.youtube.com/embed/5IG4UmULyoA"
        />
        <TopicVideoPlayer
          videoTitle="What is Webpack - academind.com Snippet"
          videoSrc="https://www.youtube.com/embed/5zeXFC_-gMQ"
        />
        <TopicVideoPlayer
          videoTitle="Webpack 5 Crash Course | Frontend Development Setup"
          videoSrc="https://www.youtube.com/embed/IZGNcSuwBZs"
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
          topicName= "ModuleBundlersWebpack059"
          topicId={59}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-module-bundlers-esbuild-58"
          nextTo="/roadmaps/frontend/build-tools-module-bundlers-rollup-60"
        />
      </div>
    </div>
  )
}

export default ModuleBundlersWebpack059;