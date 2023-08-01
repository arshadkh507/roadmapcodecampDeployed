import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const DataTypes264 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What are Data Types in Programming?",
      url: "https://www.geeksforgeeks.org/data-types-in-c/",
    },
    {
      id: 2,
      title: "Why do we use Data Types in Programming?",
      url: "https://www.javatpoint.com/why-do-we-use-data-types-in-programming",
    },
    {
      id: 3,
      title: "Understanding Data Types in Python",
      url: "https://realpython.com/python-data-types/",
    },
    {
      id: 4,
      title: "Data Types in Java",
      url: "https://www.w3schools.com/java/java_data_types.asp",
    },
    {
      id: 5,
      title: "Data Types in JavaScript",
      url: "https://www.w3schools.com/js/js_datatypes.asp",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Data Types</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/control-flow-structures-263"
          nextTo="/roadmaps/ml/functions-and-modules-265"
        />
        <hr />

        <h2>Data Types</h2>
        <p>
        Data types are the building blocks of all programming languages. They define the kind of data that can be stored and manipulated within a program. There are several types of data types in programming, including:
<br /><br />
        Integer: This is a whole number, without a decimal point. It can be both positive and negative.<br /><br />
        Float: This is a number that includes a decimal point. Float stands for 'floating point'.<br /><br />
        String: This is a sequence of characters. In most programming languages, strings are enclosed in quotes.<br /><br />
        Boolean: This is a binary value. It can be either True or False.<br /><br />
        Null: This represents the absence of value or no value.
<br /><br />
        Each of these data types plays a crucial role in forming the logic of a program. So, understanding them is a key part of learning to code.

        </p>

        <TopicVideoPlayer
          videoTitle="Data Types & Type Modifiers"
          videoSrc="https://www.youtube.com/embed/cnT1oW5_ePM"
        />
        <TopicVideoPlayer
          videoTitle="Variables, Datatypes and Typecasting | Python Tutorials"
          videoSrc="https://www.youtube.com/embed/z1-zfCvxybI"
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
          topicName= "DataTypes264"
          topicId={264}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/control-flow-structures-263"
          nextTo="/roadmaps/ml/functions-and-modules-265"
        />
      </div>
    </div>
  )
}

export default DataTypes264;