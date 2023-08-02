import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const PackageManagersYarn038 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Yarn: A new package manager for JavaScript",
      url: "https://engineering.fb.com/2016/10/05/web/yarn-a-new-package-manager-for-javascript/",
    },
    {
      id: 2,
      title: "Yarn vs npm: Everything You Need to Know",
      url: "https://www.sitepoint.com/yarn-vs-npm/",
    },
    {
      id: 3,
      title: "Yarn Package Manager: An Improvement over npm",
      url: "https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm",
    },
    {
      id: 4,
      title: "Migrating from npm to Yarn",
      url: "https://classic.yarnpkg.com/en/docs/migrating/",
    },
    {
      id: 5,
      title: "Workspaces in Yarn",
      url: "https://classic.yarnpkg.com/en/docs/workspaces/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Package Managers Yarn</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/package-managers-npm-37"
          nextTo="/roadmaps/frontend/package-managers-pnpm-39"
        />
        <hr />

        <h2>Package Managers Yarn</h2>
        <p>
        Yarn is a popular package manager for JavaScript, providing a faster, more reliable way to manage project dependencies. It's widely used in frontend development, especially in large-scale projects, due to its efficient caching system, improved network performance, and automatic retries for failed requests. Stay tuned as we delve deeper into how Yarn can enhance your development workflow.

        </p>

        <TopicVideoPlayer
          videoTitle="NPM vs Yarn | Which is the best Package Manager?"
          videoSrc="https://www.youtube.com/embed/0DGClZD5LEM"
        />
        <TopicVideoPlayer
          videoTitle="Yarn Package Manager Crash Course"
          videoSrc="https://www.youtube.com/embed/g9_6KmiBISk"
        />
        <TopicVideoPlayer
          videoTitle="How to Install Yarn | Yarn Package Manager"
          videoSrc="https://www.youtube.com/embed/pyvurlqIMMM"
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
          topicName= "PackageManagersYarn038"
          topicId={38}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/package-managers-npm-37"
          nextTo="/roadmaps/frontend/package-managers-pnpm-39"
        />
      </div>
    </div>
  )
}

export default PackageManagersYarn038;