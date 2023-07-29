import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const DeepLearningApproaches211 = () => {
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
        <h1>Deep Learning Approaches</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/object-recognition-and-detection-210"
          nextTo="/roadmaps/ai/video-analysis-212"
        />
        <hr />

        <h2>DeepLearningApproaches211</h2>
        <p>
        Deep Learning Approaches is currently under development. Please check back soon for updates.
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
          topicName= "DeepLearningApproaches211"
          topicId={211}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/object-recognition-and-detection-210"
          nextTo="/roadmaps/ai/video-analysis-212"
        />
      </div>
    </div>
  )
}

export default DeepLearningApproaches211;