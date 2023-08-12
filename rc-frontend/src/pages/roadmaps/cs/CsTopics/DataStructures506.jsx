import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const DataStructures506 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Data Structures in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-data-structures-in-programming/",
    },
    {
      id: 2,
      title: "Data Structures in C++",
      url: "https://www.geeksforgeeks.org/data-structures/",
    },
    {
      id: 3,
      title: "Understanding Data Structures in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
    },
    {
      id: 4,
      title: "Mastering Data Structures in Python",
      url: "https://realpython.com/python-data-structures/",
    },
    {
      id: 5,
      title: "Data Structures in C#: Collections and Lists",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections",
    },
    {
      id: 6,
      title: "Rust Data Structures: Vectors and HashMaps",
      url: "https://doc.rust-lang.org/book/ch08-00-common-collections.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Data Structures</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/interfaces-and-abstract-classes-505"
          nextTo="/roadmaps/cs/array-507"
        />
        <hr />

        <h2>Data Structures</h2>
        <p>
        Data Structures are like the 'containers' in programming that store data in a specific layout. This layout not only makes it efficient to process the data but also makes it easier for us to understand and manage complex data. Imagine trying to store all your clothes without a closet or drawers. It would be a mess, right? Data Structures help us avoid such a mess in our code. Stay tuned as we dive deeper into this topic.

        </p>

        <TopicVideoPlayer
  videoTitle="Data Structures Easy to Advanced Course - Full Tutorial from a Google Engineer"
  videoSrc="https://www.youtube.com/embed/RBSGKlAvoiM"
/>
<TopicVideoPlayer
  videoTitle="Introduction to Programming and Data Structures for GATE with Shubham Agrawal"
  videoSrc="https://www.youtube.com/embed/OemXnubEdhM"
/>
<TopicVideoPlayer
  videoTitle="1. Introduction to C++ | Data Structures and Algorithms | College Placement Course"
  videoSrc="https://www.youtube.com/embed/z9bZufPHFLU"
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
          topicName= "DataStructures506"
          topicId={506}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/interfaces-and-abstract-classes-505"
          nextTo="/roadmaps/cs/array-507"
        />
      </div>
    </div>
  )
}

export default DataStructures506;