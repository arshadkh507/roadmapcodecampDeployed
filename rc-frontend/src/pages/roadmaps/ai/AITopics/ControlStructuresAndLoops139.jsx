import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ControlStructuresAndLoops139 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Control Structures in Python",
      url: "https://www.w3schools.com/python/python_conditions.asp",
    },
    {
      id: 2,
      title: "Loops in Python",
      url: "https://www.w3schools.com/python/python_for_loops.asp",
    },
    {
      id: 3,
      title: "Control Structures and Loops in AI",
      url: "https://www.analyticsvidhya.com/blog/2021/05/control-structures-and-loops-in-python-for-data-science/",
    },
    {
      id: 4,
      title: "Control Structures and Loops in Machine Learning",
      url: "https://towardsdatascience.com/loops-and-iteration-in-python-6f2dbe34cf68",
    },
    {
      id: 5,
      title: "Control Structures and Loops in Deep Learning",
      url: "https://www.geeksforgeeks.org/loops-in-python/",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Control Structures And Loops</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/basic-data-structures-and-algorithms-138"
          nextTo="/roadmaps/ai/functions-and-procedures-140"
        />
        <hr />

        <h2>Control Structures And Loops</h2>
        <p>
        Control Structures and Loops are fundamental concepts in programming that are crucial for AI. Control structures allow your program to make decisions based on certain conditions, while loops enable your program to perform repetitive tasks efficiently. Understanding these concepts is key to implementing complex AI algorithms and models.
        </p>

        <TopicVideoPlayer
  videoTitle="Control Structures in Python"
  videoSrc="https://www.youtube.com/embed/5QlCw1_N6xk"
/>
<TopicVideoPlayer
  videoTitle="Loops in Python"
  videoSrc="https://www.youtube.com/embed/6iF8Xb7Z3wQ"
/>
<TopicVideoPlayer
  videoTitle="Control Structures and Loops in AI"
  videoSrc="https://www.youtube.com/embed/RVYY7zMiPbg"
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
          topicName= "ControlStructuresAndLoops139"
          topicId={139}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/basic-data-structures-and-algorithms-138"
          nextTo="/roadmaps/ai/functions-and-procedures-140"
        />
      </div>
    </div>
  )
}

export default ControlStructuresAndLoops139;