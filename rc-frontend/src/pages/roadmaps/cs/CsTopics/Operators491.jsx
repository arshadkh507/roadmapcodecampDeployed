import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Operators491 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Operators in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-operators-in-programming/",
    },
    {
      id: 2,
      title: "Operators Explained: A Beginner's Guide",
      url: "https://www.geeksforgeeks.org/operators-in-c/",
    },
    {
      id: 3,
      title: "JavaScript Operators: An Overview",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators",
    },
    {
      id: 4,
      title: "Mastering Python Operators and Expressions",
      url: "https://realpython.com/python-operators-expressions/",
    },
    {
      id: 5,
      title: "Operators in C#: Understanding How They Work",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/",
    },
    {
      id: 6,
      title: "Rust Operators: A Complete Guide",
      url: "https://doc.rust-lang.org/book/ch03-03-how-functions-work.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Operators</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/data-types-490"
          nextTo="/roadmaps/cs/control-structures-492"
        />
        <hr />

        <h2>Operators491</h2>
        <p>
        Operators are the building blocks of any programming language. They're like the verbs of a language, performing actions on our data. They can do everything from basic arithmetic to complex logical comparisons. As we develop this section, we'll dive into the different types of operators and how to use them effectively in your code. Stay tuned!

        </p>

        <TopicVideoPlayer
  videoTitle="Operators Used In Programming"
  videoSrc="https://www.youtube.com/embed/PaHpU7-BNaU"
/>

<TopicVideoPlayer
  videoTitle="Operators in C language in hindi | what is operator? Discuss it's types in c programming"
  videoSrc="https://www.youtube.com/embed/r-M3ESr8WLY"
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
          topicName= "Operators491"
          topicId={491}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/data-types-490"
          nextTo="/roadmaps/cs/control-structures-492"
        />
      </div>
    </div>
  )
}

export default Operators491;