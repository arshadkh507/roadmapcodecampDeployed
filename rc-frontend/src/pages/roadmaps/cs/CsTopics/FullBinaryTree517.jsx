import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const FullBinaryTree517 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Full Binary Trees in Programming",
      url: "https://www.geeksforgeeks.org/full-binary-tree/",
    },
    {
      id: 2,
      title: "Full Binary Trees in Data Structures",
      url: "https://www.tutorialspoint.com/data_structures_algorithms/full_binary_tree.htm",
    },
    {
      id: 3,
      title: "Understanding Full Binary Trees",
      url: "https://www.interviewbit.com/tutorial/full-binary-tree/",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Full Binary Tree</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/binary-search-tree-516"
          nextTo="/roadmaps/cs/complete-binary-tree-518"
        />
        <hr />

        <h2>Full Binary Tree</h2>
        <p>
        Full Binary Trees are a fascinating concept in computer science. They are a type of binary tree where every node has either zero or two children. In other words, each parent node has two children, unless it's a leaf node. This structure has a beautiful symmetry that can be quite pleasing to the eye.
<br /><br />
        But Full Binary Trees are not just about aesthetics. They are incredibly useful in many areas of computer science and programming. For instance, they are used in creating efficient binary search trees and heaps, which are fundamental data structures in computer science. They also play a crucial role in certain algorithms for sorting and searching.
        <br /><br />

        Imagine you're organizing a tournament where each match eliminates one player. A Full Binary Tree would be a perfect way to represent this! Each node represents a match, and the children nodes represent the players or subsequent matches. The root node would be the final match, and the leaf nodes would be the initial players. This is just one of the many real-world examples where Full Binary Trees come into play.
        <br /><br />

        So, whether you're a computer science student, a coding enthusiast, or a professional developer, understanding Full Binary Trees can be a valuable addition to your knowledge toolkit. Stay tuned as we dive deeper into this topic!

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

  videoTitle="L-3.7: Introduction to Trees (Binary Tree, Almost Complete Binary Tree, Full BT, Complete BT, BST)"
  videoSrc="https://www.youtube.com/embed/_JuQ5ayPmc"
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
          topicName= "FullBinaryTree517"
          topicId={517}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/binary-search-tree-516"
          nextTo="/roadmaps/cs/complete-binary-tree-518"
        />
      </div>
    </div>
  )
}

export default FullBinaryTree517;