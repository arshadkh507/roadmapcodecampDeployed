import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ControlStructures492 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Control Structures in Programming",
      url: "https://www.freecodecamp.org/news/understanding-control-structures-in-programming/",
    },
    {
      id: 2,
      title: "Control Structures Explained: A Beginner's Guide",
      url: "https://www.geeksforgeeks.org/control-structures/",
    },
    {
      id: 3,
      title: "Control Flow in JavaScript: An Overview",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
    },
    {
      id: 4,
      title: "Mastering Python Control Structures",
      url: "https://realpython.com/control-flow-ifs-loops-and-logic/",
    },
    {
      id: 5,
      title: "Control Structures in C#: Understanding Conditional Statements",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/if-else",
    },
    {
      id: 6,
      title: "Rust Control Flow: From Basics to Advanced",
      url: "https://doc.rust-lang.org/book/ch03-05-control-flow.html",
    },
    // Add more items as needed...
  ];
  
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Control Structures</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/operators-491"
          nextTo="/roadmaps/cs/basic-syntax-493"
        />
        <hr />

        <h2>ControlStructures492</h2>
        <p>
        Welcome to the world of Control Structures in programming! We're currently working on this section to provide you with the best learning experience. Please check back soon for some exciting updates. Happy coding!

        </p>

      

<TopicVideoPlayer
  videoTitle="Introduction to Programming and Computer Science - Full Course"
  videoSrc="https://www.youtube.com/embed/zOjov-2OZ0E"
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
          topicName= "ControlStructures492"
          topicId={492}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/operators-491"
          nextTo="/roadmaps/cs/basic-syntax-493"
        />
      </div>
    </div>
  )
}

export default ControlStructures492;