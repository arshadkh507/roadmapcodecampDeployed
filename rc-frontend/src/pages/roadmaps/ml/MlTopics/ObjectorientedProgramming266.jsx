import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ObjectorientedProgramming266 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is Object-Oriented Programming (OOP)?",
      url: "https://www.educative.io/blog/object-oriented-programming",
    },
    {
      id: 2,
      title: "Why use Object-Oriented Programming (OOP)?",
      url: "https://www.geeksforgeeks.org/benefits-of-object-oriented-programming-oop/",
    },
    {
      id: 3,
      title: "How to use Object-Oriented Programming (OOP) in Python",
      url: "https://realpython.com/python3-object-oriented-programming/",
    },
    {
      id: 4,
      title: "Object-Oriented Programming (OOP) in Java",
      url: "https://www.w3schools.com/java/java_oop.asp",
    },
    {
      id: 5,
      title: "Understanding the principles of Object-Oriented Programming (OOP)",
      url: "https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Object Oriented Programming</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/functions-and-modules-265"
          nextTo="/roadmaps/ml/file-handling-267"
        />
        <hr />

        <h2>Object Oriented Programming (OOP)</h2>
        <p>
        Object-oriented Programming, often referred to as OOP, is a programming paradigm that uses "objects" – data structures consisting of data fields and methods together with their interactions. It's like a blueprint that we can use to create specific interactions for our programs. <br /> <br />
        We use OOP in programming because it makes our code more modular, easier to understand, maintain, and debug. It allows us to create more flexible and dynamic programs. With OOP, we can create reusable pieces of code, making the development process more efficient and manageable.

        </p>

        <TopicVideoPlayer
          videoTitle="What is Object-Oriented Programming (OOP)?"
          videoSrc="https://www.youtube.com/embed/SS-9y0H3Si8"
        />
        <TopicVideoPlayer
          videoTitle="Why use Object-Oriented Programming (OOP)?"
          videoSrc="https://www.youtube.com/embed/lbXsrHGhBAU"
        />
        <TopicVideoPlayer
          videoTitle="Object-Oriented Programming (OOP) in Python"
          videoSrc="https://www.youtube.com/embed/JeznW_7DlB0"
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
          topicName= "ObjectorientedProgramming266"
          topicId={266}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/functions-and-modules-265"
          nextTo="/roadmaps/ml/file-handling-267"
        />
      </div>
    </div>
  )
}

export default ObjectorientedProgramming266;