import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const BuildToolsTaskRunners055 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Build Tools and Task Runners",
      url: "https://www.sitepoint.com/understanding-build-tools/",
    },
    {
      id: 2,
      title: "Introduction to Build Tools and Task Runners",
      url: "https://www.smashingmagazine.com/2016/06/harness-machines-productive-task-runners-build-tools-front-end/",
    },
    {
      id: 3,
      title: "Build Tools vs Task Runners",
      url: "https://www.freecodecamp.org/news/task-automation-with-npm-run-32ac7bfcfdf3/",
    },
    {
      id: 4,
      title: "Getting Started with Gulp.js",
      url: "https://www.youtube.com/watch?v=1rw9MfIleEg",
    },
    {
      id: 5,
      title: "Webpack - A Detailed Introduction",
      url: "https://www.smashingmagazine.com/2017/02/a-detailed-introduction-to-webpack/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Build Tools Task Runners</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-eslint-54"
          nextTo="/roadmaps/frontend/build-tools-npm-scripts-56"
        />
        <hr />

        <h2>Build Tools Task Runners</h2>
        <p>
        Build Tools and Task Runners are essential elements in modern web development. They help automate repetitive tasks, thus increasing productivity and reducing errors. Build tools, like Webpack, help in transforming, bundling, and packaging your source code. Task runners, like Gulp, automate tasks such as minifying code and compiling preprocessors. By using these tools, you can focus more on writing the code and less on the tasks that support it.

        </p>

        <TopicVideoPlayer
          videoTitle="Javascript Module Bundlers & Task Runners Explained"
          videoSrc="https://www.youtube.com/embed/y50eOq-83lA"
        />
   <TopicVideoPlayer
          videoTitle="Gulp Task Automation for Beginners"
          videoSrc="https://www.youtube.com/embed/LYbt50dhTko"
        />
   <TopicVideoPlayer
          videoTitle="VS Code tips — Building and running scripts with tasks"
          videoSrc="https://www.youtube.com/embed/ccTcTcbWwdw"
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
          topicName= "BuildToolsTaskRunners055"
          topicId={55}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-eslint-54"
          nextTo="/roadmaps/frontend/build-tools-npm-scripts-56"
        />
      </div>
    </div>
  )
}

export default BuildToolsTaskRunners055;