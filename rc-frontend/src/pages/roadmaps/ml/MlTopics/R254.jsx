import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const R254 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to R for Machine Learning",
      url: "https://www.datacamp.com/courses/introduction-to-r-for-machine-learning",
    },
    {
      id: 2,
      title: "Machine Learning with R for beginners",
      url: "https://www.analyticsvidhya.com/blog/2015/09/full-cheatsheet-machine-learning-algorithms/",
    },
    {
      id: 3,
      title: "Why R is the best data science language to learn today?",
      url: "https://towardsdatascience.com/why-r-is-the-best-data-science-language-to-learn-today-4986b5f4566",
    },
    {
      id: 4,
      title: "Getting started with Machine Learning using R",
      url: "https://www.youtube.com/watch?v=G70qNPeMj8k",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>R</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/python-253"
          nextTo="/roadmaps/ml/java-255"
        />
        <hr />

        <h2>R254</h2>
        <p>
        R is a powerful programming language that's widely used in the field of machine learning. It's known for its statistical computing capabilities and graphical features, which make it an excellent tool for data analysis and visualization. With R, you can easily manipulate data, perform complex statistical operations, and create stunning visualizations. Moreover, R has a vast collection of packages specifically designed for machine learning, making it easier to implement and experiment with various algorithms. So, if you're diving into machine learning, R is definitely a language worth considering!
        </p>

        <TopicVideoPlayer
          videoTitle="What is R for Machine Learning?"
          videoSrc="https://www.youtube.com/embed/6dEUTmoXz0w"
        />
        <TopicVideoPlayer
          videoTitle="Python vs R - Which One is Best For ML and Data Science? | GeeksforGeeks"
          videoSrc="https://www.youtube.com/embed/5YYdFsvtDoM"
        />
        <TopicVideoPlayer
          videoTitle="R Programming Tutorial - Learn the Basics of Statistical Computing"
          videoSrc="https://www.youtube.com/embed/_V8eKsto3Ug"
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
          topicName= "R254"
          topicId={254}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/python-253"
          nextTo="/roadmaps/ml/java-255"
        />
      </div>
    </div>
  )
}

export default R254;