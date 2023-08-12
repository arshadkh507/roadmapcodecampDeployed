import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ErrorHandlingAndReporting500 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Error Handling and Reporting in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-error-handling-and-reporting-in-programming/",
    },
    {
      id: 2,
      title: "Error Handling in C/C++",
      url: "https://www.geeksforgeeks.org/error-handling-c/",
    },
    {
      id: 3,
      title: "Error Handling in JavaScript: Try, Catch, and Throw",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#try...catch_statement",
    },
    {
      id: 4,
      title: "Mastering Error Handling in Python: Exceptions and Handling Errors",
      url: "https://realpython.com/python-exceptions/",
    },
    {
      id: 5,
      title: "Error Handling in C#: Dealing with Exceptions",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/exceptions/",
    },
    {
      id: 6,
      title: "Rust Error Handling: Managing Errors and Failures",
      url: "https://doc.rust-lang.org/book/ch09-00-error-handling.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Error Handling And Reporting</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/command-line-arguments-499"
          nextTo="/roadmaps/cs/object-oriented-programming-501"
        />
        <hr />

        <h2>Error Handling And Reporting</h2>
        <p>
        Error Handling and Reporting are crucial aspects of programming. They help us manage the unexpected - the anomalies that can occur while our code is running. Imagine you're a detective, and your code is a case you're trying to crack. Error handling is your way of anticipating where things might go wrong, and setting up measures to handle those situations. Reporting, on the other hand, is your communication link. It's how your code tells you where and why it stumbled. Together, they ensure that our programs are more robust and maintainable, and they help us diagnose and fix issues more efficiently. So, while we might not enjoy dealing with errors, they're an essential part of our journey as programmers.

        </p>

    
<TopicVideoPlayer
  videoTitle="Errors & Exception in Java"
  videoSrc="https://www.youtube.com/embed/ZovnoASlIaE"
/>
<TopicVideoPlayer
  videoTitle="Difference Between Exception and Error | Learn Coding"
  videoSrc="https://www.youtube.com/embed/_M7pUHfpaxk"
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
          topicName= "ErrorHandlingAndReporting500"
          topicId={500}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/command-line-arguments-499"
          nextTo="/roadmaps/cs/object-oriented-programming-501"
        />
      </div>
    </div>
  )
}

export default ErrorHandlingAndReporting500;