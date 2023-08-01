import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const VCSMerging029 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Version Control System (VCS) Merging",
      url: "https://www.atlassian.com/git/tutorials/using-branches/merge-strategy",
    },
    {
      id: 2,
      title: "How to use Git Merge: A Guide",
      url: "https://www.freecodecamp.org/news/git-merge-branch/",
    },
    {
      id: 3,
      title: "VCS Merging: Why and How to Use It",
      url: "https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/merge-conflicts",
    },
    {
      id: 4,
      title: "Resolving merge conflicts in Git",
      url: "https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>VCS Merging</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/version-control-systems-branching-28"
          nextTo="/roadmaps/frontend/repo-hosting-service-github-30"
        />
        <hr />

        <h2>VCS Merging</h2>
        <p>
        VCS Merging is a process in Version Control Systems where the contents of different branches are combined. It's like taking two separate paths of development and joining them together. This is done by creating a new commit that has pointers to the two recent commits being merged. It's a powerful tool that allows teams to efficiently collaborate and manage changes to a project. <br /> <br />
        To do a merge, you typically use the 'git merge' command followed by the name of the branch you want to merge into the current working branch. Remember, merging is a crucial part of any collaborative coding environment, so it's important to do it carefully to avoid conflicts.

        </p>

        <TopicVideoPlayer
          videoTitle="Git Branching and Merging with Example"
          videoSrc="https://www.youtube.com/embed/hufGg2mf7eA"
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
          topicName= "VCSMerging029"
          topicId={29}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/version-control-systems-branching-28"
          nextTo="/roadmaps/frontend/repo-hosting-service-github-30"
        />
      </div>
    </div>
  )
}

export default VCSMerging029;