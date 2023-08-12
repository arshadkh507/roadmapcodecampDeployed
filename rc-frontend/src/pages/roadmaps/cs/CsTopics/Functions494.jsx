import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Functions494 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Functions in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-functions-in-programming/",
    },
    {
      id: 2,
      title: "Functions Explained: A Beginner's Guide",
      url: "https://www.geeksforgeeks.org/functions-in-c/",
    },
    {
      id: 3,
      title: "JavaScript Functions: An Overview",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
    },
    {
      id: 4,
      title: "Mastering Python Functions: Building Reusable Code",
      url: "https://realpython.com/defining-your-own-python-function/",
    },
    {
      id: 5,
      title: "C# Functions: Understanding Methods and Parameters",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods",
    },
    {
      id: 6,
      title: "Rust Functions: From Basics to Advanced",
      url: "https://doc.rust-lang.org/book/ch03-03-how-functions-work.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Functions</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/basic-syntax-493"
          nextTo="/roadmaps/cs/arrays-and-lists-495"
        />
        <hr />

        <h2>Functions</h2>
        <p>
        Functions are the building blocks in programming. They are reusable pieces of code that perform a specific task. We use functions when we want to execute the same piece of code multiple times, or when we want to organize our code into manageable chunks. The benefits of using functions include code reusability, improved readability, and easier debugging. Stay tuned as we dive deeper into the world of functions!

        </p>

        <TopicVideoPlayer
  videoTitle="10 Design Patterns Explained in 10 Minutes"
  videoSrc="https://www.youtube.com/embed/tv-_1er1mWI"
/>
<TopicVideoPlayer
  videoTitle="Writing Reusable Code with Functions: Our First Function!"
  videoSrc="https://www.youtube.com/embed/tLFRrGpO0Nc"
/>

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
          topicName= "Functions494"
          topicId={494}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/basic-syntax-493"
          nextTo="/roadmaps/cs/arrays-and-lists-495"
        />
      </div>
    </div>
  )
}

export default Functions494;