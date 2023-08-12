import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const DataTypes490 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Data Types in Programming",
      url: "https://www.freecodecamp.org/news/understanding-data-types-in-programming/",
    },
    {
      id: 2,
      title: "Data Types Explained: A Beginner's Guide",
      url: "https://www.geeksforgeeks.org/data-types-in-c/",
    },
    {
      id: 3,
      title: "Data Types in JavaScript: An Overview",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
    },
    {
      id: 4,
      title: "Mastering Python Data Types and Structures",
      url: "https://realpython.com/python-data-types/",
    },
    {
      id: 5,
      title: "Data Types in C#: The Complete Reference",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/",
    },
    {
      id: 6,
      title: "Rust Data Types: From Basics to Advanced",
      url: "https://doc.rust-lang.org/book/ch03-02-data-types.html",
    },
    // Add more items as needed...
  ];
  
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Data Types</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/variables-489"
          nextTo="/roadmaps/cs/operators-491"
        />
        <hr />

        <h2>DataTypes490</h2>
        <p>
        In the realm of programming, data types are like the DNA of information. They tell our code what kind of data we're dealing with - whether it's a number, a string of text, a true/false value, or something else. By defining data types, we give structure to our data, making it easier for our code to understand and manipulate it. It's like giving our code a roadmap to the data, guiding it on how to interact with each piece of information. So, in essence, we use data types to keep our code efficient, organized, and error-free.

        </p>

       
<TopicVideoPlayer
  videoTitle="What Are Data Types?"
  videoSrc="https://www.youtube.com/embed/A37-3lflh8I"
/>


<TopicVideoPlayer
  videoTitle="Introduction to Programming and Computer Science - Full Course"
  videoSrc="https://www.youtube.com/embed/zOjov-2OZ0E"
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
          topicName= "DataTypes490"
          topicId={490}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/variables-489"
          nextTo="/roadmaps/cs/operators-491"
        />
      </div>
    </div>
  )
}

export default DataTypes490;