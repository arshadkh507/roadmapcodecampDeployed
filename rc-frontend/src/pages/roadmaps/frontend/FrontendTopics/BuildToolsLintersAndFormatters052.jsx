import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const BuildToolsLintersAndFormatters052 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Build Tools, Linters, and Formatters",
      url: "https://www.sitepoint.com/understanding-build-tools/",
    },
    {
      id: 2,
      title: "A Guide to Properly Using a Linter and Formatter",
      url: "https://www.smashingmagazine.com/2020/07/guide-linting-formatting-javascript/",
    },
    {
      id: 3,
      title: "Introduction to Build Tools",
      url: "https://www.youtube.com/watch?v=3aGSqasVPsI",
    },
    {
      id: 4,
      title: "Why You Should Use a Linter and Formatter",
      url: "https://www.youtube.com/watch?v=5MZl8TUrtoM",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Build Tools Linters And Formatters</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-inheritance-51"
          nextTo="/roadmaps/frontend/build-tools-prettier-53"
        />
        <hr />

        <h2>Build Tools Linters And Formatters</h2>
        <p>
        Build Tools, Linters, and Formatters are essential parts of modern JavaScript development. Build tools like Webpack or Babel help us to bundle and transform our code, making it ready for the browser. Linters like ESLint, on the other hand, help us catch errors and maintain a consistent coding style, improving the overall quality of our code. Formatters like Prettier automatically format our code to a certain style, saving us from the tedious task of manual formatting. By integrating these tools into our development process, we can write more efficient, clean, and error-free JavaScript code.

        </p>

        <TopicVideoPlayer
          videoTitle="Video 1"
          videoSrc="https://www.youtube.com/embed/video1"
        />
        <TopicVideoPlayer
          videoTitle="Video 2"
          videoSrc="https://www.youtube.com/embed/video2"
        />
        <TopicVideoPlayer
          videoTitle="Video 3"
          videoSrc="https://www.youtube.com/embed/video3"
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
          topicName= "BuildToolsLintersAndFormatters052"
          topicId={52}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-inheritance-51"
          nextTo="/roadmaps/frontend/build-tools-prettier-53"
        />
      </div>
    </div>
  )
}

export default BuildToolsLintersAndFormatters052;