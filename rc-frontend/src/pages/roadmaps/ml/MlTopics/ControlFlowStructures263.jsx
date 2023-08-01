import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ControlFlowStructures263 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Control Flow in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
    },
    {
      id: 2,
      title: "Understanding Control Flow in Python",
      url: "https://realpython.com/python-control-flow/",
    },
    {
      id: 3,
      title: "Control Flow Structures in C++",
      url: "https://www.learncpp.com/cpp-tutorial/control-flow/",
    },
    {
      id: 4,
      title: "Control Flow Structures in Java",
      url: "https://www.w3schools.com/java/java_switch.asp",
    },
    {
      id: 5,
      title: "Control Flow: An Introduction",
      url: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Control Flow Structures</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/operators-262"
          nextTo="/roadmaps/ml/data-types-264"
        />
        <hr />

        <h2>Control Flow Structures</h2>
        <p>
        Control flow structures in programming are like the traffic signals of a city, guiding the flow of execution. They determine the order in which the instructions in a program are executed. This is crucial because it allows us to have more complex interactions than just executing one instruction after another.
<br /><br />
        There are several types of control flow structures, including 'if' statements, 'for' and 'while' loops, and 'switch' statements. Each of these has a specific purpose and use case. For example, 'if' statements allow us to execute a piece of code only if a certain condition is met. 'For' and 'while' loops, on the other hand, allow us to repeat a block of code multiple times.
<br /><br />
        Understanding and using control flow structures effectively is a key skill in programming. It allows us to create more complex, efficient, and interactive programs. So, buckle up and get ready to dive into the world of control flow structures!

        </p>

        <TopicVideoPlayer
          videoTitle="What is Flow Control in Programming | Python Flow Control"
          videoSrc="https://www.youtube.com/embed/n9TQZIiFiQs"
        />
        <TopicVideoPlayer
          videoTitle="Understanding Control Flow in Python"
          videoSrc="https://www.youtube.com/embed/Zp5MuPOtsSY"
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
          topicName= "ControlFlowStructures263"
          topicId={263}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/operators-262"
          nextTo="/roadmaps/ml/data-types-264"
        />
      </div>
    </div>
  )
}

export default ControlFlowStructures263;