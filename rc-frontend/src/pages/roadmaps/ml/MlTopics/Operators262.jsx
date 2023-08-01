import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Operators262 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What are operators in programming?",
      url: "https://www.geeksforgeeks.org/operators-in-c-c/",
    },
    {
      id: 2,
      title: "Why use operators in programming?",
      url: "https://www.tutorialspoint.com/computer_programming/computer_programming_operators.htm",
    },
    {
      id: 3,
      title: "How to use operators in programming?",
      url: "https://www.javatpoint.com/operators-in-java",
    },
    {
      id: 4,
      title: "Types of operators in programming",
      url: "https://www.w3schools.com/js/js_operators.asp",
    },
    {
      id: 5,
      title: "Understanding operators in programming",
      url: "https://www.codecademy.com/learn/learn-python-3/modules/learn-python3-syntax/cheatsheet",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Operators</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/expressions-261"
          nextTo="/roadmaps/ml/control-flow-structures-263"
        />
        <hr />

        <h2>Operators</h2>
        <p>
        Operators are fundamental building blocks in programming. They allow us to perform different types of operations on our data. 
        There are various types of operators such as arithmetic operators for mathematical operations, comparison operators for comparing values, 
        logical operators for logical operations, and so on. 
        We use operators to manipulate data and control the flow of our programs. They help us create more complex and dynamic programs. 
        
        </p>

        <TopicVideoPlayer
          videoTitle="Operators in Python"
          videoSrc="https://www.youtube.com/embed/v5MR5JnKcZI"
        />

<TopicVideoPlayer
          videoTitle="Operators in C language in hindi | what is operator?"
          videoSrc="https://www.youtube.com/embed/r-M3ESr8WLY"
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
          topicName= "Operators262"
          topicId={262}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/expressions-261"
          nextTo="/roadmaps/ml/control-flow-structures-263"
        />
      </div>
    </div>
  )
}

export default Operators262;