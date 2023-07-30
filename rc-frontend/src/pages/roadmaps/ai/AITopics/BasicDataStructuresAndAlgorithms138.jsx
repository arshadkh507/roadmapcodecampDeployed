import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const BasicDataStructuresAndAlgorithms138 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Data Structures and Algorithms in Python",
      url: "https://www.amazon.com/Structures-Algorithms-Python-Michael-Goodrich/dp/1118290275",
    },
    {
      id: 2,
      title: "Data Structures and Algorithms for AI",
      url: "https://towardsdatascience.com/data-structures-algorithms-for-ai-823b6bcf3963",
    },
    {
      id: 3,
      title: "Data Structures and Algorithms in AI",
      url: "https://www.analyticsvidhya.com/blog/2021/03/data-structures-and-algorithms-in-artificial-intelligence/",
    },
    {
      id: 4,
      title: "Data Structures and Algorithms for Machine Learning",
      url: "https://machinelearningmastery.com/data-structures-algorithms-for-machine-learning/",
    },
    {
      id: 5,
      title: "Data Structures and Algorithms for Deep Learning",
      url: "https://www.geeksforgeeks.org/data-structures-and-algorithms-for-deep-learning/",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Basic Data Structures And Algorithms</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/programming-fundamentals-137"
          nextTo="/roadmaps/ai/control-structures-and-loops-139"
        />
        <hr />

        <h2>BasicDataStructuresAndAlgorithms138</h2>
        <p>
        Understanding Basic Data Structures and Algorithms is crucial for getting started with AI. These fundamental concepts form the backbone of any AI program, helping to efficiently store, organize, and manipulate data. From arrays and linked lists to trees and graphs, these structures allow AI systems to handle complex tasks with ease. Similarly, algorithms, which are step-by-step procedures for solving problems, enable AI systems to make decisions, learn from data, and improve over time.
        </p>

        <TopicVideoPlayer
          videoTitle="Data Structures and Algorithms for AI - Part 1"
          videoSrc="https://www.youtube.com/embed/Z1Yd7upQsXY"
        />
        <TopicVideoPlayer
          videoTitle="Data Structures and Algorithms for AI - Part 2"
          videoSrc="https://www.youtube.com/embed/aircAruvnKk"
        />
        <TopicVideoPlayer
          videoTitle="Data Structures and Algorithms for AI - Part 3"
          videoSrc="https://www.youtube.com/embed/IHZwWFHWa-w"
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
          topicName= "BasicDataStructuresAndAlgorithms138"
          topicId={138}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/programming-fundamentals-137"
          nextTo="/roadmaps/ai/control-structures-and-loops-139"
        />
      </div>
    </div>
  )
}

export default BasicDataStructuresAndAlgorithms138;