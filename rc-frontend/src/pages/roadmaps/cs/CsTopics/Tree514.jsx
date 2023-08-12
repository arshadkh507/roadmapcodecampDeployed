import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Tree514 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Trees in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-trees-in-programming/",
    },
    {
      id: 2,
      title: "Trees in C++",
      url: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
    },
    {
      id: 3,
      title: "Working with Trees in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals",
    },
    {
      id: 4,
      title: "Mastering Trees in Python",
      url: "https://realpython.com/binary-search-trees-python/",
    },
    {
      id: 5,
      title: "Trees in C#: Implementing Binary Trees",
      url: "https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.tree-1?view=net-5.0",
    },
    {
      id: 6,
      title: "Rust Trees: Implementing a Basic Binary Tree",
      url: "https://doc.rust-lang.org/book/ch15-01-box.html",
    },
    // Add more items as needed...
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Tree</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/graph-513"
          nextTo="/roadmaps/cs/binary-tree-515"
        />
        <hr />

        <h2>Tree</h2>
        <p>
        A tree is like a hierarchical structure resembling a family tree, where each member can have child members, forming branches that spread out. In programming, a tree is a hierarchical data structure made up of nodes connected by edges. The topmost node is called the root, and each node can have child nodes, forming subtrees. Unlike linear data structures like arrays and linked lists, trees have a more complex branching structure, making them suitable for representing hierarchical relationships. Trees are used for various applications, such as organizing hierarchical data, implementing file systems, and solving problems like binary search in efficient ways.
        </p>

        <TopicVideoPlayer
  videoTitle="Introduction to Trees"
  videoSrc="https://www.youtube.com/embed/oI0QhFzBSRo"
/>
<TopicVideoPlayer
  videoTitle="1. Introduction to C++ | Data Structures and Algorithms | College Placement Course"
  videoSrc="https://www.youtube.com/embed/z9bZufPHFLU"
/>
<TopicVideoPlayer

  videoTitle="5.1 Tree in Data Structure | Introduction to Trees"
  videoSrc="https://www.youtube.com/embed/YAdLFsTG70w"
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
          topicName= "Tree514"
          topicId={514}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/graph-513"
          nextTo="/roadmaps/cs/binary-tree-515"
        />
      </div>
    </div>
  )
}

export default Tree514;