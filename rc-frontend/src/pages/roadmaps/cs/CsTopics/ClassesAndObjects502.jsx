import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ClassesAndObjects502 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Classes and Objects in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-classes-and-objects-in-programming/",
    },
    {
      id: 2,
      title: "Classes and Objects in C++",
      url: "https://www.geeksforgeeks.org/classes-and-objects-in-cpp/",
    },
    {
      id: 3,
      title: "Working with Classes and Objects in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
    },
    {
      id: 4,
      title: "Mastering Classes and Objects in Python: Object-Oriented Programming",
      url: "https://realpython.com/python3-object-oriented-programming/",
    },
    {
      id: 5,
      title: "Classes and Objects in C#: Defining Classes and Creating Objects",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/classes",
    },
    {
      id: 6,
      title: "Rust Classes and Objects: Structs and Methods",
      url: "https://doc.rust-lang.org/book/ch05-00-structs.html",
    },
    // Add more items as needed...
  ];
  
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Classes And Objects</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/object-oriented-programming-501"
          nextTo="/roadmaps/cs/inheritance-and-polymorphism-503"
        />
        <hr />

        <h2>Classes And Objects</h2>
        <p>
        Classes and Objects form the cornerstone of Object-Oriented Programming (OOP). A class is like a blueprint, defining the characteristics (properties) and behaviors (methods) of an object. An object, on the other hand, is an instance of a class, embodying those properties and behaviors. We use classes and objects to model and organize real-world concepts in code, making it easier to understand and maintain. They help us encapsulate data and functions into a single entity, providing a way to create more flexible and modular code.

        </p>

        <TopicVideoPlayer
  videoTitle="Introduction to Classes and Objects - Part 1"
  videoSrc="https://www.youtube.com/embed/8yjkWGRlUmY"
/>
<TopicVideoPlayer
  videoTitle="Class and Object in Java | Learn Coding"
  videoSrc="https://www.youtube.com/embed/L677QCBCuWk"
/>
<TopicVideoPlayer
  videoTitle="Object Oriented Programming with Python - Full Course for Beginners"
  videoSrc="https://www.youtube.com/embed/Ej_02ICOIgs"
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
          topicName= "ClassesAndObjects502"
          topicId={502}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/object-oriented-programming-501"
          nextTo="/roadmaps/cs/inheritance-and-polymorphism-503"
        />
      </div>
    </div>
  )
}

export default ClassesAndObjects502;