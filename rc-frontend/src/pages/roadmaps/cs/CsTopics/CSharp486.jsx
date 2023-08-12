import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const CSharp486 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "C# 9.0 in a Nutshell: The Definitive Reference",
      url: "https://www.oreilly.com/library/view/c-90-in/9781492071143/",
    },
    {
      id: 2,
      title: "C# Programming Yellow Book",
      url: "https://www.robmiles.com/c-yellow-book/",
    },
    {
      id: 3,
      title: "C# 9 and .NET 5 - Modern Cross-Platform Development",
      url: "https://www.packtpub.com/product/c-9-and-net-5-modern-cross-platform-development-fifth-edition/9781800568101",
    },
    {
      id: 4,
      title: "Head First C#: A Learner's Guide to Real-World Programming with C# and .NET",
      url: "https://www.oreilly.com/library/view/head-first-c/9780596514822/",
    },
    {
      id: 5,
      title: "C# in Depth (4th Edition)",
      url: "https://www.oreilly.com/library/view/c-in-depth/9781617294532/",
    },
    {
      id: 6,
      title: "Programming C#: Build Cloud, Web, and Desktop Applications",
      url: "https://www.microsoftpressstore.com/store/programming-c-build-cloud-web-and-desktop-applications-9781509307760",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>C Sharp</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/java-485"
          nextTo="/roadmaps/cs/rust-487"
        />
        <hr />

        <h2>C Sharp</h2>
        <p>
        C Sharp, often simply referred to as C#, is a modern, object-oriented programming language developed by Microsoft. It's part of the .NET framework and is widely used for building Windows desktop applications and games. 
        <br /> <br />
        C# is loved by developers for its simplicity and power. It's designed to be easy to use, with a syntax that's straightforward and easy to read. This makes it a great choice for beginners, but it's also powerful enough for more advanced programming tasks.
        <br /> <br />
        In the real world, C# is used in a wide range of applications. It's the go-to language for Windows desktop applications, and it's also used extensively in game development, particularly with the Unity game engine. It's even used in enterprise-level, back-end development.
        <br /> <br />
        So, whether you're looking to build a simple desktop app, create a fun game, or even develop a complex enterprise system, C# is a fantastic choice!

        </p>

        <TopicVideoPlayer
  videoTitle="C# Tutorial In Hindi"
  videoSrc="https://www.youtube.com/embed/SuLiu5AK9Ps"
/>

<TopicVideoPlayer
  videoTitle="C# Tutorial For Beginners - Learn C# Basics in 1 Hour"
  videoSrc="https://www.youtube.com/embed/gfkTfcpWqAY"
/>

<TopicVideoPlayer
  videoTitle="Advanced C# Programming Course"
  videoSrc="https://www.youtube.com/embed/YT8s-90oDC0"
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
          topicName= "CSharp486"
          topicId={486}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/java-485"
          nextTo="/roadmaps/cs/rust-487"
        />
      </div>
    </div>
  )
}

export default CSharp486;