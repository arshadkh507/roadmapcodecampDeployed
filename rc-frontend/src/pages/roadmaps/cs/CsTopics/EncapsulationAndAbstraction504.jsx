import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const EncapsulationAndAbstraction504 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Encapsulation and Abstraction in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-encapsulation-and-abstraction-in-programming/",
    },
    {
      id: 2,
      title: "Encapsulation and Abstraction in C++",
      url: "https://www.geeksforgeeks.org/abstraction-in-c/",
    },
    {
      id: 3,
      title: "Understanding Encapsulation and Abstraction in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS",
    },
    {
      id: 4,
      title: "Mastering Encapsulation and Abstraction in Python: Object-Oriented Programming",
      url: "https://realpython.com/python3-object-oriented-programming/",
    },
    {
      id: 5,
      title: "Encapsulation and Abstraction in C#: Access Modifiers and Interfaces",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers",
    },
    {
      id: 6,
      title: "Rust Encapsulation and Abstraction: Modules and Visibility",
      url: "https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Encapsulation And Abstraction</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/inheritance-and-polymorphism-503"
          nextTo="/roadmaps/cs/interfaces-and-abstract-classes-505"
        />
        <hr />

        <h2>Encapsulation And Abstraction</h2>
        <p>
        Encapsulation and Abstraction are two fundamental concepts in Object-Oriented Programming (OOP). Encapsulation is like packing up your lunch in a box, it's about wrapping the data (variables) and the methods (functions) together within a single unit (class). This helps us to protect our lunch (data) from being accessed directly (data hiding) and it can only be accessed through the functions of the class.
        <br /><br />
        On the other hand, Abstraction is like using a microwave to heat your food. You don't need to know how the microwave works internally to be able to use it. Similarly, in programming, Abstraction allows us to hide the complex details and show only the functionality to the users. It helps us to reduce complexity and increase efficiency.
        <br /><br />
        
        Both Encapsulation and Abstraction are essential as they help us write code that is easier to read, maintain, and scale. They allow us to model real-world things and relationships, making our code a closer reflection of the world we're trying to represent.

        </p>

        <TopicVideoPlayer
  videoTitle="Abstraction & Encapsulation | Python Tutorials For Absolute Beginners In Hindi "
  videoSrc="https://www.youtube.com/embed/wySW_E4XsvE"
/>

<TopicVideoPlayer
  videoTitle="Encapsulation in Java | Learn Coding"
  videoSrc="https://www.youtube.com/embed/3JmMK-HvYJU"
/>


        <TopicVideoPlayer
  videoTitle="Intro to Object Oriented Programming - Crash Course"
  videoSrc="https://www.youtube.com/embed/SiBw7os-_zI"
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
          topicName= "EncapsulationAndAbstraction504"
          topicId={504}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/inheritance-and-polymorphism-503"
          nextTo="/roadmaps/cs/interfaces-and-abstract-classes-505"
        />
      </div>
    </div>
  )
}

export default EncapsulationAndAbstraction504;