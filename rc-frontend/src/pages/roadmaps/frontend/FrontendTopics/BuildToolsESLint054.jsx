import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const BuildToolsESLint054 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "ESLint - Pluggable JavaScript linter",
      url: "https://eslint.org/",
    },
    {
      id: 2,
      title: "Getting Started with ESLint",
      url: "https://eslint.org/docs/user-guide/getting-started",
    },
    {
      id: 3,
      title: "Configuring ESLint",
      url: "https://eslint.org/docs/user-guide/configuring",
    },
    {
      id: 4,
      title: "Rules in ESLint",
      url: "https://eslint.org/docs/rules/",
    },
    {
      id: 5,
      title: "Integrating with Build Tools",
      url: "https://eslint.org/docs/user-guide/integrations#build-tools",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Build Tools ESLint</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-prettier-53"
          nextTo="/roadmaps/frontend/build-tools-task-runners-55"
        />
        <hr />

        <h2>Build Tools ESLint</h2>
        <p>
        ESLint is a tool in your development process known as a "linter". It helps to catch errors and enforce a consistent coding style. It's highly customizable, so you can design it to fit your project's specific needs. We use ESLint in build tools to ensure that our code is error-free and maintains a consistent style before we deploy it. This helps to prevent bugs and improve readability.

        </p>

        <TopicVideoPlayer
          videoTitle="ESLint Quickstart - find errors automatically"
          videoSrc="https://www.youtube.com/embed/qhuFviJn-es"
        />
        <TopicVideoPlayer
          videoTitle="VSCode ESLint, Prettier & Airbnb Style Guide Setup"
          videoSrc="https://www.youtube.com/embed/SydnKbGc7W8"
        />
        <TopicVideoPlayer
          videoTitle="VSCode and ESLint Setup"
          videoSrc="https://www.youtube.com/embed/SYSZi_nQzxk"
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
          topicName= "BuildToolsESLint054"
          topicId={54}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-prettier-53"
          nextTo="/roadmaps/frontend/build-tools-task-runners-55"
        />
      </div>
    </div>
  )
}

export default BuildToolsESLint054;