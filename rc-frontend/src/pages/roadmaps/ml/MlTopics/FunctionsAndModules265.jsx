import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const FunctionsAndModules265 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Functions in Python",
      url: "https://realpython.com/defining-your-own-python-function/",
    },
    {
      id: 2,
      title: "Python Modules: How to Create a Python Module",
      url: "https://www.datacamp.com/community/tutorials/modules-in-python",
    },
    {
      id: 3,
      title: "Python Functions Tutorial",
      url: "https://www.tutorialsteacher.com/python/python-function",
    },
    {
      id: 4,
      title: "Python Modules: An Introduction",
      url: "https://www.w3schools.com/python/python_modules.asp",
    },
    {
      id: 5,
      title: "Why and How to use Python Functions",
      url: "https://www.educative.io/edpresso/why-and-how-to-use-python-functions",
    },
    {
      id: 6,
      title: "Why and How to use Python Modules",
      url: "https://www.geeksforgeeks.org/python-modules/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Functions And Modules</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/data-types-264"
          nextTo="/roadmaps/ml/object-oriented-programming-266"
        />
        <hr />

        <h2>Functions And Modules</h2>
        <p>
        In programming, functions and modules play a crucial role. A function is a block of reusable code that performs a specific task. You can call it anywhere in your program, which saves you from writing the same code repeatedly. It makes your code more organized and manageable.
<br /><br />
        On the other hand, a module is a file containing Python definitions and statements. It provides a way of grouping related Python code for easy understanding and usage. You can define functions, classes, and variables in a module. You can also include runnable code. By using modules, you can break down large programs into small manageable and organized files.
        <br /><br />

        So, functions help you to organize and reuse your code, while modules help you to organize your functions and other code blocks. Both are essential for efficient and effective programming.
        <br /><br />

        </p>

        <TopicVideoPlayer
          videoTitle="Python Functions Explained"
          videoSrc="https://www.youtube.com/embed/9Os0o3wzS_I"
        />
        <TopicVideoPlayer
          videoTitle="Python Modules Explained"
          videoSrc="https://www.youtube.com/embed/sugvnHA7ElY"
        />
        <TopicVideoPlayer
          videoTitle="How Functions and Modules Work in Python"
          videoSrc="https://www.youtube.com/embed/6tNS--WetLI"
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
          topicName= "FunctionsAndModules265"
          topicId={265}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/data-types-264"
          nextTo="/roadmaps/ml/object-oriented-programming-266"
        />
      </div>
    </div>
  )
}

export default FunctionsAndModules265;