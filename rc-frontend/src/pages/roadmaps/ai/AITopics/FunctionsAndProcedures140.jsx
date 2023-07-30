import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const FunctionsAndProcedures140 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Functions in Python",
      url: "https://www.w3schools.com/python/python_functions.asp",
    },
    {
      id: 2,
      title: "Procedures in Python",
      url: "https://www.geeksforgeeks.org/procedures-in-python/",
    },
    {
      id: 3,
      title: "Functions and Procedures in AI",
      url: "https://www.analyticsvidhya.com/blog/2021/05/functions-and-procedures-in-python-for-data-science/",
    },
    {
      id: 4,
      title: "Functions and Procedures in Machine Learning",
      url: "https://towardsdatascience.com/understanding-functions-in-python-3a3b0522d764",
    },
    {
      id: 5,
      title: "Functions and Procedures in Deep Learning",
      url: "https://www.geeksforgeeks.org/python-functions/",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Functions And Procedures</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/control-structures-and-loops-139"
          nextTo="/roadmaps/ai/input-output-operations-141"
        />
        <hr />

        <h2>Functions And Procedures</h2>
        <p>
        Functions and Procedures are fundamental building blocks in any programming language, and they are crucial for AI. Functions are reusable pieces of code that perform a specific task, while procedures are a series of computational steps to be carried out. Any complex AI model can be broken down into a series of functions and procedures.
        </p>

        <TopicVideoPlayer
          videoTitle="Functions in Python"
          videoSrc="https://www.youtube.com/embed/9Os0o3wzS_I"
        />
        <TopicVideoPlayer
          videoTitle="Procedures in Python"
          videoSrc="https://www.youtube.com/embed/hEgO047GxaQ"
        />
        <TopicVideoPlayer
          videoTitle="Functions and Procedures in python"
          videoSrc="https://www.youtube.com/embed/dyvxxJSGUsE"
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
          topicName= "FunctionsAndProcedures140"
          topicId={140}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/control-structures-and-loops-139"
          nextTo="/roadmaps/ai/input-output-operations-141"
        />
      </div>
    </div>
  )
}

export default FunctionsAndProcedures140;