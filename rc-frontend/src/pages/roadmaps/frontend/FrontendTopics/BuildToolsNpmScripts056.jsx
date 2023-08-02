import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const BuildToolsNpmScripts056 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding NPM Scripts",
      url: "https://www.freecodecamp.org/news/introduction-to-npm-scripts-1dbb2ae01633/",
    },
    {
      id: 2,
      title: "Using NPM as a Build Tool",
      url: "https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/",
    },
    {
      id: 3,
      title: "NPM Scripts Tutorial",
      url: "https://flaviocopes.com/npm-scripts/",
    },
    {
      id: 4,
      title: "Why NPM Scripts?",
      url: "https://css-tricks.com/why-npm-scripts/",
    },
    {
      id: 5,
      title: "Guide to NPM Scripts",
      url: "https://www.sitepoint.com/guide-to-npm-as-a-build-tool/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Build Tools Npm Scripts</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-task-runners-55"
          nextTo="/roadmaps/frontend/build-tools-module-bundlers-vite-57"
        />
        <hr />

        <h2>BuildToolsNpmScripts056</h2>
        <p>
        NPM Scripts are a powerful feature in the Node.js ecosystem. They are essentially command line scripts that can automate your workflow. You can use them to build, test, and deploy your code. They are defined in the 'scripts' field of the package.json file and can be run with the 'npm run' command. They are a simple and effective way to use build tools in your project. Stay tuned as we dive deeper into this topic.

        </p>

        <TopicVideoPlayer
          videoTitle="npm Tutorial for Beginners - 16 - npm Scripts"
          videoSrc="https://www.youtube.com/embed/hHt3oVk3XVk"
        />
 <TopicVideoPlayer
          videoTitle="NodeJS Tutorial 20: package.json File"
          videoSrc="https://www.youtube.com/embed/k1B9VIUkQmg"
        />
 <TopicVideoPlayer
          videoTitle="31 Custom NPM scripts"
          videoSrc="https://www.youtube.com/embed/REdzp64dijs"
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
          topicName= "BuildToolsNpmScripts056"
          topicId={56}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-task-runners-55"
          nextTo="/roadmaps/frontend/build-tools-module-bundlers-vite-57"
        />
      </div>
    </div>
  )
}

export default BuildToolsNpmScripts056;