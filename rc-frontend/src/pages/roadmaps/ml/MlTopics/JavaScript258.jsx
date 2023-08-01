import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const JavaScript258 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Machine Learning with JavaScript",
      url: "https://www.freecodecamp.org/news/machine-learning-in-javascript/",
    },
    {
      id: 2,
      title: "Why Machine Learning with JavaScript is on the rise?",
      url: "https://towardsdatascience.com/why-machine-learning-with-javascript-is-on-the-rise-5243d589a449",
    },
    {
      id: 3,
      title: "How to use Machine Learning in JavaScript",
      url: "https://heartbeat.fritz.ai/how-to-use-machine-learning-in-javascript-b0e8d6bdb5a2",
    },
    {
      id: 4,
      title: "JavaScript for Machine Learning using TensorFlow.js",
      url: "https://www.youtube.com/watch?v=Qt3ZABW5lD0",
    },
    {
      id: 5,
      title: "Introduction to Machine Learning in JavaScript with TensorFlow.js",
      url: "https://www.youtube.com/watch?v=9Hz3P1VgLz4",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Java Script</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/matlab-257"
          nextTo="/roadmaps/ml/programming-fundamentals-259"
        />
        <hr />

        <h2>JavaScript258</h2>
        <p>
        JavaScript is a powerful and versatile programming language widely used in web development. It's dynamic, interpreted, and supports object-oriented programming. <br /><br />
        In the context of Machine Learning (ML), JavaScript plays a significant role. With libraries like TensorFlow.js, it allows developers to build and train ML models right in the browser. 
        This opens up a world of possibilities for interactive web applications that can learn from user input, adapt, and improve over time. So, let's dive into the fascinating world of Machine Learning with JavaScript!

        </p>

        <TopicVideoPlayer
          videoTitle="Javascript Introduction"
          videoSrc="https://www.youtube.com/embed/B7wHpNUUT4Y"
        />
        <TopicVideoPlayer
          videoTitle="Learn TensorFlow.js - Deep Learning and Neural Networks with JavaScript"
          videoSrc="https://www.youtube.com/embed/EoYfa6mYOG4"
        />
        <TopicVideoPlayer
          videoTitle="Machine Learning Tutorial for Beginners - USING JAVASCRIPT!"
          videoSrc="https://www.youtube.com/embed/9Hz3P1VgLz4"
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
          topicName= "JavaScript258"
          topicId={258}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/matlab-257"
          nextTo="/roadmaps/ml/programming-fundamentals-259"
        />
      </div>
    </div>
  )
}

export default JavaScript258;