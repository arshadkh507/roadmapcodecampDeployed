import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Eigenvectors288 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Eigenvectors",
      url: "https://www.mathsisfun.com/algebra/eigenvector.html",
    },
    {
      id: 2,
      title: "Eigenvectors and Eigenvalues Explained Visually",
      url: "https://setosa.io/ev/eigenvectors-and-eigenvalues/",
    },
    {
      id: 3,
      title: "Eigenvectors in Machine Learning",
      url: "https://towardsdatascience.com/eigenvectors-in-machine-learning-7af3a4a031b4",
    },
    {
      id: 4,
      title: "Eigenvectors and Eigenvalues in Data Science",
      url: "https://www.analyticsvidhya.com/blog/2017/07/dimension-reduction-methods/",
    },
    {
      id: 5,
      title: "Introduction to Eigenvectors",
      url: "https://www.youtube.com/watch?v=3BvlT1PgI0o",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Eigenvectors</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/eigenvalues-287"
          nextTo="/roadmaps/ml/singular-value-decomposition-289"
        />
        <hr />

        <h2>Eigenvectors</h2>
        <p>
        Eigenvectors are a fascinating concept in linear algebra that have found their way into the heart of Machine Learning. They are vectors associated with a particular linear transformation of a vector space, remaining in their own span during such transformations.
<br /><br />
        But why are they important in Machine Learning? Well, they come into play in Principal Component Analysis (PCA), a popular dimensionality reduction technique. PCA leverages the concept of eigenvectors to identify the directions (or components) in the dataset where the variance is maximum. In simpler terms, it helps us simplify our complex, high-dimensional data while retaining its essence.
        <br /><br />

        So, whether you're building a recommendation system or detecting patterns in high-dimensional data, eigenvectors are your trusty companions. Stay tuned as we dive deeper into this topic!

        </p>

        <TopicVideoPlayer
          videoTitle="Introduction to Eigenvalues and Eigenvectors - Part 1"
          videoSrc="https://www.youtube.com/embed/G4N8vJpf7hM"
        />
        <TopicVideoPlayer
          videoTitle="Eigenvectors and eigenvalues | Chapter 14, Essence of linear algebra"
          videoSrc="https://www.youtube.com/embed/PFDu9oVAE-g"
        />
        <TopicVideoPlayer
          videoTitle="Eigen Values and Eigen Vectors in HINDI { 2022} | Matrices"
          videoSrc="https://www.youtube.com/embed/h8sg_XBp6VA"
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
          topicName= "Eigenvectors288"
          topicId={288}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/eigenvalues-287"
          nextTo="/roadmaps/ml/singular-value-decomposition-289"
        />
      </div>
    </div>
  )
}

export default Eigenvectors288;