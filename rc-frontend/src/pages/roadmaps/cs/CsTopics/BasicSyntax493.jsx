import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const BasicSyntax493 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Basic Syntax in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-basic-syntax-in-programming/",
    },
    {
      id: 2,
      title: "Basic Syntax Explained: A Beginner's Guide",
      url: "https://www.geeksforgeeks.org/basics-of-c-programming/",
    },
    {
      id: 3,
      title: "JavaScript Basic Syntax: An Overview",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Basics",
    },
    {
      id: 4,
      title: "Mastering Python Basics: Syntax and Structure",
      url: "https://realpython.com/python-basics/",
    },
    {
      id: 5,
      title: "C# Basic Syntax: A Comprehensive Reference",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/program-structure-and-code-conventions",
    },
    {
      id: 6,
      title: "Rust Basic Syntax: Getting Started with Rust Programming",
      url: "https://doc.rust-lang.org/book/ch01-02-hello-world.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Basic Syntax</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/control-structures-492"
          nextTo="/roadmaps/cs/functions-494"
        />
        <hr />

        <h2>Basic Syntax</h2>
        <p>
        Welcome to the captivating realm of Basic Syntax in programming languages! Basic syntax is the set of rules that define how programs written in a language are structured. It's like the grammar of a programming language, dictating how statements should be written and interpreted. Understanding basic syntax is crucial because it's the foundation of how we communicate with computers. Without it, our instructions would be gibberish to them. We're currently enhancing this section to make your learning journey even more enjoyable. So, stay tuned for some thrilling updates. Keep coding and exploring!


        </p>

        <TopicVideoPlayer
  videoTitle="What is Syntax in Computer Programming? | Basic Syntax for Beginners "
  videoSrc="https://www.youtube.com/embed/YFB0lE7nXZE"
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
          topicName= "BasicSyntax493"
          topicId={493}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/control-structures-492"
          nextTo="/roadmaps/cs/functions-494"
        />
      </div>
    </div>
  )
}

export default BasicSyntax493;