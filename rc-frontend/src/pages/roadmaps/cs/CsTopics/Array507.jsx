import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Array507 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Arrays in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-arrays-in-programming/",
    },
    {
      id: 2,
      title: "Arrays in C++",
      url: "https://www.geeksforgeeks.org/arrays-in-c-cpp/",
    },
    {
      id: 3,
      title: "Working with Arrays in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals",
    },
    {
      id: 4,
      title: "Mastering Arrays in Python",
      url: "https://realpython.com/python-lists-tuples/",
    },
    {
      id: 5,
      title: "Arrays in C#: Declaring and Using Arrays",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/",
    },
    {
      id: 6,
      title: "Rust Arrays: Fixed-Size Collections",
      url: "https://doc.rust-lang.org/book/ch08-01-vectors.html#slicing",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Array</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/data-structures-506"
          nextTo="/roadmaps/cs/link-lists-508"
        />
        <hr />

        <h2>Array</h2>
        <p>
        Arrays are like the magic boxes of programming. They allow us to store multiple items, such as numbers or strings, in a single variable. This is incredibly handy when you want to keep track of groups of things, like scores in a game or names in a contact list. Without arrays, we'd have to create a separate variable for each item, which would be like carrying groceries home one item at a time. Not very efficient, right? So, arrays help us write cleaner, more efficient code, and that's why we love them!

        </p>

        <TopicVideoPlayer
  videoTitle="8.1 Introduction to Arrays in C++ | Guaranteed Placement Course"
  videoSrc="https://www.youtube.com/embed/PyTK_g1l8V8"
/>
<TopicVideoPlayer
  videoTitle="1. Introduction to C++ | Data Structures and Algorithms | College Placement Course"
  videoSrc="https://www.youtube.com/embed/z9bZufPHFLU"
/>
<TopicVideoPlayer

  videoTitle="Arrays in Programming: Organizing Data in Sequential Order"
  videoSrc="https://www.youtube.com/embed/NTHVTY6w2Co"
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
          topicName= "Array507"
          topicId={507}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/data-structures-506"
          nextTo="/roadmaps/cs/link-lists-508"
        />
      </div>
    </div>
  )
}

export default Array507;