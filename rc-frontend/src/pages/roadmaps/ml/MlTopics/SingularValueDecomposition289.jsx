import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const SingularValueDecomposition289 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Singular Value Decomposition",
      url: "https://www.mathsisfun.com/algebra/singular-value-decomposition.html",
    },
    {
      id: 2,
      title: "Singular Value Decomposition Explained",
      url: "https://towardsdatascience.com/singular-value-decomposition-example-in-python-dab2507d85a0",
    },
    {
      id: 3,
      title: "Singular Value Decomposition in Machine Learning",
      url: "https://machinelearningmastery.com/singular-value-decomposition-for-machine-learning/",
    },
    {
      id: 4,
      title: "Singular Value Decomposition Video Explanation",
      url: "https://www.youtube.com/watch?v=mBcLRGuAFUk",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Singular Value Decomposition</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/eigenvectors-288"
          nextTo="/roadmaps/ml/linear-transformations-290"
        />
        <hr />

        <h2>Singular Value Decomposition</h2>
        <p>
        Singular Value Decomposition, or SVD for short, is a bit like a superpower in the world of linear algebra. It's a method that enables us to break down a matrix into three separate parts. This might not sound like much, but it's incredibly useful in a wide range of applications, from data compression to recommendation systems. So, while it might seem a bit complex at first, it's definitely worth getting to know. Stick around as we delve deeper into this fascinating topic!

        </p>

        <TopicVideoPlayer
          videoTitle="Singular Value Decomposition (SVD): Overview"
          videoSrc="https://www.youtube.com/embed/gXbThCXjZFM"
        />
        <TopicVideoPlayer
          videoTitle="Singular Value Decomposition (the SVD)"
          videoSrc="https://www.youtube.com/embed/mBcLRGuAFUk"
        />
        <TopicVideoPlayer
          videoTitle="Singular Value Decomposition (SVD) Problem | Full Explanation"
          videoSrc="https://www.youtube.com/embed/NGHBniMyteo"
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
          topicName= "SingularValueDecomposition289"
          topicId={289}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/eigenvectors-288"
          nextTo="/roadmaps/ml/linear-transformations-290"
        />
      </div>
    </div>
  )
}

export default SingularValueDecomposition289;