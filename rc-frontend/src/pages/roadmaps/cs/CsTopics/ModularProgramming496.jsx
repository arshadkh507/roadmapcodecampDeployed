import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ModularProgramming496 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Modular Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-modular-programming/",
    },
    {
      id: 2,
      title: "Modular Programming Explained: A Beginner's Guide",
      url: "https://www.geeksforgeeks.org/modular-programming/",
    },
    {
      id: 3,
      title: "JavaScript Modular Programming: An Overview",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
    },
    {
      id: 4,
      title: "Mastering Python Modular Programming: Organizing Your Code",
      url: "https://realpython.com/python-modules-packages/",
    },
    {
      id: 5,
      title: "C# Modular Programming: Structuring Projects and Libraries",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/using-namespaces",
    },
    {
      id: 6,
      title: "Rust Modular Programming: Building Modular Applications",
      url: "https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html",
    },
    // Add more items as needed...
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Modular Programming</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/arrays-and-lists-495"
          nextTo="/roadmaps/cs/output-497"
        />
        <hr />

        <h2>ModularProgramming496</h2>
        <p>
        Modular programming, my friend, is like building with Lego blocks. Each module, or block, is a separate piece of code that does one thing really well. These modules can be easily plugged together to build complex applications. Just like how you can build a castle, a spaceship, or a city with the same Lego blocks, you can build different applications using the same modules.
        <br /><br />
        Now, why do we need it? Imagine if you had to build a Lego castle without any blocks, and you had to sculpt it out of a solid chunk of plastic. Sounds tough, right? That's what programming without modules is like. Modules make our code easier to write, easier to read, and easier to maintain. They also make it easy to share code between different projects. So, in essence, modular programming makes a programmer's life a whole lot easier!

        </p>

      
<TopicVideoPlayer
  videoTitle="Introduction To Structured Programming"
  videoSrc="https://www.youtube.com/embed/TmtyFcLWXwo"
/>

<TopicVideoPlayer
  videoTitle="2_4 Modularizing a program"
  videoSrc="https://www.youtube.com/embed/z8WnF6R9tVM"
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
          topicName= "ModularProgramming496"
          topicId={496}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/arrays-and-lists-495"
          nextTo="/roadmaps/cs/output-497"
        />
      </div>
    </div>
  )
}

export default ModularProgramming496;