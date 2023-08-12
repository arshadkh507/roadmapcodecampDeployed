import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ObjectOrientedProgramming501 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Object-Oriented Programming (OOP)",
      url: "https://www.freecodecamp.org/news/introduction-to-object-oriented-programming-oop/",
    },
    {
      id: 2,
      title: "Object-Oriented Programming in C++",
      url: "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/",
    },
    {
      id: 3,
      title: "Object-Oriented JavaScript: Classes and Prototypes",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model",
    },
    {
      id: 4,
      title: "Mastering Object-Oriented Programming in Python: Classes and Inheritance",
      url: "https://realpython.com/python3-object-oriented-programming/",
    },
    {
      id: 5,
      title: "Object-Oriented Programming in C#: Classes and Encapsulation",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/",
    },
    {
      id: 6,
      title: "Rust Object-Oriented Programming: Traits and Structs",
      url: "https://doc.rust-lang.org/book/ch17-00-oop.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Object Oriented Programming</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/error-handling-and-reporting-500"
          nextTo="/roadmaps/cs/classes-and-objects-502"
        />
        <hr />

        <h2>Object Oriented Programming</h2>
        <p>
        Object Oriented Programming, often abbreviated as OOP, is a programming paradigm that uses the concept of "objects". These objects are instances of classes, which can hold both data in the form of fields, also known as attributes; and code, in the form of procedures, also known as methods. 
        <br /> <br />
        OOP is needed because it helps in organizing complex programs through the use of an easy-to-understand structure. It allows data and methods that operate on that data to be bundled together, making it easy to understand how a program works.
        <br /> <br />
        
        Some of the benefits of OOP include: 
        <br /> <br />
        1. <b>Modularity:</b> The source code for an object can be written and maintained independently of the source code for other objects. Once created, an object can be easily passed around inside the system. <br /> <br />
        2. <b>Information-hiding:</b> By interacting only with an object's methods, the details of its internal implementation remain hidden from the outside world. <br /> <br />
        3. <b>Code re-use:</b> If an object already exists (perhaps written by another software developer), you can use that object in your program. This allows specialists to implement/test/debug complex, task-specific objects, which you can then trust to run in your own code. <br /> <br />
        4. <b>Easy Debugging:</b> If a particular object turns out to be problematic, you can simply remove it from your application and plug in a different object as its replacement. This is analogous to fixing mechanical problems in the real world. If a bolt breaks, you replace it, not the entire machine.

        </p>

    
<TopicVideoPlayer
  videoTitle="Object-oriented Programming in 7 minutes | Mosh"
  videoSrc="https://www.youtube.com/embed/pTB0EiLXUC8"
/>

<TopicVideoPlayer
  videoTitle="Intro to Object Oriented Programming - Crash Course"
  videoSrc="https://www.youtube.com/embed/SiBw7os-_zI"
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
          topicName= "ObjectOrientedProgramming501"
          topicId={501}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/error-handling-and-reporting-500"
          nextTo="/roadmaps/cs/classes-and-objects-502"
        />
      </div>
    </div>
  )
}

export default ObjectOrientedProgramming501;