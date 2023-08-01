import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const UnderstandTheConcepts025 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Version Control Systems",
      url: "https://www.atlassian.com/git/tutorials/what-is-version-control",
    },
    {
      id: 2,
      title: "Introduction to Repository Hosting Services",
      url: "https://www.git-tower.com/learn/git/ebook/en/command-line/appendix/best-hosting-platforms",
    },
    {
      id: 3,
      title: "Version Control in Software Engineering",
      url: "https://www.geeksforgeeks.org/version-control-systems/",
    },
    {
      id: 4,
      title: "Choosing a Repository Hosting Service",
      url: "https://www.linode.com/docs/guides/choosing-a-repository-hosting-service/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Understand The Concepts</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/es6-and-modular-javascript-24"
          nextTo="/roadmaps/frontend/version-control-systems-26"
        />
        <hr />

        <h2>UnderstandTheConcepts025</h2>
        <p>
        "Understand The Concepts" is a topic that delves into the heart of version control systems and repository hosting services. It's a fascinating journey that will take you through the intricacies of managing and storing your code efficiently. Stay tuned as we're working hard to bring this content to you soon.
        </p>

        <TopicVideoPlayer
          videoTitle="What is Version Control | Version Control System in Hindi"
          videoSrc="https://www.youtube.com/embed/VyMDCJwTYVk"
        />
        <TopicVideoPlayer
          videoTitle="Git and GitHub for Beginners - Crash Course"
          videoSrc="https://www.youtube.com/embed/RGOj5yH7evk"
        />
        <TopicVideoPlayer
          videoTitle="Git and GitHub for Beginners Tutorial"
          videoSrc="https://www.youtube.com/embed/tRZGeaHPoaw"
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
          topicName= "UnderstandTheConcepts025"
          topicId={25}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/es6-and-modular-javascript-24"
          nextTo="/roadmaps/frontend/version-control-systems-26"
        />
      </div>
    </div>
  )
}

export default UnderstandTheConcepts025;