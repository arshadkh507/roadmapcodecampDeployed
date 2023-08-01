import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const FileHandling267 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is File Handling in Programming?",
      url: "https://www.geeksforgeeks.org/file-handling-in-java-using-filewriter-and-filereader/",
    },
    {
      id: 2,
      title: "Why Use File Handling in Programming?",
      url: "https://www.tutorialspoint.com/why-do-we-need-file-handling-in-cplusplus",
    },
    {
      id: 3,
      title: "Introduction to File Handling",
      url: "https://www.javatpoint.com/file-handling-in-c",
    },
    {
      id: 4,
      title: "File Handling in Python",
      url: "https://www.w3schools.com/python/python_file_handling.asp",
    },
    {
      id: 5,
      title: "File Handling in JavaScript",
      url: "https://www.geeksforgeeks.org/javascript-file-handling/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>File Handling</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/object-oriented-programming-266"
          nextTo="/roadmaps/ml/exception-handling-268"
        />
        <hr />

        <h2>File Handling</h2>
        <p>
        File handling, in the realm of programming, is a fundamental concept that deals with the creation, reading, writing, and deletion of files. It's like a librarian organizing books in a library. Without file handling, our programs would have a hard time storing and retrieving data. It's crucial for tasks such as saving user settings, recording logs, or storing data for long-term usage. So, in essence, we need file handling to bring persistence to our data in programming. Stay tuned as we delve deeper into this topic!

        </p>

        <TopicVideoPlayer
          videoTitle="What is File Handling?"
          videoSrc="https://www.youtube.com/embed/aequTxAvQq4"
        />
        <TopicVideoPlayer
          videoTitle="File Handling in Python"
          videoSrc="https://www.youtube.com/embed/N8X-fhGLkoM"
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
          topicName= "FileHandling267"
          topicId={267}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/object-oriented-programming-266"
          nextTo="/roadmaps/ml/exception-handling-268"
        />
      </div>
    </div>
  )
}

export default FileHandling267;