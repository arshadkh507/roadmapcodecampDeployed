import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Statistics292 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Statistics: An Introduction",
      url: "https://www.statistics.com/introduction-to-statistics/",
    },
    {
      id: 2,
      title: "Statistics and Probability",
      url: "https://www.khanacademy.org/math/statistics-probability",
    },
    {
      id: 3,
      title: "Statistics | Math | Khan Academy",
      url: "https://www.khanacademy.org/math/statistics-probability",
    },
    {
      id: 4,
      title: "Statistics - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Statistics",
    },
    {
      id: 5,
      title: "Introduction to Statistics | Coursera",
      url: "https://www.coursera.org/courses?query=introduction%20to%20statistics",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Statistics</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/vector-spaces-and-subspaces-291"
          nextTo="/roadmaps/ml/descriptive-statistics-293"
        />
        <hr />

        <h2>Statistics292</h2>
        <p>
        Statistics is a fascinating field that involves the collection, analysis, interpretation, presentation, and organization of data. It's a crucial component in Machine Learning as it provides the foundation for understanding the data we're working with. It helps us make sense of complex data sets, identify patterns, and make informed decisions. So, buckle up and dive into the world of statistics with us!

        </p>

        <TopicVideoPlayer
          videoTitle="Introduction to Statistics"
          videoSrc="https://www.youtube.com/embed/LMSyiAJm99g"
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
          topicName= "Statistics292"
          topicId={292}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/vector-spaces-and-subspaces-291"
          nextTo="/roadmaps/ml/descriptive-statistics-293"
        />
      </div>
    </div>
  )
}

export default Statistics292;