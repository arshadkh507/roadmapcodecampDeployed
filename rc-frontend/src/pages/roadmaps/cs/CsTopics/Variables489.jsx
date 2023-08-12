import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Variables489 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Variables in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-variables-in-programming/",
    },
    {
      id: 2,
      title: "Variables and Data Types: A Beginner's Guide",
      url: "https://www.geeksforgeeks.org/variables-data-types-in-c/",
    },
    {
      id: 3,
      title: "Understanding Variables in JavaScript",
      url: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-variables",
    },
    {
      id: 4,
      title: "Variables and Memory in Python",
      url: "https://realpython.com/python-variables/",
    },
    {
      id: 5,
      title: "Mastering Variables and Scopes in C#",
      url: "https://www.udemy.com/course/csharp-tutorial-for-beginners/",
    },
    {
      id: 6,
      title: "Variables in Rust: An In-Depth Exploration",
      url: "https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Variables</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/programming-fundamentals-488"
          nextTo="/roadmaps/cs/data-types-490"
        />
        <hr />

        <h2>Variables</h2>
        <p>
        In the world of programming, a variable is like a container or a storage box. It holds data that we can use and manipulate as we write our code. We use variables to store, retrieve, and use data. Without variables, programming would be a lot more complicated - imagine having to manually input every piece of data every time we need it! That's why variables are so important. They make our code cleaner, more efficient, and easier to understand.

        </p>

        <TopicVideoPlayer
  videoTitle="What is a Variable in Programming (Hindi / Urdu)"
  videoSrc="https://www.youtube.com/embed/tmgWKYBYf-o"
/>

<TopicVideoPlayer
  videoTitle="Introduction to Programming and Computer Science - Full Course"
  videoSrc="https://www.youtube.com/embed/zOjov-2OZ0E"
/>

<TopicVideoPlayer
  videoTitle="Variables in Programming: A Comprehensive Guide"
  videoSrc="https://www.youtube.com/embed/7UGnp5HeMhE"
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
          topicName= "Variables489"
          topicId={489}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/programming-fundamentals-488"
          nextTo="/roadmaps/cs/data-types-490"
        />
      </div>
    </div>
  )
}

export default Variables489;