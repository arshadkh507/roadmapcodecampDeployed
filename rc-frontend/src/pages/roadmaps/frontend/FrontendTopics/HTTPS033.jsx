import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const HTTPS033 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "HTTPS Explained",
      url: "https://www.cloudflare.com/learning/ssl/what-is-https/",
    },
    {
      id: 2,
      title: "What is HTTPS? - MDN Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
    },
    {
      id: 3,
      title: "Introduction to HTTPS",
      url: "https://youtu.be/S2iBR2ZlZf0",
    },
    {
      id: 4,
      title: "How does HTTPS work?",
      url: "https://www.youtube.com/watch?v=JCvPnwpWVUQ",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>HTTPS</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/repo-hosting-service-bitbucket-32"
          nextTo="/roadmaps/frontend/web-security-knowledge-content-security-policy-34"
        />
        <hr />

        <h2>HTTPS</h2>
        <p>
        HTTPS, short for Hypertext Transfer Protocol Secure, is a protocol used for secure communication over a computer network. It's like a secure version of HTTP - it uses SSL/TLS to create a secure encrypted connection. We use HTTPS because it protects against eavesdroppers, man-in-the-middle attacks, and hijackers who might want to alter the website's content. You'll often see it used in online banking, email services, social media sites, and any other websites where secure personal data might be transferred. So, next time you see 'https://' in your browser's address bar, you'll know your data is being kept safe!

        </p>

        <TopicVideoPlayer
          videoTitle="HTTPS Explained"
          videoSrc="https://www.youtube.com/embed/S2iBR2ZlZf0"
        />
        <TopicVideoPlayer
          videoTitle="SSL, TLS, HTTP, HTTPS Explained"
          videoSrc="https://www.youtube.com/embed/hExRDVZHhig"
        />
        <TopicVideoPlayer
          videoTitle="How does HTTPS work?"
          videoSrc="https://www.youtube.com/embed/JCvPnwpWVUQ"
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
          topicName= "HTTPS033"
          topicId={33}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/repo-hosting-service-bitbucket-32"
          nextTo="/roadmaps/frontend/web-security-knowledge-content-security-policy-34"
        />
      </div>
    </div>
  )
}

export default HTTPS033;