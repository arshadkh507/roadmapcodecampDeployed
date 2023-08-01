import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const RepoHostinigServiceBitbucket032 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Bitbucket Tutorial for Beginners",
      url: "https://www.tutorialspoint.com/bitbucket/index.htm",
    },
    {
      id: 2,
      title: "Bitbucket vs GitHub: The Best Version Control Software for Business?",
      url: "https://stackify.com/bitbucket-vs-github/",
    },
    {
      id: 3,
      title: "How to use Bitbucket",
      url: "https://www.youtube.com/watch?v=BtO8jF6wQmo",
    },
    {
      id: 4,
      title: "Getting Started with Bitbucket for Version Control",
      url: "https://www.youtube.com/watch?v=jiP45rEOEbA",
    },
    {
      id: 5,
      title: "Bitbucket Repository Management",
      url: "https://confluence.atlassian.com/bitbucket/repository-setup-877174034.html",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Repo Hostinig Service Bitbucket</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/repo-hosting-service-gitlab-31"
          nextTo="/roadmaps/frontend/web-security-knowledge-https-33"
        />
        <hr />

        <h2>Repo Hostinig Service Bitbucket</h2>
        <p>
        Bitbucket is a web-based version control repository hosting service owned by Atlassian, for source code and development projects that use either Mercurial or Git revision control systems. Bitbucket offers both commercial plans and free accounts. It offers free accounts with an unlimited number of private repositories (which can have up to five users in the case of free accounts) as of September 2010, Bitbucket also provides a number of features such as pull requests with code review and comments, Jira and Trello integration for issue tracking, and Wiki for the repositories.

        </p>

        <TopicVideoPlayer
          videoTitle="What Is Bitbucket | How To Use Bitbucket | Bitbucket | Introduction To Bitbucket"
          videoSrc="https://www.youtube.com/embed/AOnMg50-ttE"
        />
        <TopicVideoPlayer
          videoTitle="Git Tutorial - Git Crash Course using BitBucket"
          videoSrc="https://www.youtube.com/embed/1tC6Z57AOkY"
        />
        <TopicVideoPlayer
          videoTitle="How to create BitBucket Repo and BitBucket CI/CD Pipelines? | Tech Primers"
          videoSrc="https://www.youtube.com/embed/JJct0MV6YDs"
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
          topicName= "RepoHostinigServiceBitbucket032"
          topicId={32}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/repo-hosting-service-gitlab-31"
          nextTo="/roadmaps/frontend/web-security-knowledge-https-33"
        />
      </div>
    </div>
  )
}

export default RepoHostinigServiceBitbucket032;