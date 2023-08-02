import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const StyledJSX069 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Styled JSX: A Modern Styling Library",
      url: "https://styled-jsx.com/",
    },
    {
      id: 2,
      title: "Getting Started with Styled JSX",
      url: "https://www.smashingmagazine.com/2020/07/styled-components-react/",
    },
    {
      id: 3,
      title: "Styled JSX vs CSS Modules",
      url: "https://blog.logrocket.com/styled-components-vs-css-modules/",
    },
    {
      id: 4,
      title: "Theming with Styled JSX",
      url: "https://www.styled-components.com/docs/advanced",
    },
    {
      id: 5,
      title: "Styled JSX in React: A Quick Start Guide",
      url: "https://www.freecodecamp.org/news/styled-jsx-in-react-a-quick-start-guide/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Styled JSX</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/modern-css-css-modules-68"
          nextTo="/roadmaps/frontend/modern-css-emotion-70"
        />
        <hr />

        <h2>Styled JSX</h2>
        <p>
        Styled JSX is a CSS-in-JS library that allows you to write encapsulated and scoped CSS to style your components. It's used within your JavaScript or TypeScript files, which means you can enjoy the full power of JavaScript while keeping your CSS scoped to a specific component. This makes your styles more maintainable and your code cleaner. It's particularly useful when you're working with component-based libraries or frameworks like React.

        </p>
        <TopicVideoPlayer
          videoTitle="Styled JSX in Next.js: Master Next.js Tutorial "
          videoSrc="https://www.youtube.com/embed/SM5uVbfgfdo"
        />
        <TopicVideoPlayer
          videoTitle="Styled jsx in Next.js | NextJs Tutorial for Beginners"
          videoSrc="https://www.youtube.com/embed/pwHf-3stDeE"
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
          topicName= "StyledJSX069"
          topicId={69}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/modern-css-css-modules-68"
          nextTo="/roadmaps/frontend/modern-css-emotion-70"
        />
      </div>
    </div>
  )
}

export default StyledJSX069;