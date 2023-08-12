import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const BinarySearchTree516 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Binary Search Trees in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-binary-search-trees-in-programming/",
    },
    {
      id: 2,
      title: "Binary Search Trees in C++",
      url: "https://www.geeksforgeeks.org/binary-search-tree-data-structure/",
    },
    {
      id: 3,
      title: "Working with Binary Search Trees in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals",
    },
    {
      id: 4,
      title: "Mastering Binary Search Trees in Python",
      url: "https://realpython.com/binary-search-trees-python/",
    },
    {
      id: 5,
      title: "Binary Search Trees in C#: Implementing Binary Search Tree Data Structure",
      url: "https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.sorteddictionary-2?view=net-5.0",
    },
    {
      id: 6,
      title: "Rust Binary Search Trees: Implementing a Basic Binary Search Tree",
      url: "https://doc.rust-lang.org/book/ch15-01-box.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Binary Search Tree</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/binary-tree-515"
          nextTo="/roadmaps/cs/full-binary-tree-517"
        />
        <hr />

        <h2>Binary Search Tree</h2>
        <p>
        Binary Search Trees (BSTs) are a type of data structure that store "items" (such as numbers, names etc.) in memory. They allow fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).
<br /><br />
        BSTs are called binary trees because each tree node has a maximum of two children. It is called a search tree because it can be used to search for the presence of a number in O(log(n)) time. The 'tree' in BST is used because the data structure is visualized as a tree.
        <br /><br />


        BSTs have an average time complexity of O(log n) for search, insert, and delete operations which makes them very efficient for performing operations on a large amount of data. They are used in many areas of computer science, including memory management, databases, and router algorithms.
        <br /><br />


        So, if you're dealing with a large amount of data and need to perform operations like search, insert, or delete, a Binary Search Tree could be a good choice because of its efficiency. Stay tuned for more updates on this topic!

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

  videoTitle="5.10 Binary Search Trees (BST) - Insertion and Deletion | DSA Full Course"
  videoSrc="https://www.youtube.com/embed/cySVml6e_Fc"
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
          topicName= "BinarySearchTree516"
          topicId={516}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/binary-tree-515"
          nextTo="/roadmaps/cs/full-binary-tree-517"
        />
      </div>
    </div>
  )
}

export default BinarySearchTree516;