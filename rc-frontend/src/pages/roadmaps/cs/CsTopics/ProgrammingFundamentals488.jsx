import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ProgrammingFundamentals488 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Programming: A Beginner's Guide",
      url: "https://www.freecodecamp.org/news/introduction-to-programming-a-beginners-guide/",
    },
    {
      id: 2,
      title: "Programming Fundamentals: A Comprehensive Overview",
      url: "https://www.geeksforgeeks.org/programming-fundamentals-a-comprehensive-overview/",
    },
    {
      id: 3,
      title: "Understanding Variables, Loops, and Functions",
      url: "https://www.codecademy.com/learn/learn-c-sharp/modules/learn-csharp-introduction-to-c-sharp-u",
    },
    {
      id: 4,
      title: "Problem-Solving Strategies for Programming",
      url: "https://www.udemy.com/course/problem-solving-strategies-for-programming/",
    },
    {
      id: 5,
      title: "Mastering Programming Fundamentals with Python",
      url: "https://www.udacity.com/course/programming-foundations-with-python--ud036",
    },
    {
      id: 6,
      title: "The Fundamentals of JavaScript Programming",
      url: "https://javascript.info/",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Programming Fundamentals</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/rust-487"
          nextTo="/roadmaps/cs/variables-489"
        />
        <hr />

        <h2>Programming Fundamentals</h2>
        <p>
        Programming Fundamentals are the basic concepts that serve as the foundation of any programming language. They include understanding variables, which are like containers that store data, and functions, which are blocks of code designed to perform a specific task. 
        Loops, another fundamental concept, allow us to repeat a block of code multiple times, which can be incredibly useful in many situations. 
        <br /><br />
        Then there's the concept of conditionals - these are the 'decision makers' in our code, allowing us to specify that certain code should only be executed if specific conditions are met. 
        Finally, understanding data structures (like arrays and objects) and algorithms is key to solving complex problems. 
        Mastering these fundamentals is the first step on your journey to becoming a proficient programmer. Stay tuned as we dive deeper into each of these topics!

        </p>

      
<TopicVideoPlayer
  videoTitle="Introduction to Programming and Computer Science - Full Course"
  videoSrc="https://www.youtube.com/embed/zOjov-2OZ0E"
/>


<TopicVideoPlayer
  videoTitle="How to Start Coding? Learn Programming for Beginners"
  videoSrc="https://www.youtube.com/embed/eKqY-oP1d_Y"
/>


<TopicVideoPlayer
  videoTitle="100+ Computer Science Concepts Explained"
  videoSrc="https://www.youtube.com/embed/-uleG_Vecis"
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
          topicName= "ProgrammingFundamentals488"
          topicId={488}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/rust-487"
          nextTo="/roadmaps/cs/variables-489"
        />
      </div>
    </div>
  )
}

export default ProgrammingFundamentals488;