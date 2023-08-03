import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Matrices281 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Matrices",
      url: "https://www.mathsisfun.com/algebra/matrix-introduction.html",
    },
    {
      id: 2,
      title: "Matrices in Machine Learning",
      url: "https://towardsdatascience.com/matrix-calculus-in-machine-learning-why-and-how-94b56c5dc96",
    },
    {
      id: 3,
      title: "Understanding the Role of Matrices in Machine Learning",
      url: "https://www.analyticsvidhya.com/blog/2017/05/comprehensive-guide-to-math-behind-machine-learning/",
    },
    {
      id: 4,
      title: "Matrices for Machine Learning",
      url: "https://machinelearningmastery.com/introduction-to-matrices-for-machine-learning/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Matrices</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/vectors-280"
          nextTo="/roadmaps/ml/tensors-282"
        />
        <hr />

        <h2>Matrices</h2>
        <p>
        Matrices are a fundamental part of many machine learning algorithms. They are a special kind of data structure that can be used to represent multiple dimensions of data. In machine learning, we often deal with high-dimensional data, and matrices provide a convenient way to work with such data. They are used in various aspects of machine learning, such as feature representation, linear regression, and neural network layers. So, understanding matrices and how to work with them is crucial for anyone diving into machine learning.

        </p> 

        <TopicVideoPlayer
          videoTitle="Introduction to Matrices"
          videoSrc="https://www.youtube.com/embed/yRwQ7A6jVLk"
        />
        <TopicVideoPlayer
          videoTitle="Matrix Basics | Deep Learning Tutorial 10 (Tensorflow Tutorial, Keras & Python)"
          videoSrc="https://www.youtube.com/embed/Wibxjrxf5ko"
        />
        <TopicVideoPlayer
          videoTitle="The Applications of Matrices | What I wish my teachers told me way earlier"
          videoSrc="https://www.youtube.com/embed/rowWM-MijXU"
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
          topicName= "Matrices281"
          topicId={281}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/vectors-280"
          nextTo="/roadmaps/ml/tensors-282"
        />
      </div>
    </div>
  )
}

export default Matrices281;