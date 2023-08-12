import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Stack509 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Stacks in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-stacks-in-programming/",
    },
    {
      id: 2,
      title: "Stacks in C++",
      url: "https://www.geeksforgeeks.org/stack-data-structure-introduction-program/",
    },
    {
      id: 3,
      title: "Working with Stacks in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals",
    },
    {
      id: 4,
      title: "Mastering Stacks in Python",
      url: "https://realpython.com/linked-lists-python/",
    },
    {
      id: 5,
      title: "Stacks in C#: Implementing Stack Data Structure",
      url: "https://docs.microsoft.com/en-us/dotnet/api/system.collections.stack?view=net-5.0",
    },
    {
      id: 6,
      title: "Rust Stacks: Implementing a Basic Stack",
      url: "https://doc.rust-lang.org/book/ch15-01-box.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Stack</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/link-lists-508"
          nextTo="/roadmaps/cs/queue-510"
        />
        <hr />

        <h2>Stack</h2>
        <p>
        Imagine a stack of books. You can only add a new book to the top, and when you take a book, you also take it from the top. This is exactly how a 'Stack' works in programming. It's a special kind of data structure that follows the 'Last-In, First-Out' (LIFO) principle. This means the last item you put in is the first one to come out.
        <br /><br />
        But why do we need it? Well, stacks are incredibly useful in many areas of programming. They help manage and execute function calls, handle undo operations in software applications, and even help solve complex problems in algorithms. So, if you're diving into the world of programming, getting to know stacks is a must!

        </p>
        <TopicVideoPlayer
  videoTitle="Introduction to Stacks"
  videoSrc="https://www.youtube.com/embed/I37kGX-nZEI"
/>
<TopicVideoPlayer
  videoTitle="1. Introduction to C++ | Data Structures and Algorithms | College Placement Course"
  videoSrc="https://www.youtube.com/embed/z9bZufPHFLU"
/>
<TopicVideoPlayer

  videoTitle="Stack in Data Structure | stack implementation using array in C | PUSH and POP operation in Stack"
  videoSrc="https://www.youtube.com/embed/whYm5cqigL8"
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
          topicName= "Stack509"
          topicId={509}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/link-lists-508"
          nextTo="/roadmaps/cs/queue-510"
        />
      </div>
    </div>
  )
}

export default Stack509;