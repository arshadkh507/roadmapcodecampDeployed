import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Vectors280 = () => {
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
        <h1>Vectors</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/scalars-279"
          nextTo="/roadmaps/ml/matrices-281"
        />
        <hr />

        <h2>Vectors</h2>
        <p>
        Vectors are fundamental in the world of machine learning. They are essentially a list of numbers, and these numbers have a very special relationship with each other. They are not just a random collection, but rather, each number in the vector represents a specific feature of some data point. 
        <br /><br />
        In machine learning, we use vectors to represent and manipulate data. For example, an image, a sound clip, a text, all can be represented as a vector of numbers. This makes it possible for us to apply mathematical operations on them, and extract useful patterns. 
        <br /><br />
        
        So, when you hear about vectors in machine learning, think of them as a way to hold and work with our data. They are the language that machines understand and they are crucial in training models that can make predictions, recognize patterns, and give us insights from data.

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
          topicName= "Vectors280"
          topicId={280}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/scalars-279"
          nextTo="/roadmaps/ml/matrices-281"
        />
      </div>
    </div>
  )
}

export default Vectors280;