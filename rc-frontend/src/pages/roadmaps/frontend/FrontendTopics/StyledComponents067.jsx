import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const StyledComponents067 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Styled Components Official Documentation",
      url: "https://styled-components.com/docs",
    },
    {
      id: 2,
      title: "Mastering Styled Components",
      url: "https://www.udemy.com/course/styled-components-tutorial-and-project-course/",
    },
    {
      id: 3,
      title: "Styled Components: A Quick Start Guide",
      url: "https://www.smashingmagazine.com/2020/07/styled-components-react/",
    },
    {
      id: 4,
      title: "Styled Components vs CSS Modules",
      url: "https://blog.logrocket.com/styled-components-vs-css-modules/",
    },
    {
      id: 5,
      title: "Theming with Styled Components",
      url: "https://www.gatsbyjs.com/tutorial/styled-components/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Styled Components</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/pick-a-framework-solid-js-66"
          nextTo="/roadmaps/frontend/modern-css-css-modules-68"
        />
        <hr />

        <h2>Styled Components</h2>
        <p>
        Styled Components is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS. This means you can keep your CSS code right alongside your JavaScript code. It's a powerful tool that can make your code more readable, reusable, and scalable. It's especially useful when you want to create small, reusable components, and when you want to leverage the power of JavaScript to create dynamic styles.

        </p>

        <TopicVideoPlayer
          videoTitle="React Styled Components - 1 - Introduction"
          videoSrc="https://www.youtube.com/embed/FSCSdAlLsYM"
        />
        <TopicVideoPlayer
          videoTitle="Styled Component in React in Hindi"
          videoSrc="https://www.youtube.com/embed/-9ZPBAcjmh4"
        />
        <TopicVideoPlayer
          videoTitle="Styled Components Crash Course & Project"
          videoSrc="https://www.youtube.com/embed/02zO0hZmwnw"
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
          topicName= "StyledComponents067"
          topicId={67}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/pick-a-framework-solid-js-66"
          nextTo="/roadmaps/frontend/modern-css-css-modules-68"
        />
      </div>
    </div>
  )
}

export default StyledComponents067;