import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Python253 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is Machine Learning? A definition - Expert System",
      url: "https://www.expert.ai/blog/machine-learning-definition/",
    },
    {
      id: 2,
      title: "Why Python for Machine Learning? Towards Data Science",
      url: "https://towardsdatascience.com/why-python-is-popular-among-data-scientists-8097b6a8ed3d",
    },
    {
      id: 3,
      title: "Getting started with Machine Learning using Python",
      url: "https://www.geeksforgeeks.org/getting-started-machine-learning-python/",
    },
    {
      id: 4,
      title: "Python Machine Learning Tutorial",
      url: "https://www.youtube.com/watch?v=7eh4d6sabA0",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Python</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/pick-a-programming-language-252"
          nextTo="/roadmaps/ml/r-254"
        />
        <hr />

        <h2>Python</h2>
        <p>
        Python is a high-level, interpreted programming language known for its simplicity and readability. It's a versatile language, widely used in various fields, but it shines particularly in the realm of machine learning.
        <br /><br />
        Why use Python for machine learning, you ask? Well, Python's extensive selection of libraries and frameworks, such as TensorFlow, PyTorch, and Scikit-learn, makes it an ideal choice for machine learning. These tools simplify complex tasks, allowing you to focus on the bigger picture rather than getting lost in the details.
        <br /><br />
        
        Furthermore, Python's large and active community means you'll never be alone in your machine learning journey. There's a wealth of resources and people ready to help, making Python not just a tool, but a companion in your exploration of machine learning.

        </p>

        <TopicVideoPlayer
          videoTitle="Python Machine Learning Tutorial for Beginners"
          videoSrc="https://www.youtube.com/embed/7eh4d6sabA0"
        />
        <TopicVideoPlayer
          videoTitle="Python for Machine Learning - Full Course"
          videoSrc="https://www.youtube.com/embed/7eh4d6sabA0"
        />
        <TopicVideoPlayer
          videoTitle="How to Start Learning Python for Machine Learning"
          videoSrc="https://www.youtube.com/embed/KdgQvgE3ji4"
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
          topicName= "Python253"
          topicId={253}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/pick-a-programming-language-252"
          nextTo="/roadmaps/ml/r-254"
        />
      </div>
    </div>
  )
}

export default Python253;