import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const RepoHostinigServiceGithub030 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding GitHub - A Journey For Beginners, Part 1",
      url: "https://medium.com/@onejohi/understanding-github-a-journey-for-beginners-part-1-43f73a824589",
    },
    {
      id: 2,
      title: "GitHub For Beginners: Don't Get Scared, Get Started",
      url: "https://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/",
    },
    {
      id: 3,
      title: "GitHub Tutorial For Beginners - GitHub Basics for Mac or Windows & Source Control Basics",
      url: "https://www.youtube.com/watch?v=0fKg7e37bQE",
    },
    {
      id: 4,
      title: "An Intro to Git and GitHub for Beginners (Tutorial)",
      url: "https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners",
    },
    {
      id: 5,
      title: "How to Use GitHub for Beginners",
      url: "https://www.guru99.com/github-tutorial.html",
    },
    {
      id: 6,
      title: "GitHub for Beginners: A Comprehensive Guide",
      url: "https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Repo Hostinig Service Github</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/version-control-systems-merging-29"
          nextTo="/roadmaps/frontend/repo-hosting-service-gitlab-31"
        />
        <hr />

        <h2>Repo Hostinig Service Github</h2>
        <p>
        GitHub is a hosting service for your repositories. In the world of coding, we use it as a common platform to share our work, collaborate with other developers, and keep track of all the changes made. It's like a social network for programmers with the superpower of version control. So, whether you're working alone or in a team, GitHub is a crucial tool for smooth and efficient project management.

        </p>

        <TopicVideoPlayer
          videoTitle="GitHub Tutorial for Beginners"
          videoSrc="https://www.youtube.com/embed/0fKg7e37bQE"
        />
        <TopicVideoPlayer
          videoTitle="GitHub Basics for Mac or Windows"
          videoSrc="https://www.youtube.com/embed/Z9fIBT2NBGY"
        />
        <TopicVideoPlayer
          videoTitle="Understanding GitHub - A Journey For Beginners"
          videoSrc="https://www.youtube.com/embed/nhNq2kIvi9s"
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
          topicName= "RepoHostinigServiceGithub030"
          topicId={30}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/version-control-systems-merging-29"
          nextTo="/roadmaps/frontend/repo-hosting-service-gitlab-31"
        />
      </div>
    </div>
  )
}

export default RepoHostinigServiceGithub030;