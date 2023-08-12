import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ArraysAndLists495 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Arrays and Lists in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-arrays-and-lists-in-programming/",
    },
    {
      id: 2,
      title: "Arrays Explained: A Beginner's Guide",
      url: "https://www.geeksforgeeks.org/arrays-in-c-cpp/",
    },
    {
      id: 3,
      title: "JavaScript Arrays and Lists: An Overview",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections",
    },
    {
      id: 4,
      title: "Mastering Python Lists and Arrays: Working with Collections",
      url: "https://realpython.com/python-lists-tuples/",
    },
    {
      id: 5,
      title: "C# Arrays and Lists: Managing Collection Data",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/",
    },
    {
      id: 6,
      title: "Rust Arrays and Lists: Handling Sequential Data",
      url: "https://doc.rust-lang.org/book/ch08-01-vectors.html",
    },
    // Add more items as needed...
  ];
  
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Arrays And Lists</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/functions-494"
          nextTo="/roadmaps/cs/modular-programming-496"
        />
        <hr />

        <h2>Arrays And Lists</h2>
        <p>
        Arrays and Lists are fundamental concepts in programming. They are both types of data structures that allow us to store, retrieve, and manipulate collections of data. Arrays are a fixed-size data structure while lists are dynamic, meaning they can grow and shrink as needed.
<br /><br />
        We use arrays and lists because they allow us to work with multiple related data points using a single variable. This makes our code cleaner, more efficient, and easier to understand. For example, if you wanted to store the names of all students in a class, instead of creating a separate variable for each student, you could simply create an array or a list.
        <br /><br />

        In the real world, arrays and lists are used in almost every software application. For instance, a music app might use an array to store the songs in a playlist. A weather app might use a list to store hourly temperature data. The possibilities are endless!

        </p>

        <TopicVideoPlayer
  videoTitle="List vs Array : Python tutorial 90"
  videoSrc="https://www.youtube.com/embed/Z5bE95OPzEI"
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
          topicName= "ArraysAndLists495"
          topicId={495}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/functions-494"
          nextTo="/roadmaps/cs/modular-programming-496"
        />
      </div>
    </div>
  )
}

export default ArraysAndLists495;