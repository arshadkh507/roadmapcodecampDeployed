import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ModuleBundlersParcel061 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Getting Started with Parcel",
      url: "https://parceljs.org/getting_started.html",
    },
    {
      id: 2,
      title: "Parcel: A Zero Configuration Web Application Bundler",
      url: "https://www.freecodecamp.org/news/parcel-a-zero-configuration-web-application-bundler-eb8d593a3f46/",
    },
    {
      id: 3,
      title: "Parcel v2: The future of frontend development",
      url: "https://dev.to/parcel/parcel-v2-the-future-of-frontend-development-1l45",
    },
    {
      id: 4,
      title: "A Practical Guide to Bundling with Parcel",
      url: "https://www.sitepoint.com/a-practical-guide-to-bundling-with-parcel/",
    },
    {
      id: 5,
      title: "Parcel.js in 10 Minutes",
      url: "https://www.youtube.com/watch?v=5IG4UmULyoA",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Module Bundlers Parcel</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-module-bundlers-rollup-60"
          nextTo="/roadmaps/frontend/pick-a-framework-react-62"
        />
        <hr />

        <h2>Module Bundlers Parcel</h2>
        <p>
        Module Bundlers Parcel is a powerful tool in the world of web development. It's a zero-configuration web application bundler, which means it requires minimal setup and is ready to use out of the box. It's a great choice for developers who want to streamline their workflow and focus more on coding. Stay tuned for more updates on this topic!

        </p>

        <TopicVideoPlayer
          videoTitle="Module Bundlers Explained... Webpack, Rollup, Parcel, and Snowpack"
          videoSrc="https://www.youtube.com/embed/5IG4UmULyoA"
        />
  <TopicVideoPlayer
          videoTitle="How to Build a Web App with Parcel.js - Quick & EASY JavaScript Bundler!"
          videoSrc="https://www.youtube.com/embed/R02ehdTzi3I"
        />
  <TopicVideoPlayer
          videoTitle="Parcel Module Bundler - Module Bundler For Beginners"
          videoSrc="https://www.youtube.com/embed/T_Q56dhWASc"
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
          topicName= "ModuleBundlersParcel061"
          topicId={61}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-module-bundlers-rollup-60"
          nextTo="/roadmaps/frontend/pick-a-framework-react-62"
        />
      </div>
    </div>
  )
}

export default ModuleBundlersParcel061;