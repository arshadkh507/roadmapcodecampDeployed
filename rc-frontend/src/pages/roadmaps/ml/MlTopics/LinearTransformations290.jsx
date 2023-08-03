import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const LinearTransformations290 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Linear Transformations",
      url: "https://www.mathsisfun.com/algebra/linear-transformations.html",
    },
    {
      id: 2,
      title: "Linear Transformations Explained",
      url: "https://www.khanacademy.org/math/linear-algebra/matrix-transformations/linear-transformations/a/linear-transformations",
    },
    {
      id: 3,
      title: "Introduction to Linear Transformations",
      url: "https://youtu.be/2g9OSRKJuzM",
    },
    {
      id: 4,
      title: "Linear Transformations in Practice",
      url: "https://www.youtube.com/watch?v=JHAOL_iKtHk",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Linear Transformations</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/singular-value-decomposition-289"
          nextTo="/roadmaps/ml/vector-spaces-and-subspaces-291"
        />
        <hr />

        <h2>LinearTransformations290</h2>
        <p>
        Linear Transformations, in the simplest terms, are operations that transform one vector into another while preserving the operations of vector addition and scalar multiplication. They are a fundamental concept in linear algebra.
        <br /><br />
        But why are they important in Machine Learning, you ask? Well, they come into play in various machine learning algorithms, especially those involving dimensionality reduction and data preprocessing. For instance, Principal Component Analysis (PCA), a popular dimensionality reduction technique, leverages the concept of linear transformations to identify the directions (or components) in the dataset where the variance is maximum. 
        <br /><br />
        
        So, whether you're preprocessing your data or trying to reduce its dimensionality, linear transformations are your trusty companions. Stay tuned as we delve deeper into this fascinating topic!

        </p>

        <TopicVideoPlayer
          videoTitle="Linear transformations | Matrix transformations | Linear Algebra | Khan Academy"
          videoSrc="https://www.youtube.com/embed/4PCktDZJH8E"
        />
        <TopicVideoPlayer
          videoTitle="Vector Space | Linear Transformation | Examples Of Linear Transformation | Linear Algebra"
          videoSrc="https://www.youtube.com/embed/1fLxcBJB_t8"
        />
        <TopicVideoPlayer
          videoTitle="Linear Transformation | Definition and Examples | fully Explained | (Lecture 48) in Hindi"
          videoSrc="https://www.youtube.com/embed/6HIlc5T8vsI"
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
          topicName= "LinearTransformations290"
          topicId={290}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/singular-value-decomposition-289"
          nextTo="/roadmaps/ml/vector-spaces-and-subspaces-291"
        />
      </div>
    </div>
  )
}

export default LinearTransformations290;