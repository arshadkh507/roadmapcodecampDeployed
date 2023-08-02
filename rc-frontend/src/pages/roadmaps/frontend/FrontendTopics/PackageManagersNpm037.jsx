import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const PackageManagersNpm037 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "An Absolute Beginner's Guide to Using npm",
      url: "https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/",
    },
    {
      id: 2,
      title: "npm Documentation",
      url: "https://docs.npmjs.com/",
    },
    {
      id: 3,
      title: "Understanding the basics of package.json",
      url: "https://nodejs.dev/learn/the-package-json-guide",
    },
    {
      id: 4,
      title: "How to use or execute a package installed using npm",
      url: "https://stackoverflow.com/questions/19578796/how-to-use-or-execute-a-package-installed-using-npm",
    },
    {
      id: 5,
      title: "npm CLI commands",
      url: "https://docs.npmjs.com/cli/v7/commands",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Package Managers Npm</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/web-security-knowledge-owasp-security-risks-36"
          nextTo="/roadmaps/frontend/package-managers-yarn-38"
        />
        <hr />

        <h2>Package Managers Npm</h2>
        <p>
        Npm, which stands for Node Package Manager, is a fundamental tool that many developers use. It's a default package manager for the JavaScript runtime environment Node.js. With npm, you can install, share, and distribute code; manage dependencies in your projects; and share & receive feedback from others.
        <br /> <br />
         It's like a marketplace for JavaScript developers, where you can share your code packages and use packages shared by others. It's widely used because it allows developers to build their projects faster, reusing code that has already been written and tested by others. To use npm, you need to have Node.js installed on your computer. After that, you can install npm packages using simple commands in your terminal.

        </p>

        <TopicVideoPlayer
          videoTitle="What is NPM, and why do we need it? | Tutorial for beginners"
          videoSrc="https://www.youtube.com/embed/P3aKRdUyr0s"
        />
        <TopicVideoPlayer
          videoTitle="NPM Full Course For Beginners - Learn NPM fundamentals and basics"
          videoSrc="https://www.youtube.com/embed/cjoTTSbOuG0"
        />
        <TopicVideoPlayer
          videoTitle="Backend Tutorial: npm: The Node Package Manager Tutorial | Web Development Tutorials "
          videoSrc="https://www.youtube.com/embed/YBwWGvdUbQU"
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
          topicName= "PackageManagersNpm037"
          topicId={37}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/web-security-knowledge-owasp-security-risks-36"
          nextTo="/roadmaps/frontend/package-managers-yarn-38"
        />
      </div>
    </div>
  )
}

export default PackageManagersNpm037;