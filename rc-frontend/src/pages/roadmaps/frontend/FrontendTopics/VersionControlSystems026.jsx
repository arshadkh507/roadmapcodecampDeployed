import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const VersionControlSystems026 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is Version Control? - Atlassian",
      url: "https://www.atlassian.com/git/tutorials/what-is-version-control",
    },
    {
      id: 2,
      title: "Why Use Version Control Systems - GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/why-version-control-systems/",
    },
    {
      id: 3,
      title: "How to use Git & GitHub - GitHub Docs",
      url: "https://docs.github.com/en/get-started/quickstart/set-up-git",
    },
    {
      id: 4,
      title: "Version Control Systems - Tutorialspoint",
      url: "https://www.tutorialspoint.com/Version-Control-Systems",
    },
    {
      id: 5,
      title: "Understanding Version Control Systems - Medium",
      url: "https://medium.com/@aenon/understanding-version-control-systems-1d97c668f1a3",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Version Control Systems</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/understand-the-concepts-25"
          nextTo="/roadmaps/frontend/version-control-systems-basic-command-27"
        />
        <hr />

        <h2>Version Control Systems</h2>
        <p>
        Version Control Systems, often referred to as VCS, are a type of software tools that help software teams manage changes to source code over time. They keep track of every modification to the code in a special kind of database. If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake while minimizing disruption to all team members.
<br /> <br />
        We use VCS for several reasons. It allows us to collaborate with others, making it possible for multiple developers to work on a single project without stepping on each other's toes. It gives us a safety net, where we can experiment without worrying about breaking things permanently. And lastly, it provides us with a history of our project, making it easier to find out when and why a particular change was made.

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
          topicName= "VersionControlSystems026"
          topicId={26}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/understand-the-concepts-25"
          nextTo="/roadmaps/frontend/version-control-systems-basic-command-27"
        />
      </div>
    </div>
  )
}

export default VersionControlSystems026;