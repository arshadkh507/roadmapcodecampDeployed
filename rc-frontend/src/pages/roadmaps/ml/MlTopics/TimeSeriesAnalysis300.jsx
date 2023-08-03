import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const TimeSeriesAnalysis300 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Time Series Analysis: An Introduction",
      url: "https://otexts.com/fpp2/",
    },
    {
      id: 2,
      title: "Time Series Analysis and Its Applications",
      url: "https://www.springer.com/gp/book/9783319524511",
    },
    {
      id: 3,
      title: "Time Series Analysis by State Space Methods",
      url: "https://global.oup.com/academic/product/time-series-analysis-by-state-space-methods-9780199641178",
    },
    {
      id: 4,
      title: "Introduction to Time Series Analysis",
      url: "https://www.youtube.com/watch?v=Prpu_U5tKkE",
    },
    {
      id: 5,
      title: "Time Series Analysis in Python",
      url: "https://www.datacamp.com/courses/time-series-analysis-in-python",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Time Series Analysis</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/anova-299"
          nextTo="/roadmaps/ml/non-parametric-methods-301"
        />
        <hr />

        <h2>Time Series Analysis</h2>
        <p>
        Time Series Analysis, in simple terms, is like a treasure hunt where we seek to uncover hidden patterns in sequential data. It's a way to understand, analyze and predict trends over time, be it the stock market, weather patterns, or even your heart rate. It's a fascinating field that's constantly evolving, so stay tuned as we dive deeper into this topic!

        </p>

        <TopicVideoPlayer
          videoTitle="Time series analysis- introduction, significance, components of time series and decomposition models"
          videoSrc="https://www.youtube.com/embed/3QCEdEo3Ekg"
        />
        <TopicVideoPlayer
          videoTitle="What is Time Series Analysis?"
          videoSrc="https://www.youtube.com/embed/GE3JOFwTWVM"
        />
        <TopicVideoPlayer
          videoTitle="Time Series Analysis in Python | Time Series Forecasting | Data Science with Python"
          videoSrc="https://www.youtube.com/embed/e8Yw4alG16Q"
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
          topicName= "TimeSeriesAnalysis300"
          topicId={300}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/anova-299"
          nextTo="/roadmaps/ml/non-parametric-methods-301"
        />
      </div>
    </div>
  )
}

export default TimeSeriesAnalysis300;