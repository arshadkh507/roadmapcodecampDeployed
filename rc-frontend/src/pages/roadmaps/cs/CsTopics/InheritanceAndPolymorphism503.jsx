import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const InheritanceAndPolymorphism503 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Inheritance and Polymorphism in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-inheritance-and-polymorphism-in-programming/",
    },
    {
      id: 2,
      title: "Inheritance and Polymorphism in C++",
      url: "https://www.geeksforgeeks.org/inheritance-in-c/",
    },
    {
      id: 3,
      title: "Understanding Inheritance and Polymorphism in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance",
    },
    {
      id: 4,
      title: "Mastering Inheritance and Polymorphism in Python: Object-Oriented Programming",
      url: "https://realpython.com/python3-object-oriented-programming/",
    },
    {
      id: 5,
      title: "Inheritance and Polymorphism in C#: Creating and Extending Classes",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/inheritance",
    },
    {
      id: 6,
      title: "Rust Inheritance and Polymorphism: Trait Objects and Dynamic Dispatch",
      url: "https://doc.rust-lang.org/book/ch17-02-trait-objects.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Inheritance And Polymorphism</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/classes-and-objects-502"
          nextTo="/roadmaps/cs/encapsulation-and-abstraction-504"
        />
        <hr />

        <h2>Inheritance And Polymorphism</h2>
        <p>
        Inheritance and Polymorphism are two fundamental concepts in Object-Oriented Programming (OOP). Inheritance allows us to define a class based on another class, which leads to a hierarchy of classes. It helps us to create a new class using properties and methods of an existing class. This promotes code reusability and logical structure.
<br /> <br />
        Polymorphism, on the other hand, allows us to treat objects of different classes in the same way. It provides a single interface to entities of different types. This means we can write more flexible and dynamic code.
        <br /> <br />

        Both Inheritance and Polymorphism are essential as they help us write code that is easier to read, maintain, and scale. They allow us to model real-world things and relationships, making our code a closer reflection of the world we're trying to represent.

        </p>


        <TopicVideoPlayer
  videoTitle="Inheritance & Its Different Types with Examples in C++"
  videoSrc="https://www.youtube.com/embed/RO1ZYW9NAzg"
/>
<TopicVideoPlayer
  videoTitle="Polymorphism in C++ | C++ Tutorials for Beginners"
  videoSrc="https://www.youtube.com/embed/B-WWdC-H0zw"
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
          topicName= "InheritanceAndPolymorphism503"
          topicId={503}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/classes-and-objects-502"
          nextTo="/roadmaps/cs/encapsulation-and-abstraction-504"
        />
      </div>
    </div>
  )
}

export default InheritanceAndPolymorphism503;