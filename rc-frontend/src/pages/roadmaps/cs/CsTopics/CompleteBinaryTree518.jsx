import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const CompleteBinaryTree518 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Complete Binary Trees: Introduction",
      url: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
    },
    {
      id: 2,
      title: "Complete Binary Trees: Properties and Types",
      url: "https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm",
    },
    {
      id: 3,
      title: "Understanding Complete Binary Trees",
      url: "https://www.interviewbit.com/tutorial/complete-binary-tree/",
    },
    {
      id: 4,
      title: "Complete Binary Trees in Data Structures",
      url: "https://www.youtube.com/watch?v=vgZhrEs4tuk",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Complete Binary Tree</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/full-binary-tree-517"
          nextTo="/roadmaps/cs/balanced-tree-519"
        />
        <hr />

        <h2>Complete Binary Trees</h2>
        <p>
        Complete Binary Tree is currently under development. Please check back soon for updates.
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
          topicName= "CompleteBinaryTree518"
          topicId={518}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/full-binary-tree-517"
          nextTo="/roadmaps/cs/balanced-tree-519"
        />
      </div>
    </div>
  )
}

export default CompleteBinaryTree518;