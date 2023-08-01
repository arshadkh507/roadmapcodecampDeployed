import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const VCSBranching028 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is VCS Branching?",
      url: "https://www.atlassian.com/git/tutorials/using-branches",
    },
    {
      id: 2,
      title: "Why do we use VCS Branching?",
      url: "https://www.perforce.com/blog/vcs/what-branching-and-why-does-it-matter",
    },
    {
      id: 3,
      title: "How to do VCS Branching?",
      url: "https://www.git-tower.com/learn/git/ebook/en/command-line/branching-merging/branching-can-change-your-life",
    },
    {
      id: 4,
      title: "VCS Branching Best Practices",
      url: "https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/best-practices",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>VCS Branching</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/version-control-systems-basic-command-27"
          nextTo="/roadmaps/frontend/version-control-systems-merging-29"
        />
        <hr />

        <h2>VCS Branching</h2>
        <p>
        VCS Branching is a powerful feature in version control systems that allows developers to create a separate line of development. This can be very useful when you want to develop new features or fix bugs without affecting the main codebase. 
        <br /> <br />
        To create a new branch, you can use the command `git branch (branch-name)`. To switch to your newly created branch, you can use `git checkout (branch-name)`. Remember, branching is your friend. It keeps your project organized and allows you to work on different tasks simultaneously without chaos.

        </p>

        <TopicVideoPlayer
          videoTitle="Git Branching - Creating, Switching, and Deleting Branches"
          videoSrc="https://www.youtube.com/embed/sgzkY5vFKQQ"
        />
        <TopicVideoPlayer
          videoTitle="Git Branching and Merging Tutorial"
          videoSrc="https://www.youtube.com/embed/FyAAIHHClqI"
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
          topicName= "VCSBranching028"
          topicId={28}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/version-control-systems-basic-command-27"
          nextTo="/roadmaps/frontend/version-control-systems-merging-29"
        />
      </div>
    </div>
  )
}

export default VCSBranching028;