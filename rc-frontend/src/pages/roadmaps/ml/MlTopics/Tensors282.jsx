import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Tensors282 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Tensors for Machine Learning",
      url: "https://www.analyticsvidhya.com/blog/2018/04/introduction-to-tensors-ml/",
    },
    {
      id: 2,
      title: "Understanding Tensors in Machine Learning",
      url: "https://towardsdatascience.com/understanding-tensors-in-machine-learning-ml-262a688e9531",
    },
    {
      id: 3,
      title: "Tensors in Machine Learning - Explained",
      url: "https://www.youtube.com/watch?v=Csa5R12jYRg",
    },
    {
      id: 4,
      title: "Tensors Explained - Data Structures of Deep Learning",
      url: "https://www.youtube.com/watch?v=bpG3gqDM80w",
    },
    {
      id: 5,
      title: "A Gentle Introduction to Tensors for Machine Learning with NumPy",
      url: "https://machinelearningmastery.com/introduction-to-tensors-for-machine-learning/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Tensors</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/matrices-281"
          nextTo="/roadmaps/ml/matrix-multiplication-283"
        />
        <hr />

        <h2>Tensors282</h2>
        <p>
        Tensors, in the context of machine learning, are a type of data structure used in algorithms. They can be thought of as an extension of matrices to multiple dimensions and are a key part of many machine learning models. Tensors allow us to represent data with any number of dimensions, making them extremely versatile. For example, an image can be represented as a 3D tensor with dimensions corresponding to the height, width, and color channels of the image. In machine learning, tensors are used for storing the states and parameters of models, for performing complex mathematical operations, and for passing data between different parts of a model. So, understanding tensors and how to work with them is crucial for anyone diving into machine learning.

        </p>

        <TopicVideoPlayer
          videoTitle="Introduction to Tensors"
          videoSrc="https://www.youtube.com/embed/uaQeXi4E7gA"
        />
        <TopicVideoPlayer
          videoTitle="Tensors in Machine Learning"
          videoSrc="https://www.youtube.com/embed/Csa5R12jYRg"
        />
        <TopicVideoPlayer
          videoTitle="What's a Tensor?"
          videoSrc="https://www.youtube.com/embed/f5liqUk0ZTw"
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
          topicName= "Tensors282"
          topicId={282}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/matrices-281"
          nextTo="/roadmaps/ml/matrix-multiplication-283"
        />
      </div>
    </div>
  )
}

export default Tensors282;