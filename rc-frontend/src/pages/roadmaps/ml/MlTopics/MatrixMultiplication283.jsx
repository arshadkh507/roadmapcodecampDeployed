import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const MatrixMultiplication283 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Matrix Multiplication: The Basics",
      url: "https://www.mathsisfun.com/algebra/matrix-multiplying.html",
    },
    {
      id: 2,
      title: "Matrix Multiplication in Machine Learning",
      url: "https://towardsdatascience.com/matrix-multiplication-in-machine-learning-3d6e77506f6",
    },
    {
      id: 3,
      title: "Matrix Multiplication: Step by Step Guide",
      url: "https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:matrices-multiplying/a/multiplying-matrices",
    },
    {
      id: 4,
      title: "Matrix Multiplication in Deep Learning",
      url: "https://machinelearningmastery.com/introduction-to-tensors-for-machine-learning/",
    },
    {
      id: 5,
      title: "Matrix Multiplication: A Comprehensive Overview",
      url: "https://www.analyticsvidhya.com/blog/2017/05/comprehensive-guide-to-linear-algebra/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Matrix Multiplication</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/tensors-282"
          nextTo="/roadmaps/ml/matrix-inverse-284"
        />
        <hr />

        <h2>MatrixMultiplication283</h2>
        <p>
        Matrix multiplication, in the simplest terms, is the process of multiplying two matrices together. It's a fundamental operation in linear algebra and plays a crucial role in machine learning. 
        In machine learning, we use matrix multiplication in various algorithms and computations. For instance, it's used in the training of neural networks, where the weights of the neurons are updated using matrix operations.  <br /><br />
        It's also used in the transformation of data, such as scaling or rotating points in a dataset. So, understanding matrix multiplication can really help you grasp the inner workings of many machine learning algorithms. Stay tuned as we dive deeper into this topic!

        </p>
        <TopicVideoPlayer
          videoTitle="Matrix Basics | Deep Learning Tutorial 10 (Tensorflow Tutorial, Keras & Python)"
          videoSrc="https://www.youtube.com/embed/Wibxjrxf5ko"
        />
        <TopicVideoPlayer
          videoTitle="Quick Matrix Multiplication"
          videoSrc="https://www.youtube.com/embed/PqobOjdYyBU"
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
          topicName= "MatrixMultiplication283"
          topicId={283}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/tensors-282"
          nextTo="/roadmaps/ml/matrix-inverse-284"
        />
      </div>
    </div>
  )
}

export default MatrixMultiplication283;