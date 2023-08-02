import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Emotion070 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Emotion: The Next Generation of CSS-in-JS",
      url: "https://emotion.sh/docs/introduction",
    },
    {
      id: 2,
      title: "Emotion in React: An Overview",
      url: "https://www.smashingmagazine.com/2020/11/emotion-react-overview/",
    },
    {
      id: 3,
      title: "Styling in React with Emotion",
      url: "https://www.youtube.com/watch?v=O2eB3V5v8kU",
    },
    {
      id: 4,
      title: "Emotion CSS Prop - Deep Dive",
      url: "https://www.youtube.com/watch?v=6D8EiZDIDFQ",
    },
    {
      id: 5,
      title: "Emotion vs Styled-components: A performance perspective",
      url: "https://pustelto.com/blog/emotion-vs-styled-components/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Emotion</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/modern-css-styled-jsx-69"
          nextTo="/roadmaps/frontend/css-frameworks-mantine-71"
        />
        <hr />

        <h2>Emotion</h2>
        <p>
        Emotion is a powerful CSS-in-JS library. It allows you to write CSS styles with JavaScript, giving you the full power of JavaScript within your CSS. It's particularly useful when you want to style your components based on props or a global theme. Emotion is widely used in the React community due to its ease of use, performance, and flexibility. Stay tuned as we dive deeper into how to use Emotion in your projects.

        </p>

        <TopicVideoPlayer
          videoTitle="Styled Components VS Emotion - Which performs better?"
          videoSrc="https://www.youtube.com/embed/MN3RWhGudvw"
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
          topicName= "Emotion070"
          topicId={70}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/modern-css-styled-jsx-69"
          nextTo="/roadmaps/frontend/css-frameworks-mantine-71"
        />
      </div>
    </div>
  )
}

export default Emotion070;