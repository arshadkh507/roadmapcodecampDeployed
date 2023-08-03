import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const MatrixInverse284 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Matrix Inverse: The Basics",
      url: "https://www.mathsisfun.com/algebra/matrix-inverse.html",
    },
    {
      id: 2,
      title: "Matrix Inverse in Machine Learning",
      url: "https://towardsdatascience.com/understanding-matrices-in-machine-learning-7a0e3542f693",
    },
    {
      id: 3,
      title: "Matrix Inverse: Step by Step Guide",
      url: "https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:matrices-inverse/a/intro-to-matrix-inverses",
    },
    {
      id: 4,
      title: "Matrix Inverse in Deep Learning",
      url: "https://machinelearningmastery.com/introduction-to-tensors-for-machine-learning/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Matrix Inverse</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/matrix-multiplication-283"
          nextTo="/roadmaps/ml/transpose-285"
        />
        <hr />

        <h2>Matrix Inverse</h2>
        <p>
        The Matrix Inverse, in simple terms, is like the reciprocal of a number but for matrices. Just as multiplying a number with its reciprocal gives us 1, multiplying a matrix with its inverse gives us the Identity Matrix. Now, why is this important in AI or ML? Well, the Matrix Inverse plays a crucial role in many machine learning algorithms. For instance, in linear regression, we use the Matrix Inverse to calculate the coefficients of the model. It's also used in deep learning for backpropagation. So, understanding the Matrix Inverse is quite essential in the journey of learning AI and ML.

        </p>

        <TopicVideoPlayer
          videoTitle="Inverse Matrices and Their Properties"
          videoSrc="https://www.youtube.com/embed/kWorj5BBy9k"
        />
        <TopicVideoPlayer
          videoTitle="Inverse of a matrix Part-1"
          videoSrc="https://www.youtube.com/embed/Q-F8s9R12Ys"
        />
        <TopicVideoPlayer
          videoTitle="Inverse of a matrix Part-2"
          videoSrc="https://www.youtube.com/embed/HMJvSDCR64w"
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
          topicName= "MatrixInverse284"
          topicId={284}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/matrix-multiplication-283"
          nextTo="/roadmaps/ml/transpose-285"
        />
      </div>
    </div>
  )
}

export default MatrixInverse284;