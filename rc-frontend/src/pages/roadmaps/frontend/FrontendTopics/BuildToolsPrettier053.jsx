import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const BuildToolsPrettier053 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Prettier: An Opinionated Code Formatter",
      url: "https://prettier.io/",
    },
    {
      id: 2,
      title: "Integrating Prettier with ESLint and VS Code",
      url: "https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project",
    },
    {
      id: 3,
      title: "Prettier - The Complete Guide",
      url: "https://flaviocopes.com/prettier/",
    },
    {
      id: 4,
      title: "Prettier Setup for Your JavaScript and TypeScript Projects",
      url: "https://www.sitepoint.com/prettier-setup-javascript-typescript-projects/",
    },
    {
      id: 5,
      title: "How to use Prettier in VS Code",
      url: "https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Build Tools Prettier</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-linters-and-formatters-52"
          nextTo="/roadmaps/frontend/build-tools-eslint-54"
        />
        <hr />

        <h2>Build Tools Prettier</h2>
        <p>
        Prettier is a popular tool in the coding world. It's an opinionated code formatter that enforces a consistent style by parsing your code and reprinting it with its own rules. This takes the load off of you having to decide on a particular style and stick to it. It's like having a personal assistant that tidies up your code for you! We use Prettier because it helps in maintaining a consistent code style, especially when working in a team. It's a real time-saver and a must-have in your build tools arsenal.

        </p>

        <TopicVideoPlayer
          videoTitle="How to use Prettier in VS Code - Code Formatting"
          videoSrc="https://www.youtube.com/embed/__eiQumLOEo"
        />
        <TopicVideoPlayer
          videoTitle="How To Setup Prettier"
          videoSrc="https://www.youtube.com/embed/DqfQ4DPnRqI"
        />
        <TopicVideoPlayer
          videoTitle="5 Tools that make you Code Faster | using VSCode Extensions"
          videoSrc="https://www.youtube.com/embed/EFUD2MulXY0"
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
          topicName= "BuildToolsPrettier053"
          topicId={53}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-linters-and-formatters-52"
          nextTo="/roadmaps/frontend/build-tools-eslint-54"
        />
      </div>
    </div>
  )
}

export default BuildToolsPrettier053;