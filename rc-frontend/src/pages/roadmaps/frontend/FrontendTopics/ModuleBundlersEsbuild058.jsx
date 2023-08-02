import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ModuleBundlersEsbuild058 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Esbuild: An extremely fast JavaScript bundler",
      url: "https://esbuild.github.io/",
    },
    {
      id: 2,
      title: "Esbuild vs Webpack: a comparison",
      url: "https://blog.logrocket.com/esbuild-vs-webpack/",
    },
    {
      id: 3,
      title: "Introduction to Esbuild",
      url: "https://www.youtube.com/watch?v=S8HX-y9Nrzc",
    },
    {
      id: 4,
      title: "Esbuild: A revolutionary JavaScript bundler",
      url: "https://evilmartians.com/chronicles/esbuild-a-revolutionary-javascript-bundler",
    },
  ];

   
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Module Bundlers Esbuild</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-module-bundlers-vite-57"
          nextTo="/roadmaps/frontend/build-tools-module-bundlers-webpack-59"
        />
        <hr />

        <h2>Module Bundlers Esbuild</h2>
        <p>
        Esbuild is a modern module bundler for JavaScript applications. It's known for its incredible speed and efficiency, which can significantly improve your development workflow. Stay tuned as we dive deeper into its features and how to use it in the upcoming sections.

        </p>

        <TopicVideoPlayer
          videoTitle="Module Bundlers Explained... Webpack, Rollup, Parcel, and Snowpack"
          videoSrc="https://www.youtube.com/embed/5IG4UmULyoA"
        />
        <TopicVideoPlayer
          videoTitle="What Is ESBuild? - What Is Web Development"
          videoSrc="https://www.youtube.com/embed/ZY8Vu8cbWF0"
        />
        <TopicVideoPlayer
          videoTitle="Creating an esbuild Plugin to Efficiently Copy Static Files"
          videoSrc="https://www.youtube.com/embed/bMkmwq5tzSs"
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
          topicName= "ModuleBundlersEsbuild058"
          topicId={58}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-module-bundlers-vite-57"
          nextTo="/roadmaps/frontend/build-tools-module-bundlers-webpack-59"
        />
      </div>
    </div>
  )
}

export default ModuleBundlersEsbuild058;