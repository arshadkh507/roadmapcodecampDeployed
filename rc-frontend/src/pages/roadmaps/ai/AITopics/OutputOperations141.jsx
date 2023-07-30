import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const OutputOperations141 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Output Operations in Python",
      url: "https://www.w3schools.com/python/ref_func_print.asp",
    },
    {
      id: 2,
      title: "Python Output Operations",
      url: "https://www.geeksforgeeks.org/python-output-using-print-function/",
    },
    {
      id: 3,
      title: "Output Operations in Programming",
      url: "https://www.tutorialspoint.com/computer_programming/computer_programming_io.htm",
    },
    {
      id: 4,
      title: "Output Operations in AI",
      url: "https://www.analyticsvidhya.com/blog/2021/05/output-operations-in-python-for-data-science/",
    },
    {
      id: 5,
      title: "Output Operations in Machine Learning",
      url: "https://machinelearningmastery.com/save-load-machine-learning-models-python-scikit-learn/",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Output Operations</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/functions-and-procedures-140"
          nextTo="/roadmaps/ai/mathematics-142"
        />
        <hr />

        <h2>Output Operations</h2>
        <p>
        Output Operations in programming, particularly in Python, refer to how a program displays the result of an operation to the user. This could be anything from printing a simple message on the screen, writing data to a file, or sending data over a network. In the context of AI, output operations are often used to present the results of a computation or analysis.
        </p>

        <TopicVideoPlayer
          videoTitle="Output Operations in Python"
          videoSrc="https://www.youtube.com/embed/rfscVS0vtbw"
        />
        <TopicVideoPlayer
          videoTitle="Python Output Operations"
          videoSrc="https://www.youtube.com/embed/7XOhibxgBlQ"
        />
        <TopicVideoPlayer
          videoTitle="Output Operations in AI"
          videoSrc="https://www.youtube.com/embed/aircAruvnKk"
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
          topicName= "OutputOperations141"
          topicId={141}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/functions-and-procedures-140"
          nextTo="/roadmaps/ai/mathematics-142"
        />
      </div>
    </div>
  )
}

export default OutputOperations141;