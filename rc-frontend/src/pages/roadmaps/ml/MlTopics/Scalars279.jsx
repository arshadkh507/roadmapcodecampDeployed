import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Scalars279 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Linear Algebra",
      url: "https://www.mathsisfun.com/algebra/linear-algebra-introduction.html",
    },
    {
      id: 2,
      title: "Linear Algebra in Machine Learning",
      url: "https://towardsdatascience.com/linear-algebra-cheat-sheet-for-deep-learning-cd67aba4526c",
    },
    {
      id: 3,
      title: "Understanding Linear Algebra in ML",
      url: "https://www.analyticsvidhya.com/blog/2017/05/comprehensive-guide-to-linear-algebra/",
    },
    {
      id: 4,
      title: "Linear Algebra for Machine Learning",
      url: "https://machinelearningmastery.com/gentle-introduction-linear-algebra/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Scalars</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/linear-algebra-278"
          nextTo="/roadmaps/ml/vectors-280"
        />
        <hr />

        <h2>Scalars</h2>
        <p>
        Scalars, in the context of machine learning, are simply single numbers. They are the simplest form of numerical data we can work with. But don't let their simplicity fool you! Scalars play a crucial role in machine learning algorithms. They are used extensively in calculations, transformations, and operations that drive these algorithms. So, next time you see a scalar, remember, it's a small but mighty part of the machine learning world.

        </p>

        <TopicVideoPlayer
          videoTitle="Scalars and Vectors"
          videoSrc="https://www.youtube.com/embed/rcDXQ-5H8mk"
        />
        <TopicVideoPlayer
          videoTitle="Scalar Quantity and Vector Quantity | Physics | Infinity Learn"
          videoSrc="https://www.youtube.com/embed/Pj8Zh0A-uLU"
        />
        <TopicVideoPlayer
          videoTitle="How Machine Learning uses Linear Algebra to solve data problems"
          videoSrc="https://www.youtube.com/embed/wyoS89J3ap4"
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
          topicName= "Scalars279"
          topicId={279}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/linear-algebra-278"
          nextTo="/roadmaps/ml/vectors-280"
        />
      </div>
    </div>
  )
}

export default Scalars279;