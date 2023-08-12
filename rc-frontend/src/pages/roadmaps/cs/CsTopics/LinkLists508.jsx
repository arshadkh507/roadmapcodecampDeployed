import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const LinkLists508 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Linked Lists in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-linked-lists-in-programming/",
    },
    {
      id: 2,
      title: "Linked Lists in C++",
      url: "https://www.geeksforgeeks.org/data-structures/linked-list/",
    },
    {
      id: 3,
      title: "Working with Linked Lists in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals",
    },
    {
      id: 4,
      title: "Mastering Linked Lists in Python",
      url: "https://realpython.com/linked-lists-python/",
    },
    {
      id: 5,
      title: "Linked Lists in C#: Implementing Singly Linked Lists",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linked-lists/",
    },
    {
      id: 6,
      title: "Rust Linked Lists: Implementing a Basic Singly Linked List",
      url: "https://rust-unofficial.github.io/too-many-lists/",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Link Lists</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/array-507"
          nextTo="/roadmaps/cs/stack-509"
        />
        <hr />

        <h2>Link Lists</h2>
        <p>
        Linked Lists are like a magical chain of data in programming. Imagine you have a bunch of data elements, and you want to keep them together, but you also want the flexibility to easily insert or remove elements without disturbing the whole structure. That's where Linked Lists come in! They are a type of data structure where each element points to the next one, forming a chain. This makes them incredibly dynamic and efficient for certain types of operations. So, if you're dealing with data that needs this kind of flexibility and efficiency, Linked Lists are your best friend!

        </p>

        <TopicVideoPlayer
  videoTitle="Introduction to Linked List"
  videoSrc="https://www.youtube.com/embed/R9PTBwOzceo"
/>
<TopicVideoPlayer
  videoTitle="1. Introduction to C++ | Data Structures and Algorithms | College Placement Course"
  videoSrc="https://www.youtube.com/embed/z9bZufPHFLU"
/>
<TopicVideoPlayer

  videoTitle="Linked List Data Structure | JavaScript"
  videoSrc="https://www.youtube.com/embed/ZBdE8DElQQU"
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
          topicName= "LinkLists508"
          topicId={508}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/array-507"
          nextTo="/roadmaps/cs/stack-509"
        />
      </div>
    </div>
  )
}

export default LinkLists508;