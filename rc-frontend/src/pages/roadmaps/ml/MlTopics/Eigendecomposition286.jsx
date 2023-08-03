import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Eigendecomposition286 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Eigendecomposition",
      url: "https://www.eigendecomposition.com/understanding",
    },
    {
      id: 2,
      title: "Eigendecomposition in Machine Learning",
      url: "https://www.mlbasics.com/eigendecomposition",
    },
    {
      id: 3,
      title: "Eigendecomposition Explained",
      url: "https://www.youtube.com/watch?v=EigendecompositionExplained",
    },
    {
      id: 4,
      title: "The Role of Eigendecomposition in Data Analysis",
      url: "https://www.dataanalysis.com/eigendecomposition",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Eigendecomposition</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/transpose-285"
          nextTo="/roadmaps/ml/eigenvalues-287"
        />
        <hr />

        <h2>Eigendecomposition286</h2>
        <p>
        Eigendecomposition, in simple terms, is a kind of 'matrix operation' that plays a crucial role in simplifying complex matrix problems. It involves breaking down a matrix into its constituent parts, making it easier to perform computations and understand the underlying structure of the data.
        <br /><br />
        In the realm of machine learning, eigendecomposition is a powerful tool. It's used in Principal Component Analysis (PCA), a popular method for dimensionality reduction. By reducing the number of variables, we can simplify our models without losing too much information, making them more efficient and easier to interpret.
        <br /><br />
        
        So, while eigendecomposition might seem like a complex concept, it's a fundamental building block in machine learning that helps us make sense of large, high-dimensional datasets.

        </p>

        <TopicVideoPlayer
          videoTitle="Eigendecomposition : Data Science Basics"
          videoSrc="https://www.youtube.com/embed/video1"
        />
        <TopicVideoPlayer
          videoTitle="Linear Algebra - Full College Course"
          videoSrc="https://www.youtube.com/embed/JnTa9XtvmfI"
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
          topicName= "Eigendecomposition286"
          topicId={286}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/transpose-285"
          nextTo="/roadmaps/ml/eigenvalues-287"
        />
      </div>
    </div>
  )
}

export default Eigendecomposition286;