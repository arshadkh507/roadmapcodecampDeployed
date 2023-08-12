import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Java485 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Effective Java (3rd Edition)",
      url: "https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/",
    },
    {
      id: 2,
      title: "Java: The Complete Reference (11th Edition)",
      url: "https://www.oreilly.com/library/view/java-the-complete/9781260440232/",
    },
    {
      id: 3,
      title: "Head First Java (2nd Edition)",
      url: "https://www.oreilly.com/library/view/head-first-java/9780596009205/",
    },
    {
      id: 4,
      title: "Java Concurrency in Practice",
      url: "https://www.oreilly.com/library/view/java-concurrency-in-practice/0321349601/",
    },
    {
      id: 5,
      title: "Thinking in Java (4th Edition)",
      url: "https://www.oreilly.com/library/view/thinking-in-java/9780131872486/",
    },
    {
      id: 6,
      title: "Java: The Legend",
      url: "https://www.oreilly.com/library/view/java-the-legend/9781492082750/",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Java</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/go-484"
          nextTo="/roadmaps/cs/c-sharp-486"
        />
        <hr />

        <h2>Java485</h2>
        <p>
        Java is a powerful, versatile programming language that's widely used in the world of technology. It's object-oriented, which means it's great for building complex, scalable applications. 
        <br /> <br />
        Why do we use Java? Well, its popularity is due in part to its "write once, run anywhere" philosophy. This means that once you've written your Java code, you can run it on any device that supports Java - without needing to rewrite it. This makes Java a great choice for cross-platform development.
        <br /> <br />
        In the real world, Java is used in a wide range of applications. It's the backbone of many enterprise-level systems, used for building Android apps, and even in the development of games. Some real-world examples include its use in banking applications, stock market trading systems, and in scientific and research communities.
        <br /> <br />
        So, whether you're looking to build a mobile app, a high-frequency trading platform, or even a scientific research tool, Java is a fantastic choice!

        </p>

        <TopicVideoPlayer
  videoTitle="Introduction to Java Language | Lecture 1 | Complete Placement Course"
  videoSrc="https://www.youtube.com/embed/yRpLlJmRo2w"
/>

<TopicVideoPlayer
  videoTitle="Java Tutorial for Beginners | Learn Java in 2 Hours"
  videoSrc="https://www.youtube.com/embed/UmnCZ7-9yDY"
/>

<TopicVideoPlayer
  videoTitle="Java Tutorial for Beginners"
  videoSrc="https://www.youtube.com/embed/eIrMbAQSU34"
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
          topicName= "Java485"
          topicId={485}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/go-484"
          nextTo="/roadmaps/cs/c-sharp-486"
        />
      </div>
    </div>
  )
}

export default Java485;