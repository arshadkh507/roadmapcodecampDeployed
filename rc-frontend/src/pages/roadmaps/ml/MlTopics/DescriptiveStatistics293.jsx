import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const DescriptiveStatistics293 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Descriptive Statistics: An Introduction",
      url: "https://www.statistics.com/descriptive-statistics/",
    },
    {
      id: 2,
      title: "Descriptive Statistics: Concepts, Types, and Examples",
      url: "https://www.scribbr.com/methodology/descriptive-statistics/",
    },
    {
      id: 3,
      title: "Descriptive Statistics in Python",
      url: "https://www.datacamp.com/community/tutorials/descriptive-statistics-python",
    },
    {
      id: 4,
      title: "Descriptive Statistics in R",
      url: "https://www.datacamp.com/community/tutorials/descriptive-statistics-r",
    },
    {
      id: 5,
      title: "Descriptive Statistics: Measures of Central Tendency and Dispersion",
      url: "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Descriptive Statistics</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/statistics-292"
          nextTo="/roadmaps/ml/inferential-statistics-294"
        />
        <hr />

        <h2>Descriptive Statistics</h2>
        <p>
        Descriptive Statistics is a branch of statistics that deals with the presentation and collection of data. This form of statistics uses measures of central tendency and dispersion—mean, median and mode, range and quartiles, and standard deviation—to provide a snapshot of the data set. In the realm of Machine Learning, Descriptive Statistics is crucial. It provides insights into the data that we feed into our models, helping us understand the data's structure, main characteristics, and any potential trends or patterns. This understanding is key to making informed decisions when training our models.

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
          topicName= "DescriptiveStatistics293"
          topicId={293}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/statistics-292"
          nextTo="/roadmaps/ml/inferential-statistics-294"
        />
      </div>
    </div>
  )
}

export default DescriptiveStatistics293;