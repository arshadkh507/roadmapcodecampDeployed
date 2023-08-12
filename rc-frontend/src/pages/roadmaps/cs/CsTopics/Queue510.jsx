import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Queue510 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Queues in Programming",
      url: "https://www.freecodecamp.org/news/introduction-to-queues-in-programming/",
    },
    {
      id: 2,
      title: "Queues in C++",
      url: "https://www.geeksforgeeks.org/queue-data-structure/",
    },
    {
      id: 3,
      title: "Working with Queues in JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals",
    },
    {
      id: 4,
      title: "Mastering Queues in Python",
      url: "https://realpython.com/linked-lists-python/",
    },
    {
      id: 5,
      title: "Queues in C#: Implementing Queue Data Structure",
      url: "https://docs.microsoft.com/en-us/dotnet/api/system.collections.queue?view=net-5.0",
    },
    {
      id: 6,
      title: "Rust Queues: Implementing a Basic Queue",
      url: "https://doc.rust-lang.org/book/ch15-01-box.html",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Queue</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/stack-509"
          nextTo="/roadmaps/cs/heap-511"
        />
        <hr />

        <h2>Queue510</h2>
        <p>
        Imagine you're waiting in line at a coffee shop. The first person in line is the first person to get served, and any new customers go to the end of the line. This is exactly how a 'Queue' works in programming. It's a special kind of data structure that follows the 'First-In, First-Out' (FIFO) principle. This means the first item you put in is the first one to come out.
        <br /><br />
        But why do we need it? Well, queues are incredibly useful in many areas of programming. They help manage processes in operating systems, handle buffering in hardware and software, and even help in scenarios where order of operation is crucial. So, if you're diving into the world of programming, getting to know queues is a must!

        </p>

        <TopicVideoPlayer
  videoTitle="Queue Data Structure in Hindi"
  videoSrc="https://www.youtube.com/embed/UbAEP7P0vfk"
/>
<TopicVideoPlayer
  videoTitle="1. Introduction to C++ | Data Structures and Algorithms | College Placement Course"
  videoSrc="https://www.youtube.com/embed/z9bZufPHFLU"
/>
<TopicVideoPlayer

  videoTitle="Queue in Data Structure | queue implementation using array in c | Queue FRONT and REAR operation"
  videoSrc="https://www.youtube.com/embed/4gykxUglq-U"
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
          topicName= "Queue510"
          topicId={510}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/stack-509"
          nextTo="/roadmaps/cs/heap-511"
        />
      </div>
    </div>
  )
}

export default Queue510;