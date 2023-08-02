import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ModuleBundlersRollup060 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Rollup.js Guide",
      url: "https://rollupjs.org/guide/en/",
    },
    {
      id: 2,
      title: "Rollup.js: The Basics",
      url: "https://dev.to/iggredible/what-is-rollup-js-and-why-use-it-3605",
    },
    {
      id: 3,
      title: "Introduction to Rollup.js",
      url: "https://www.youtube.com/watch?v=-IFFtKj3z38",
    },
    {
      id: 4,
      title: "Rollup.js Tutorial - Replace Webpack with Rollup",
      url: "https://www.youtube.com/watch?v=UhQz-0QVmQ0",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Module Bundlers Rollup</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-module-bundlers-webpack-59"
          nextTo="/roadmaps/frontend/build-tools-module-bundlers-parcel-61"
        />
        <hr />

        <h2>ModuleBundlersRollup060</h2>
        <p>
        Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as require.js and browserify. Rollup allows you to write your code using the latest JavaScript version, and then it will compile it back down to version that can run in all browsers. It's a key tool in modern JavaScript development.

        </p>

        <TopicVideoPlayer
          videoTitle="Rollup JavaScript Bundler For Beginners - Lightweight & Fast"
          videoSrc="https://www.youtube.com/embed/IdxAJaKwuxQ"
        />
        <TopicVideoPlayer
          videoTitle="How to make your JavaScript Bundle Smaller"
          videoSrc="https://www.youtube.com/embed/kwUfeWe7DCw"
        />
        <TopicVideoPlayer
          videoTitle="Typescript Module Bundling With Rollup - Create Frontend Build System #2"
          videoSrc="https://www.youtube.com/embed/rH6EcM68ots"
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
          topicName= "ModuleBundlersRollup060"
          topicId={60}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-module-bundlers-webpack-59"
          nextTo="/roadmaps/frontend/build-tools-module-bundlers-parcel-61"
        />
      </div>
    </div>
  )
}

export default ModuleBundlersRollup060;