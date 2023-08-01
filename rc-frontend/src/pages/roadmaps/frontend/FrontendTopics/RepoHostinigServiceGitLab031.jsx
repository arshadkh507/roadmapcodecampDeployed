import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const RepoHostinigServiceGitLab031 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "GitLab Basics: Create and Add your SSH Public Key",
      url: "https://docs.gitlab.com/ee/gitlab-basics/create-your-ssh-keys.html",
    },
    {
      id: 2,
      title: "GitLab Flow",
      url: "https://docs.gitlab.com/ee/topics/gitlab_flow.html",
    },
    {
      id: 3,
      title: "Introduction to GitLab CI/CD",
      url: "https://docs.gitlab.com/ee/ci/introduction/",
    },
    {
      id: 4,
      title: "Working with merge requests in GitLab",
      url: "https://docs.gitlab.com/ee/user/project/merge_requests/",
    },
    {
      id: 5,
      title: "GitLab and Kubernetes: Everything you need to know",
      url: "https://www.gitlab.com/topics/kubernetes/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Repo Hostinig Service GitLab</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/repo-hosting-service-github-30"
          nextTo="/roadmaps/frontend/repo-hosting-service-bitbucket-32"
        />
        <hr />

        <h2>Repo Hostinig Service GitLab</h2>
        <p>
        GitLab is a web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and continuous integration/continuous deployment pipeline features, using an open-source license. It's a place where developers can host their projects, collaborate on code, and track progress of their tasks. It's widely used by many organizations for its seamless integration with various tools and its ability to automate most of the manual work in the development lifecycle.

        </p>

        <TopicVideoPlayer
          videoTitle="GitLab Tutorial For Beginners | What Is GitLab And How To Use It? | GitLab Tutorial "
          videoSrc="https://www.youtube.com/embed/mX7lKoabmDw"
        />
        <TopicVideoPlayer
          videoTitle="GitLab CI CD Tutorial for Beginners [Crash Course]"
          videoSrc="https://www.youtube.com/embed/qP8kir2GUgo"
        />
        <TopicVideoPlayer
          videoTitle="how to create git repository and push to gitlab"
          videoSrc="https://www.youtube.com/embed/aA4S3Fl45jo"
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
          topicName= "RepoHostinigServiceGitLab031"
          topicId={31}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/repo-hosting-service-github-30"
          nextTo="/roadmaps/frontend/repo-hosting-service-bitbucket-32"
        />
      </div>
    </div>
  )
}

export default RepoHostinigServiceGitLab031;