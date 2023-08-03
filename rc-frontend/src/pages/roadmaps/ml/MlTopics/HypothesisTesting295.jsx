import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const HypothesisTesting295 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Hypothesis Testing",
      url: "https://www.statisticshowto.com/probability-and-statistics/hypothesis-testing/",
    },
    {
      id: 2,
      title: "Hypothesis Testing: A systematic way to select samples from a group or population",
      url: "https://www.investopedia.com/terms/h/hypothesistesting.asp",
    },
    {
      id: 3,
      title: "Hypothesis Testing - Statistics Solutions",
      url: "https://www.statisticssolutions.com/hypothesis-testing/",
    },
    {
      id: 4,
      title: "Hypothesis Testing | Simply Psychology",
      url: "https://www.simplypsychology.org/hypothesis-testing.html",
    },
    {
      id: 5,
      title: "Hypothesis Testing - Math Is Fun",
      url: "https://www.mathsisfun.com/data/hypothesis-testing.html",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Hypothesis Testing</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/inferential-statistics-294"
          nextTo="/roadmaps/ml/confidence-intervals-296"
        />
        <hr />

        <h2>Hypothesis Testing</h2>
        <p>
        Hypothesis Testing, in the simplest terms, is like the Sherlock Holmes of statistics. It's a method that allows us to make educated guesses and test assumptions about a population based on a sample. Imagine you're trying to solve a mystery, and you have a hunch or 'hypothesis'. Hypothesis Testing is the process of gathering and examining the evidence to see if it supports your hunch or not.
<br /><br />
        Now, you might be wondering, what does this have to do with Machine Learning? Well, quite a lot actually! In Machine Learning, we often have to make decisions based on data. Hypothesis Testing helps us to make these decisions in a systematic and scientific way. It allows us to test our assumptions and predictions, and helps us to avoid making decisions based on mere guesswork. So, while we're busy training our models, Hypothesis Testing is like our silent partner, providing insights and guiding our steps.

        </p>

        <TopicVideoPlayer
          videoTitle="Hypothesis Testing Full concept in Hindi | statistics | Engineering Maths 4 Lectures"
          videoSrc="https://www.youtube.com/embed/LSIgQH06j74"
        />
        <TopicVideoPlayer
          videoTitle="Hypothesis Testing Statistics Problems & Examples"
          videoSrc="https://www.youtube.com/embed/-FtlH4svqx4"
        />
        <TopicVideoPlayer
          videoTitle="Hypothesis Testing - Introduction"
          videoSrc="https://www.youtube.com/embed/DlwOTOydeyk"
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
          topicName= "HypothesisTesting295"
          topicId={295}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/inferential-statistics-294"
          nextTo="/roadmaps/ml/confidence-intervals-296"
        />
      </div>
    </div>
  )
}

export default HypothesisTesting295;