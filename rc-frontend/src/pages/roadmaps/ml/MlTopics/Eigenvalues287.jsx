import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Eigenvalues287 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Eigenvalues",
      url: "https://www.mathsisfun.com/algebra/eigenvalue.html",
    },
    {
      id: 2,
      title: "Eigenvalues and Eigenvectors",
      url: "https://www.khanacademy.org/math/linear-algebra/alternate-bases/eigen-everything/v/linear-algebra-introduction-to-eigenvalues-and-eigenvectors",
    },
    {
      id: 3,
      title: "Eigenvalues and Eigenvectors Explained Visually",
      url: "https://setosa.io/ev/eigenvectors-and-eigenvalues/",
    },
    {
      id: 4,
      title: "Eigenvalues in Machine Learning",
      url: "https://towardsdatascience.com/eigenvalues-in-machine-learning-7af3a4a031b4",
    },
    {
      id: 5,
      title: "Eigenvalues and Eigenvectors in Data Science",
      url: "https://www.analyticsvidhya.com/blog/2017/07/dimension-reduction-methods/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Eigenvalues</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/eigendecomposition-286"
          nextTo="/roadmaps/ml/eigenvectors-288"
        />
        <hr />

        <h2>Eigenvalues287</h2>
        <p>
        Eigenvalues, in the simplest terms, are a special set of scalars associated with a linear system of equations (i.e., a matrix equation) that are sometimes also called characteristic roots, characteristic values (of the matrix), proper values, or latent roots (of the matrix).
        <br /><br />
        The determination of the eigenvalues and eigenvectors of a system is extremely important in physics and engineering, where it is equivalent to matrix diagonalization and arises in such common applications as stability analysis, the physics of rotating bodies, and small oscillations of vibrating systems, to name only a few.
        <br /><br />
        In the realm of machine learning, eigenvalues play a crucial role in optimization algorithms, which lie at the heart of many machine learning methods. They are also central to Principal Component Analysis (PCA), a popular method for dimensionality reduction. By reducing the number of variables, we can simplify our models without losing too much information, making them more efficient and easier to interpret.
        <br /><br />
        So, while eigenvalues might seem like a complex concept, they're a fundamental building block in machine learning that helps us make sense of large, high-dimensional datasets.

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
          topicName= "Eigenvalues287"
          topicId={287}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/eigendecomposition-286"
          nextTo="/roadmaps/ml/eigenvectors-288"
        />
      </div>
    </div>
  )
}

export default Eigenvalues287;