import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const VectorSpacesAndSubspaces291 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Vector Spaces",
      url: "https://www.mathsisfun.com/algebra/vectors.html",
    },
    {
      id: 2,
      title: "Vector Spaces and Subspaces",
      url: "https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/subspace/v/vector-subspaces",
    },
    {
      id: 3,
      title: "Understanding Vector Spaces",
      url: "https://www.youtube.com/watch?v=TgKwz5Ikpc8",
    },
    {
      id: 4,
      title: "Subspaces in Linear Algebra",
      url: "https://www.youtube.com/watch?v=PFDu9oVAE-g",
    },
    {
      id: 5,
      title: "Vector Spaces: The Basics",
      url: "https://www.youtube.com/watch?v=Zz3kPO_vcqs",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Vector Spaces And Subspaces</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/linear-transformations-290"
          nextTo="/roadmaps/ml/statistics-292"
        />
        <hr />

        <h2>Vector Spaces And Subspaces</h2>
        <p>
        Vector Spaces and Subspaces are fundamental concepts in linear algebra. A vector space is a set of vectors that can be added together and multiplied by scalars. Subspaces are subsets of a vector space that still retain the properties of a vector space. In machine learning, these concepts are crucial as they provide the mathematical framework for many algorithms. For instance, they allow us to understand data as points in a high-dimensional space, and to use geometric and algebraic tools to analyze and manipulate this data. Stay tuned as we delve deeper into these fascinating topics.

        </p>

        <TopicVideoPlayer
          videoTitle="Introduction to Vector Spaces"
          videoSrc="https://www.youtube.com/embed/TgKwz5Ikpc8"
        />
        <TopicVideoPlayer
          videoTitle="BASIS OF VECTOR SPACE | BASIS OF VECTOR SPACE IN HINDI"
          videoSrc="https://www.youtube.com/NGv50dc7trY"
        />
        <TopicVideoPlayer
          videoTitle="Vector Space | Definition Of Vector Space | Examples Of Vector Space | Linear Algebra"
          videoSrc="https://www.youtube.com/embed/1XlT3Y2oyAU"
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
          topicName= "VectorSpacesAndSubspaces291"
          topicId={291}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/linear-transformations-290"
          nextTo="/roadmaps/ml/statistics-292"
        />
      </div>
    </div>
  )
}

export default VectorSpacesAndSubspaces291;