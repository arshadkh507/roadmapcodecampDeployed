import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Output497 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Standard Input and Output in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-standard-input-and-output-in-programming/",
    },
    {
      id: 2,
      title: "Standard I/O Explained: A Beginner's Guide",
      url: "https://www.geeksforgeeks.org/standard-input-output-streams-in-c/",
    },
    {
      id: 3,
      title: "JavaScript I/O: Console and Streams",
      url: "https://nodejs.dev/learn/nodejs-console",
    },
    {
      id: 4,
      title: "Mastering Python I/O: Reading and Writing to Files",
      url: "https://realpython.com/read-write-files-python/",
    },
    {
      id: 5,
      title: "C# Standard Input and Output: Working with Console",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/main-and-command-args/",
    },
    {
      id: 6,
      title: "Rust Standard I/O: Reading and Writing Data",
      url: "https://doc.rust-lang.org/book/ch12-00-an-io-project.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Output</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/modular-programming-496"
          nextTo="/roadmaps/cs/reading-and-writing-files-498"
        />
        <hr />

        <h2>Output</h2>
        <p>
        In programming, output is the way a program communicates the results of its computations. This could be anything from printing a message on the console, writing data to a file, or sending information over the network.  <br /> <br />
        There are various ways to get output in programming. For instance, in a console application, we often use standard output (stdout) to print messages to the console. In a web application, we might send output to the client's browser. In a file system, we might write output to a file. <br /> <br />
        Output is crucial in programming because it allows us to observe the internal state of our program, which is essential for understanding how our code is functioning and for debugging. Without output, we would be programming in the dark!

        </p>

       
<TopicVideoPlayer
  videoTitle="Python Input/Output | Learn Coding"
  videoSrc="https://www.youtube.com/embed/_ErI8jHl7nY"
/>
<TopicVideoPlayer
  videoTitle="A simple explanation of stdin, stdout and stderr"
  videoSrc="https://www.youtube.com/embed/fVwuiuirzmc"
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
          topicName= "Output497"
          topicId={497}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/modular-programming-496"
          nextTo="/roadmaps/cs/reading-and-writing-files-498"
        />
      </div>
    </div>
  )
}

export default Output497;