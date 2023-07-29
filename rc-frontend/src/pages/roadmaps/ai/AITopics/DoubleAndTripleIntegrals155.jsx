import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const DoubleAndTripleIntegrals155 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "ai How does the Internet Work?",
      url: "https://cs.fyi/guide/how-does-internet-work",
    },
    {
      id: 2,
      title: "How Does the Internet Work? MDN Docs",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work",
    },
    {
      id: 3,
      title: "Introduction to Internet",
      url: "https://youtu.be/Dxcc6ycZ73M",
    },
    {
      id: 4,
      title: "How does the Internet work?",
      url: "https://www.youtube.com/watch?v=TNQsmPf24go",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Double And Triple Integrals</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/gradient-divergence-and-curl-154"
          nextTo="/roadmaps/ai/line-integrals-and-surface-integrals-156"
        />
        <hr />

        <h2>DoubleAndTripleIntegrals155</h2>
        <p>
        Double And Triple Integrals is currently under development. Please check back soon for updates.
        </p>

        <TopicVideoPlayer
          videoTitle=""
          videoSrc=""
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
          topicName= "DoubleAndTripleIntegrals155"
          topicId={155}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/gradient-divergence-and-curl-154"
          nextTo="/roadmaps/ai/line-integrals-and-surface-integrals-156"
        />
      </div>
    </div>
  )
}

export default DoubleAndTripleIntegrals155;