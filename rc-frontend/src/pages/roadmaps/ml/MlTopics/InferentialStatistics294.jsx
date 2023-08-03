import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const InferentialStatistics294 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Inferential Statistics: An Introduction",
      url: "https://www.statistics.com/inferential-statistics/",
    },
    {
      id: 2,
      title: "Inferential Statistics: Khan Academy",
      url: "https://www.khanacademy.org/math/statistics-probability/inferential-statistics",
    },
    {
      id: 3,
      title: "Inferential Statistics: Coursera",
      url: "https://www.coursera.org/courses?query=inferential%20statistics",
    },
    {
      id: 4,
      title: "Inferential Statistics: Tutorial",
      url: "https://www.tutorialspoint.com/statistics/inferential_statistics.htm",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Inferential Statistics</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/descriptive-statistics-293"
          nextTo="/roadmaps/ml/hypothesis-testing-295"
        />
        <hr />

        <h2>Inferential Statistics</h2>
        <p>
        Inferential Statistics is a fascinating branch of statistics that allows us to make educated guesses about a population based on a sample. It's like being a detective, using clues and evidence to make conclusions about a larger group. In the realm of Machine Learning, Inferential Statistics plays a pivotal role. It helps us understand and interpret data, make predictions, and drive decision-making processes. So, while we're busy training our models, Inferential Statistics is the silent partner, providing insights and guiding our steps.

        </p>

      
        <TopicVideoPlayer
          videoTitle="Descriptive Statistics vs Inferential Statistics"
          videoSrc="https://www.youtube.com/embed/VHYOuWu9jQI"
        />
            <TopicVideoPlayer
          videoTitle="Statistics and Probability Full Course || Statistics For Data Science"
          videoSrc="https://www.youtube.com/embed/sbbYntt5CJk"
        />
        <TopicVideoPlayer
          videoTitle="Statistics for Data Science | Probability and Statistics | Statistics Tutorial | Ph.D. (Stanford)"
          videoSrc="https://www.youtube.com/embed/Vfo5le26IhY"
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
          topicName= "InferentialStatistics294"
          topicId={294}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/descriptive-statistics-293"
          nextTo="/roadmaps/ml/hypothesis-testing-295"
        />
      </div>
    </div>
  )
}

export default InferentialStatistics294;