import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const PackageManagersPnpm039 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "PNPM: Fast, disk space efficient package manager",
      url: "https://pnpm.io/",
    },
    {
      id: 2,
      title: "Why should we use pnpm?",
      url: "https://www.kochan.io/nodejs/why-should-we-use-pnpm.html",
    },
    {
      id: 3,
      title: "PNPM vs NPM vs Yarn",
      url: "https://www.youtube.com/watch?v=J4iG4tg1vAQ",
    },
    {
      id: 4,
      title: "Getting started with pnpm",
      url: "https://pnpm.io/getting-started",
    },
    {
      id: 5,
      title: "PNPM - The Best JavaScript Package Manager?",
      url: "https://dev.to/alex_barashkov/pnpm-the-best-javascript-package-manager-just-got-better-24m6",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Package Managers Pnpm</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/package-managers-yarn-38"
          nextTo="/roadmaps/frontend/css-architecture-bem-40"
        />
        <hr />

        <h2>PackageManagersPnpm039</h2>
        <p>
        PNPM, or Performing Node Package Manager, is a powerful tool used in the JavaScript ecosystem. It's a package manager that offers a unique feature: it saves disk space by reusing packages. Instead of duplicating packages, PNPM creates a hard link from a global store directory to the project's node_modules directory.
<br /><br />
        This unique approach not only saves disk space but also speeds up the installation process. It's particularly useful in large projects where multiple packages are used, and disk space efficiency is a concern.
        <br /><br />

        PNPM is used in various development environments, from small personal projects to large-scale enterprise applications. It's a reliable and efficient alternative to other package managers like npm and Yarn.

        </p>

        <TopicVideoPlayer
          videoTitle="NPM 👉 New Fast & Disk Efficient Package Manager ❤️‍🔥"
          videoSrc="https://www.youtube.com/embed/iYBuIgwFjQo"
        />
        <TopicVideoPlayer
          videoTitle="Why I Switched From NPM/Yarn to PNPM And Why You Should Too!"
          videoSrc="https://www.youtube.com/embed/d1E31WPR70g"
        />
        <TopicVideoPlayer
          videoTitle="Get Started with pnpm"
          videoSrc="https://www.youtube.com/embed/MvbReZDSKHI"
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
          topicName= "PackageManagersPnpm039"
          topicId={39}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/package-managers-yarn-38"
          nextTo="/roadmaps/frontend/css-architecture-bem-40"
        />
      </div>
    </div>
  )
}

export default PackageManagersPnpm039;