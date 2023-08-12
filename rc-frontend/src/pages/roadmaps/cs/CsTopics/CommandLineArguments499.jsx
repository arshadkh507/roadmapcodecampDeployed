import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const CommandLineArguments499 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Command Line Arguments in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-command-line-arguments-in-programming/",
    },
    {
      id: 2,
      title: "Command Line Arguments in C/C++",
      url: "https://www.geeksforgeeks.org/command-line-arguments-in-c-cpp/",
    },
    {
      id: 3,
      title: "Working with Command Line Arguments in JavaScript",
      url: "https://nodejs.dev/learn/nodejs-command-line-arguments",
    },
    {
      id: 4,
      title: "Mastering Command Line Arguments in Python",
      url: "https://realpython.com/python-command-line-arguments/",
    },
    {
      id: 5,
      title: "Command Line Arguments in C#: Parsing Arguments from the Command Line",
      url: "https://docs.microsoft.com/en-us/dotnet/core/extensions/command-line-args",
    },
    {
      id: 6,
      title: "Rust Command Line Arguments: Accepting User Input",
      url: "https://doc.rust-lang.org/book/ch12-01-accepting-command-line",
  }
  ]
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Command Line Arguments</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/reading-and-writing-files-498"
          nextTo="/roadmaps/cs/error-handling-and-reporting-500"
        />
        <hr />

        <h2>Command Line Arguments</h2>
        <p>
        Command Line Arguments are like secret whispers to your program. They are the little bits of information that you can pass to your program when you start it up. They can help customize the behavior of your program without changing the code itself. It's like giving your program a little nudge in the right direction.

        </p>

      
<TopicVideoPlayer
  videoTitle="Command Line Arguments | C Programming Tutorial"
  videoSrc="https://www.youtube.com/embed/wa2AfzyOff0"
/>

<TopicVideoPlayer
  videoTitle="Command Line Arguments in Java"
  videoSrc="https://www.youtube.com/embed/Up17-azeuyE"
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
          topicName= "CommandLineArguments499"
          topicId={499}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/reading-and-writing-files-498"
          nextTo="/roadmaps/cs/error-handling-and-reporting-500"
        />
      </div>
    </div>
  )
}

export default CommandLineArguments499;