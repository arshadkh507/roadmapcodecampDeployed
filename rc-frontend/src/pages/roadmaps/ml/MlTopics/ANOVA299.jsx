import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ANOVA299 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "ANOVA: A Beginner's Guide",
      url: "https://statistics.laerd.com/statistical-guides/one-way-anova-statistical-guide.php",
    },
    {
      id: 2,
      title: "Understanding ANOVA",
      url: "https://www.investopedia.com/terms/a/anova.asp",
    },
    {
      id: 3,
      title: "ANOVA in Python",
      url: "https://www.datacamp.com/community/tutorials/anova-python",
    },
    {
      id: 4,
      title: "ANOVA in Machine Learning",
      url: "https://machinelearningmastery.com/analysis-of-variance-anova-for-machine-learning/",
    },
    {
      id: 5,
      title: "ANOVA: Step-by-Step Guide with Examples",
      url: "https://www.scribbr.com/statistics/anova/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>ANOVA</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/regression-298"
          nextTo="/roadmaps/ml/time-series-analysis-300"
        />
        <hr />

        <h2>ANOVA</h2>
        <p>
        ANOVA, or Analysis of Variance, is like a detective in the world of statistics. It's a method that helps us figure out if there are any significant differences between three or more groups. Imagine you're trying to find out if different teaching methods have different effects on students' test scores. ANOVA is the tool you'd use to crack the case! It's all about comparing and contrasting, and it's a key technique in fields like business, healthcare, engineering, and more.

        </p>

        <TopicVideoPlayer
          videoTitle="What Is Anova? | Introduction To Analysis And Variance | Anova Explained | Simplilearn"
          videoSrc="https://www.youtube.com/embed/r1ueoHA_KCQ"
        />
        <TopicVideoPlayer
          videoTitle="ANOVA | Analysis of Variance | Introduction and Concept in Hindi | Statistics "
          videoSrc="https://www.youtube.com/embed/8DaOIjuF4BY"
        />
        <TopicVideoPlayer
          videoTitle="ANOVA (Analysis of variance) simply explained"
          videoSrc="https://www.youtube.com/embed/0NwA9xxxtHw"
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
          topicName= "ANOVA299"
          topicId={299}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/regression-298"
          nextTo="/roadmaps/ml/time-series-analysis-300"
        />
      </div>
    </div>
  )
}

export default ANOVA299;