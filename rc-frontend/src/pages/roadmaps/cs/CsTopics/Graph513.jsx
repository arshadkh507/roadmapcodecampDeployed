import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Graph513 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Graphs in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-graphs-in-programming/",
    },
    {
      id: 2,
      title: "Graphs in C++",
      url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
    },
    {
      id: 3,
      title: "Working with Graphs in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals",
    },
    {
      id: 4,
      title: "Mastering Graphs in Python",
      url: "https://realpython.com/python-graphs-networkx/",
    },
    {
      id: 5,
      title: "Graphs in C#: Implementing Graph Data Structure",
      url: "https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2?view=net-5.0",
    },
    {
      id: 6,
      title: "Rust Graphs: Implementing an Adjacency List Graph",
      url: "https://docs.rs/petgraph/0.6.0/petgraph/adjacency_list/",
    },
    // Add more items as needed...
  ];
  
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Graph</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/trees-512"
          nextTo="/roadmaps/cs/tree-514"
        />
        <hr />

        <h2>Graph513</h2>
        <p>
        A graph is a fascinating data structure that you can think of as a network. It consists of nodes, often referred to as 'vertices', and the connections between them, known as 'edges'. This structure is incredibly versatile and is used in various areas of computing. For instance, social networks use graphs to represent connections between people, while Google uses a graph to represent web pages and their links for its search engine. So, whenever you see a problem involving complex relationships, chances are a graph can be used to solve it!

        </p>

        <TopicVideoPlayer
  videoTitle="Graph and its representations | GeeksforGeeks"
  videoSrc="https://www.youtube.com/embed/1n5XPFcvxds"
/>
<TopicVideoPlayer
  videoTitle="1. Introduction to C++ | Data Structures and Algorithms | College Placement Course"
  videoSrc="https://www.youtube.com/embed/z9bZufPHFLU"
/>
<TopicVideoPlayer

  videoTitle="Introduction to Graphs | Graph Data Structure"
  videoSrc="https://www.youtube.com/embed/TwdjOQMTaQ4"
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
          topicName= "Graph513"
          topicId={513}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/trees-512"
          nextTo="/roadmaps/cs/tree-514"
        />
      </div>
    </div>
  )
}

export default Graph513;