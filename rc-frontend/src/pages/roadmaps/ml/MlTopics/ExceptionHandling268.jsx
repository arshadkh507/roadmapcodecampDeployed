import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ExceptionHandling268 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Exception Handling in Python - Python For Beginners",
      url: "https://www.pythonforbeginners.com/error-handling/exception-handling-in-python",
    },
    {
      id: 2,
      title: "Java Exception Handling - Geeks for Geeks",
      url: "https://www.geeksforgeeks.org/exceptions-in-java/",
    },
    {
      id: 3,
      title: "Exception Handling in C++ - Tutorialspoint",
      url: "https://www.tutorialspoint.com/cplusplus/cpp_exceptions_handling.htm",
    },
    {
      id: 4,
      title: "Understanding JavaScript Error and Exception Handling - DigitalOcean",
      url: "https://www.digitalocean.com/community/tutorials/understanding-error-and-exception-handling-in-javascript",
    },
    {
      id: 5,
      title: "Exception Handling in C# - Microsoft Docs",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/exceptions/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Exception Handling</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/file-handling-267"
          nextTo="/roadmaps/ml/calculus-269"
        />
        <hr />

        <h2>Exception Handling</h2>
        <p>
        Exception handling in programming is a process that responds to an error or exception that occurs during the execution of a program. It's like a safety net that catches coding missteps, unexpected inputs, or system issues, and then allows the program to continue running or terminate gracefully.
<br /><br />
        We use exception handling because it helps us to manage errors and exceptions effectively. It allows us to create a robust and fault-tolerant program. Without it, a single error or exception could cause the entire program to crash. But with it, we can catch these issues and decide how to proceed, ensuring a smoother user experience.

        </p>

        <TopicVideoPlayer
          videoTitle="Exception Handling in Python"
          videoSrc="https://www.youtube.com/embed/NIWwJbo-9_8"
        />
        <TopicVideoPlayer
          videoTitle="Exception Handling in Java"
          videoSrc="https://www.youtube.com/embed/3u1fu6f8Hto"
        />
        <TopicVideoPlayer
          videoTitle="Exception Handling in C++"
          videoSrc="https://www.youtube.com/embed/xnqTKD8uD64"
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
          topicName= "ExceptionHandling268"
          topicId={268}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/file-handling-267"
          nextTo="/roadmaps/ml/calculus-269"
        />
      </div>
    </div>
  )
}

export default ExceptionHandling268;