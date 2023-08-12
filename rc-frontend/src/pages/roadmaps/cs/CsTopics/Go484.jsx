import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Go484 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "The Go Programming Language",
      url: "https://www.gopl.io/",
    },
    {
      id: 2,
      title: "Programming in Go: Creating Applications for the 21st Century",
      url: "https://www.amazon.com/Programming-Go-Creating-Applications-21st/dp/0321774639",
    },
    {
      id: 3,
      title: "Learning Go: An Idiomatic Approach to Real-World Go Programming",
      url: "https://www.oreilly.com/library/view/learning-go-an/9781492077206/",
    },
    {
      id: 4,
      title: "Go in Action",
      url: "https://www.manning.com/books/go-in-action",
    },
    {
      id: 5,
      title: "Head First Go",
      url: "https://www.oreilly.com/library/view/head-first-go/9781491969557/",
    },
    {
      id: 6,
      title: "Mastering Go: Create Golang production applications using network libraries, concurrency, and advanced Go data structures",
      url: "https://www.amazon.com/Mastering-Go-production-applications-concurrency/dp/178862654X",
    },
    // Add more items as needed...
  ];
  
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Go</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/python-483"
          nextTo="/roadmaps/cs/java-485"
        />
        <hr />

        <h2>Go484</h2>
        <p>
        Go, also known as Golang, is a statically typed, compiled programming language designed at Google. It's known for its simplicity and efficiency, making it a popular choice for modern software development.
        <br /> <br />
        Why use Go? Go offers a balance between performance and ease of use. It has a clean syntax, making it easy to learn, and it's statically typed, which helps catch errors early. It also has built-in support for concurrent programming.
        <br /> <br />
        How do we use it? Go is a compiled language, which means you write the code, and then run a compiler to turn it into a program that can be run. It's often used for backend development, but it's versatile enough to handle a wide range of programming tasks.
        <br /> <br />
        As for real-world examples, Go is used extensively in many large-scale systems. For instance, it's used in the development of Docker, a popular platform for containerization. It's also used by many tech giants like Google, Uber, and Twitch for various backend services.
        <br /> <br />
        So, if you're looking to dive into a language that's efficient, easy to learn, and highly relevant in today's tech industry, Go is a great choice!

        </p>

        <TopicVideoPlayer
  videoTitle="Learn Go Programming - Golang Tutorial for Beginners"
  videoSrc="https://www.youtube.com/embed/YS4e4q9oBaU"
/>

<TopicVideoPlayer
  videoTitle="Golang Tutorial for Beginners | Full Go Course"
  videoSrc="https://www.youtube.com/embed/yyUHQIec83I"
/>

<TopicVideoPlayer
  videoTitle="Go in 100 Seconds"
  videoSrc="https://www.youtube.com/embed/446E-r0rXHI"
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
          topicName= "Go484"
          topicId={484}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/python-483"
          nextTo="/roadmaps/cs/java-485"
        />
      </div>
    </div>
  )
}

export default Go484;