import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Heap511 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Heaps in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-heaps-in-programming/",
    },
    {
      id: 2,
      title: "Heaps in C++",
      url: "https://www.geeksforgeeks.org/heap-data-structure/",
    },
    {
      id: 3,
      title: "Working with Heaps in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals",
    },
    {
      id: 4,
      title: "Mastering Heaps in Python",
      url: "https://realpython.com/linked-lists-python/",
    },
    {
      id: 5,
      title: "Heaps in C#: Implementing Heap Data Structure",
      url: "https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.heap-1?view=net-5.0",
    },
    {
      id: 6,
      title: "Rust Heaps: Implementing a Binary Heap",
      url: "https://doc.rust-lang.org/book/ch15-01-box.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Heap</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/queue-510"
          nextTo="/roadmaps/cs/trees-512"
        />
        <hr />

        <h2>Heap</h2>
        <p>
        A heap is like a specialized tree structure where the value of each node is greater than or equal to (in a max heap) or less than or equal to (in a min heap) the values of its children. In programming, a heap is a binary tree-based data structure that satisfies the heap property. A max heap ensures that the value of each node is greater than or equal to the values of its children, while a min heap ensures the opposite. Heaps are commonly used for efficient priority queue implementations, where elements with higher or lower priorities can be extracted and processed quickly. They are also used in various algorithms, such as heap sort and graph algorithms like Dijkstra's algorithm.
        </p>

        <TopicVideoPlayer
  videoTitle="12. Stack & Heap | C++ Placement Course"
  videoSrc="https://www.youtube.com/embed/bbym08gSWvQ"
/>
<TopicVideoPlayer
  videoTitle="1. Introduction to C++ | Data Structures and Algorithms | College Placement Course"
  videoSrc="https://www.youtube.com/embed/z9bZufPHFLU"
/>
<TopicVideoPlayer

  videoTitle="Heaps in 3 minutes — Intro"
  videoSrc="https://www.youtube.com/embed/0wPlzMU-k00"
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
          topicName= "Heap511"
          topicId={511}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/queue-510"
          nextTo="/roadmaps/cs/trees-512"
        />
      </div>
    </div>
  )
}

export default Heap511;