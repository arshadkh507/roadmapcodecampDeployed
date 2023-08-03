import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ConfidenceIntervals296 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Confidence Intervals: Definition, Formula and Example",
      url: "https://www.statisticshowto.com/probability-and-statistics/confidence-interval/",
    },
    {
      id: 2,
      title: "Confidence Intervals - Math Is Fun",
      url: "https://www.mathsisfun.com/data/confidence-interval.html",
    },
    {
      id: 3,
      title: "Confidence Interval: Simple Definition, Step by Step Video",
      url: "https://www.spss-tutorials.com/confidence-interval-what-is-it/",
    },
    {
      id: 4,
      title: "Confidence Intervals in One Minute",
      url: "https://www.youtube.com/watch?v=hlM7zdf7zwU",
    },
    {
      id: 5,
      title: "Confidence Intervals - Statistics and Probability",
      url: "https://www.khanacademy.org/math/statistics-probability/confidence-intervals-one-sample",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Confidence Intervals</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/hypothesis-testing-295"
          nextTo="/roadmaps/ml/descriptive-statistics-297"
        />
        <hr />

        <h2>ConfidenceIntervals296</h2>
        <p>
        Confidence Intervals are a statistical concept that plays a crucial role in Machine Learning. They provide a range of values, derived from data, that is likely to contain the true value of an unknown population parameter. In other words, they give us an interval within which we can be certain, to a degree of confidence, that a parameter lies. This is particularly useful in Machine Learning as it allows us to quantify the uncertainty of our models and make more informed decisions.

        </p>

        <TopicVideoPlayer
          videoTitle="Confidence Interval [Simply explained]"
          videoSrc="https://www.youtube.com/embed/ENnlSlvQHO0"
        />
        <TopicVideoPlayer
          videoTitle="Confidence intervals and margin of error | AP Statistics | Khan Academy"
          videoSrc="https://www.youtube.com/embed/hlM7zdf7zwU"
        />
        <TopicVideoPlayer
          videoTitle="How To Find The Z Score, Confidence Interval, and Margin of Error for a Population Mean"
          videoSrc="https://www.youtube.com/embed/DT-fPG0Hff8"
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
          topicName= "ConfidenceIntervals296"
          topicId={296}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/hypothesis-testing-295"
          nextTo="/roadmaps/ml/descriptive-statistics-297"
        />
      </div>
    </div>
  )
}

export default ConfidenceIntervals296;