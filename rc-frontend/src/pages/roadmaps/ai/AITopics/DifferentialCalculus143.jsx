import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const DifferentialCalculus143 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Differential Calculus for AI",
      url: "https://www.someurl.com/differential-calculus-for-ai",
    },
    {
      id: 2,
      title: "Understanding Differential Calculus in AI",
      url: "https://www.someurl.com/understanding-differential-calculus-in-ai",
    },
    {
      id: 3,
      title: "Application of Differential Calculus in AI",
      url: "https://www.someurl.com/application-of-differential-calculus-in-ai",
    },
    {
      id: 4,
      title: "Differential Calculus in AI: A Comprehensive Guide",
      url: "https://www.someurl.com/differential-calculus-in-ai-guide",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Differential Calculus</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/mathematics-142"
          nextTo="/roadmaps/ai/limits-and-continuity-144"
        />
        <hr />

        <h2>DifferentialCalculus143</h2>
        <p>
        Differential Calculus, in the context of Artificial Intelligence, is a fundamental mathematical tool. It helps us understand how changes in input values can affect the output of a function. This is particularly useful in AI for optimizing algorithms, such as gradient descent, where we iteratively adjust parameters to minimize a cost function. By understanding the rate of change (the derivative), we can make intelligent decisions about how to adjust our parameters to achieve the most efficient learning.

        </p>

        <TopicVideoPlayer
          videoTitle="Differential Calculus for AI - Khan Academy"
          videoSrc="https://www.youtube.com/embed/best_video_link_1?autoplay=1&mute=1"
        />
        <TopicVideoPlayer
          videoTitle="Understanding Differential Calculus in AI - 3Blue1Brown"
          videoSrc="https://www.youtube.com/embed/best_video_link_2?autoplay=1&mute=1"
        />
        <TopicVideoPlayer
          videoTitle="Application of Differential Calculus in AI - MIT OpenCourseWare"
          videoSrc="https://www.youtube.com/embed/best_video_link_3?autoplay=1&mute=1"
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
          topicName= "DifferentialCalculus143"
          topicId={143}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/mathematics-142"
          nextTo="/roadmaps/ai/limits-and-continuity-144"
        />
      </div>
    </div>
  )
}

export default DifferentialCalculus143;