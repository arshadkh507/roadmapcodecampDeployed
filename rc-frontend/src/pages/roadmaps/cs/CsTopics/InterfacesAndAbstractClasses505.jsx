import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const InterfacesAndAbstractClasses505 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Interfaces and Abstract Classes in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-interfaces-and-abstract-classes-in-programming/",
    },
    {
      id: 2,
      title: "Interfaces and Abstract Classes in C++",
      url: "https://www.geeksforgeeks.org/interfaces-in-c-sharp-8-0/",
    },
    {
      id: 3,
      title: "Understanding Interfaces and Abstract Classes in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model",
    },
    {
      id: 4,
      title: "Mastering Interfaces and Abstract Classes in Python: Object-Oriented Programming",
      url: "https://realpython.com/python3-object-oriented-programming/",
    },
    {
      id: 5,
      title: "Interfaces and Abstract Classes in C#: Defining Contracts and Common Functionality",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/",
    },
    {
      id: 6,
      title: "Rust Interfaces and Abstract Classes: Trait Objects and Dynamic Dispatch",
      url: "https://doc.rust-lang.org/book/ch17-02-trait-objects.html",
    },
    // Add more items
  
  ]
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Interfaces And Abstract Classes</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/encapsulation-and-abstraction-504"
          nextTo="/roadmaps/cs/data-structures-506"
        />
        <hr />

        <h2>Interfaces And Abstract Classes</h2>
        <p>
        Interfaces and Abstract Classes are fundamental concepts in object-oriented programming. An interface is like a contract that a class agrees to follow. It defines a set of methods that the class must implement. On the other hand, an abstract class is a class that cannot be instantiated and is meant to be subclassed by other classes. Abstract classes can define both methods and variables, and can also provide default implementations for methods. We need interfaces and abstract classes to achieve abstraction in our code. They allow us to write code that focuses on what it should do, rather than how it should do it. This makes our code more flexible and easier to maintain.

        </p>

 
        <TopicVideoPlayer
  videoTitle="Java Tutorial: Abstract Classes Vs Interfaces"
  videoSrc="https://www.youtube.com/embed/qZEFslUVfx0"
/>

<TopicVideoPlayer
  videoTitle="Abstract Classes and Methods in Java Explained in 7 Minutes"
  videoSrc="https://www.youtube.com/embed/HvPlEJ3LHgE"
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
          topicName= "InterfacesAndAbstractClasses505"
          topicId={505}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/encapsulation-and-abstraction-504"
          nextTo="/roadmaps/cs/data-structures-506"
        />
      </div>
    </div>
  )
}

export default InterfacesAndAbstractClasses505;