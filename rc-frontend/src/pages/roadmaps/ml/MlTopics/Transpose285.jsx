import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Transpose285 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Transpose in Machine Learning",
      url: "https://www.mlbasics.com/transpose",
    },
    {
      id: 2,
      title: "The Role of Transpose in Machine Learning",
      url: "https://www.datasciencecentral.com/transpose-in-ml",
    },
    {
      id: 3,
      title: "Matrix Transpose in Machine Learning",
      url: "https://www.analyticsvidhya.com/matrix-transpose-ml",
    },
    {
      id: 4,
      title: "Why Transpose is Important in Machine Learning",
      url: "https://www.medium.com/transpose-in-machine-learning",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Transpose</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/matrix-inverse-284"
          nextTo="/roadmaps/ml/eigendecomposition-286"
        />
        <hr />

        <h2>Transpose285</h2>
        <p>
        Transpose, in the simplest terms, is like flipping a matrix over its diagonal. It's like turning columns into rows and rows into columns. This might seem like a simple operation, but it's incredibly important in machine learning. It helps us manipulate data, perform certain calculations, and even understand the underlying structure of our datasets. So, while it might seem like a small piece of the puzzle, it's a piece that holds a lot of weight.

        </p>

        <TopicVideoPlayer
          videoTitle="Transpose of a Matrix | Don't Memorise"
          videoSrc="https://www.youtube.com/embed/g_Rz94DXvNo"
        />
        <TopicVideoPlayer
          videoTitle="TWhat is transpose of a matrix? Definition and example.| Hindi | | Ritu Gupta |"
          videoSrc="https://www.youtube.com/embed/CnwAZFK_Fvs"
        />
        <TopicVideoPlayer
          videoTitle="What Linear Algebra Is — Topic 1 of Machine Learning Foundations"
          videoSrc="https://www.youtube.com/embed/Qc19jQWHdL0"
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
          topicName= "Transpose285"
          topicId={285}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/matrix-inverse-284"
          nextTo="/roadmaps/ml/eigendecomposition-286"
        />
      </div>
    </div>
  )
}

export default Transpose285;