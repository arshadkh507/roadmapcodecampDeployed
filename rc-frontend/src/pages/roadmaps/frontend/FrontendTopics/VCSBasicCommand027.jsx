import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const VCSBasicCommand027 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Version Control Systems Basic Commands",
      url: "https://www.atlassian.com/git/tutorials/what-is-version-control",
    },
    {
      id: 2,
      title: "How to use Version Control Systems",
      url: "https://www.tutorialspoint.com/git/git_basic_concepts.htm",
    },
    {
      id: 3,
      title: "Understanding Version Control Systems",
      url: "https://www.youtube.com/watch?v=2sjqTHE0zok",
    },
    {
      id: 4,
      title: "Version Control Systems in Practice",
      url: "https://www.youtube.com/watch?v=HVsySz-h9r4",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>VCS Basic Command</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/version-control-systems-26"
          nextTo="/roadmaps/frontend/version-control-systems-branching-28"
        />
        <hr />

        <h2>Version Control Systems</h2>
        <p>
        Version Control Systems, often abbreviated as VCS, are a fundamental part of modern software development. They allow us to track changes, revert to previous versions, and collaborate with ease. Some basic commands include 'commit', 'push', and 'pull', which respectively allow us to save changes, send them to a remote repository, and fetch the latest updates from that repository. Stay tuned as we delve deeper into these concepts and commands in the upcoming sections.

        </p>
        <TopicVideoPlayer
          videoTitle="What Is Version Control? | Git Version Control | Version Control In Software Engineering|Simplilearn"
          videoSrc="https://www.youtube.com/embed/Yc8sCSeMhi4"
        />
        <TopicVideoPlayer
          videoTitle="What is Git? Explained in 2 Minutes!"
          videoSrc="https://www.youtube.com/embed/2ReR1YJrNOM"
        />


<TopicVideoPlayer
          videoTitle="Git and GitHub for Beginners - Crash Course"
          videoSrc="https://www.youtube.com/embed/RGOj5yH7evk"
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
          topicName= "VCSBasicCommand027"
          topicId={27}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/version-control-systems-26"
          nextTo="/roadmaps/frontend/version-control-systems-branching-28"
        />
      </div>
    </div>
  )
}

export default VCSBasicCommand027;