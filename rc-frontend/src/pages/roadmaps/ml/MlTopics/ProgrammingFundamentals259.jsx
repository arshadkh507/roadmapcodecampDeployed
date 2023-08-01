import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ProgrammingFundamentals259 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Machine Learning Basics: What does a machine learning model do?",
      url: "https://towardsdatascience.com/machine-learning-basics-what-does-a-machine-learning-model-do-37aaf7db66ef",
    },
    {
      id: 2,
      title: "Python for Data Science: Basics #1 of 8 - Python Basics",
      url: "https://www.youtube.com/watch?v=gtejJ3RCddE",
    },
    {
      id: 3,
      title: "Introduction to Machine Learning",
      url: "https://developers.google.com/machine-learning/crash-course/ml-intro",
    },
    {
      id: 4,
      title: "A Gentle Introduction to Machine Learning",
      url: "https://machinelearningmastery.com/a-gentle-introduction-to-machine-learning/",
    },
    {
      id: 5,
      title: "Understanding Data Types in Python",
      url: "https://jakevdp.github.io/PythonDataScienceHandbook/02.01-understanding-data-types.html",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Programming Fundamentals</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/javascript-258"
          nextTo="/roadmaps/ml/variables-260"
        />
        <hr />

        <h2>Programming Fundamentals</h2>
        <p>
        To dive into the world of Machine Learning, it's essential to have a solid understanding of programming fundamentals. These include concepts like variables, data types, control structures (like loops and conditionals), and functions. Don't worry if you're not an expert yet - everyone starts somewhere, and you're already on the right path. Keep going, and happy coding!

        </p>

        <TopicVideoPlayer
          videoTitle="Python Machine Learning Tutorial (Data Science)"
          videoSrc="https://www.youtube.com/embed/7eh4d6sabA0"
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
          topicName= "ProgrammingFundamentals259"
          topicId={259}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/javascript-258"
          nextTo="/roadmaps/ml/variables-260"
        />
      </div>
    </div>
  )
}

export default ProgrammingFundamentals259;