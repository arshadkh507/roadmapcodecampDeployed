import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Variables260 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is a Variable in Programming? - GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/what-is-a-variable-in-programming/",
    },
    {
      id: 2,
      title: "Understanding Variables in JavaScript - MDN Docs",
      url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables",
    },
    {
      id: 3,
      title: "How to Use Variables in Programming - Codecademy",
      url: "https://www.codecademy.com/learn/learn-how-to-code/modules/learn-how-to-code-variables",
    },
    {
      id: 4,
      title: "Variables in Programming - YouTube",
      url: "https://www.youtube.com/watch?v=cZ1ZJa6A5TY",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Variables</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/programming-fundamentals-259"
          nextTo="/roadmaps/ml/expressions-261"
        />
        <hr />

        <h2>Variables260</h2>
        <p>
        In programming, a variable is like a container or a storage box. It holds data that we can use and manipulate as we write our code. We use variables to store, retrieve, and use data. They're essential because they allow our programs to handle data in a dynamic, flexible way. Think of them as the memory of a program. Without variables, our code would be static and rigid, unable to respond to different situations and inputs. So, in a nutshell, variables make our code smarter and our lives as programmers easier.

        </p>

        <TopicVideoPlayer
          videoTitle="What is Variable in Python and How to Create Variables in Python"
          videoSrc="https://www.youtube.com/embed/o-pRdr8IMWg"
        />
        <TopicVideoPlayer
          videoTitle="Variables in JavaScript Tutorial in Hindi  "
          videoSrc="https://www.youtube.com/embed/0n93WS4MSME"
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
          topicName= "Variables260"
          topicId={260}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/programming-fundamentals-259"
          nextTo="/roadmaps/ml/expressions-261"
        />
      </div>
    </div>
  )
}

export default Variables260;