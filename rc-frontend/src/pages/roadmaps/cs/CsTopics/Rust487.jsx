import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Rust487 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "The Rust Programming Language",
      url: "https://doc.rust-lang.org/book/",
    },
    {
      id: 2,
      title: "Programming Rust: Fast, Safe Systems Development",
      url: "https://www.oreilly.com/library/view/programming-rust/9781491927274/",
    },
    {
      id: 3,
      title: "Rust in Action",
      url: "https://www.manning.com/books/rust-in-action",
    },
    {
      id: 4,
      title: "Rust Cookbook",
      url: "https://rust-lang-nursery.github.io/rust-cookbook/",
    },
    {
      id: 5,
      title: "The Cargo Book (Rust's Package Manager)",
      url: "https://doc.rust-lang.org/cargo/",
    },
    {
      id: 6,
      title: "Rust by Example",
      url: "https://doc.rust-lang.org/rust-by-example/",
    },
    // Add more items as needed...
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Rust</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/c-sharp-486"
          nextTo="/roadmaps/cs/programming-fundamentals-488"
        />
        <hr />

        <h2>Rust487</h2>
        <p>
        Rust is a modern programming language designed to provide both performance and safety. It's known for its features that help developers write concurrent and safe code. Rust is syntactically similar to C++, but its designers have sought to provide better memory safety while maintaining high performance.
        <br /> <br />
        In the real world, Rust is used in a wide range of applications. It's particularly favored in systems programming and for creating web servers, game engines, and even operating systems. Some real-world examples include Firefox's rendering engine, Servo, and Dropbox's file storage system. So, whether you're looking to build a high-performance web server or a game engine, Rust is a fantastic choice!
        <br /> <br />
        Rust is still evolving, and its community is growing. Stay tuned for more updates and exciting developments in the Rust world.

        </p>

      
<TopicVideoPlayer
  videoTitle="Learn Rust Programming - Complete Course 🦀"
  videoSrc="https://www.youtube.com/embed/BpPEoZW5IiY"
/>

<TopicVideoPlayer
  videoTitle="Rust Crash Course | Rustlang"
  videoSrc="https://www.youtube.com/embed/zF34dRivLOw"
/>

<TopicVideoPlayer
  videoTitle="Rust in 100 Seconds"
  videoSrc="https://www.youtube.com/embed/5C_HPTJg5ek"
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
          topicName= "Rust487"
          topicId={487}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/c-sharp-486"
          nextTo="/roadmaps/cs/programming-fundamentals-488"
        />
      </div>
    </div>
  )
}

export default Rust487;