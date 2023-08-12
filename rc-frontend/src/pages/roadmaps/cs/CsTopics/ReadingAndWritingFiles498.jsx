import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ReadingAndWritingFiles498 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Reading and Writing Files in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-reading-and-writing-files-in-programming/",
    },
    {
      id: 2,
      title: "Reading and Writing Files in C/C++",
      url: "https://www.geeksforgeeks.org/file-handling-c-classes/",
    },
    {
      id: 3,
      title: "Working with Files in JavaScript",
      url: "https://nodejs.dev/learn/reading-files-with-nodejs",
    },
    {
      id: 4,
      title: "Mastering File I/O in Python: Reading and Writing Files",
      url: "https://realpython.com/read-write-files-python/",
    },
    {
      id: 5,
      title: "File I/O in C#: Reading and Writing Files",
      url: "https://docs.microsoft.com/en-us/dotnet/standard/io/how-to-read-text-from-a-file",
    },
    {
      id: 6,
      title: "Rust File I/O: Working with Files and Streams",
      url: "https://doc.rust-lang.org/book/ch12-00-an-io-project.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Reading And Writing Files</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/output-497"
          nextTo="/roadmaps/cs/command-line-arguments-499"
        />
        <hr />

        <h2>Reading And Writing Files</h2>
        <p>
        Imagine you're a librarian, and your job is to store and retrieve books. Reading and writing files in programming is quite similar. It's all about storing data (writing) in a file and then retrieving it (reading) when needed.  <br /> <br />
        Now, why is this important? Well, think about it. Without the ability to read and write files, our programs would be pretty forgetful, wouldn't they? They wouldn't be able to remember anything from one run to the next. But thanks to file I/O (Input/Output), our programs can have a long-term memory. They can store information, like high scores in a game, user preferences in an app, or transaction data in a database, and retrieve it later. So, in essence, reading and writing files is what gives our programs the ability to remember.

        </p>

        <TopicVideoPlayer
  videoTitle="File I/O in C++: Reading and Writing Files "
  videoSrc="https://www.youtube.com/embed/LS1zjr1wog4"
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
          topicName= "ReadingAndWritingFiles498"
          topicId={498}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/output-497"
          nextTo="/roadmaps/cs/command-line-arguments-499"
        />
      </div>
    </div>
  )
}

export default ReadingAndWritingFiles498;