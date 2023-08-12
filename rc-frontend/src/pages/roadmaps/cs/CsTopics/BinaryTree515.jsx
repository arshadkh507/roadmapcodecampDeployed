import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const BinaryTree515 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Binary Trees in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-binary-trees-in-programming/",
    },
    {
      id: 2,
      title: "Binary Trees in C++",
      url: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
    },
    {
      id: 3,
      title: "Working with Binary Trees in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals",
    },
    {
      id: 4,
      title: "Mastering Binary Trees in Python",
      url: "https://realpython.com/binary-search-trees-python/",
    },
    {
      id: 5,
      title: "Binary Trees in C#: Implementing Binary Tree Data Structure",
      url: "https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.tree-1?view=net-5.0",
    },
    {
      id: 6,
      title: "Rust Binary Trees: Implementing a Basic Binary Tree",
      url: "https://doc.rust-lang.org/book/ch15-01-box.html",
    },
    // Add more items as needed...
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Binary Tree</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/tree-514"
          nextTo="/roadmaps/cs/binary-search-tree-516"
        />
        <hr />

        <h2>Binary Tree</h2>
        <p>
        A binary tree is a special type of data structure that has two children, each of which is a binary tree itself. It's like a family tree, but each parent can only have two children at most. This structure is incredibly useful in many areas of computer science, including sorting and searching algorithms, because it allows us to divide a problem into smaller, more manageable parts.
        <br /><br />
        Imagine you're looking for a book in a library. You could go through each book one by one, but that would take a long time. Instead, you'd probably divide the library into sections, then divide those sections into shelves, and so on. This is essentially how a binary tree works! By dividing and conquering, we can find solutions much more quickly.
        <br /><br />
        
        So, why do we need binary trees? Well, they're a powerful tool for solving complex problems. They can help us organize data efficiently, making our code faster and more effective. Plus, once you've mastered binary trees, you'll have a solid foundation for understanding more advanced data structures and algorithms. So, let's dive in and learn more about binary trees!

        </p>

     
        <TopicVideoPlayer
  videoTitle="Binary Tree in Data Structures | All about Binary Tree | DSA Course"
  videoSrc="https://www.youtube.com/embed/-DzowlcaUmE"
/>
<TopicVideoPlayer
  videoTitle="1. Introduction to C++ | Data Structures and Algorithms | College Placement Course"
  videoSrc="https://www.youtube.com/embed/z9bZufPHFLU"
/>
<TopicVideoPlayer

  videoTitle="5.3 Binary Tree Implementation in C Program | Data Structures Tutorials"
  videoSrc="https://www.youtube.com/embed/6vt3PFRC11E"
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
          topicName= "BinaryTree515"
          topicId={515}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/tree-514"
          nextTo="/roadmaps/cs/binary-search-tree-516"
        />
      </div>
    </div>
  )
}

export default BinaryTree515;