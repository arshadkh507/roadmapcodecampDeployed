import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ContentSecurityPolicy034 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Content Security Policy - An Introduction",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
    },
    {
      id: 2,
      title: "Understanding Content Security Policy",
      url: "https://www.tutorialspoint.com/content_security_policy/index.htm",
    },
    {
      id: 3,
      title: "Content Security Policy (CSP) Quick Reference Guide",
      url: "https://content-security-policy.com/",
    },
    {
      id: 4,
      title: "Content Security Policy - Web Fundamentals",
      url: "https://developers.google.com/web/fundamentals/security/csp",
    },
    {
      id: 5,
      title: "Using Content Security Policy - Web Security",
      url: "https://www.youtube.com/watch?v=1XUe7XQG9d8",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Content Security Policy</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/web-security-knowledge-https-33"
          nextTo="/roadmaps/frontend/web-security-knowledge-cors-35"
        />
        <hr />

        <h2>Content Security Policy</h2>
        <p>
        Content Security Policy, often abbreviated as CSP, is a simple yet powerful tool that helps in preventing a wide range of attacks, including Cross-site scripting (XSS) and other code injection attacks. It's like a security guard for your web application, ensuring that it only executes and displays safe content.

        We use CSP because it provides an extra layer of security that helps to detect and mitigate certain types of attacks, including XSS and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware.

        CSP is primarily implemented and used by web developers in the headers of HTTP responses from a web server. It's like setting up a security fence around your application, defining what is and isn't allowed, making it a crucial part of any web application's security.

        </p>

        <TopicVideoPlayer
          videoTitle="Content-Security-Policy to secure your web app in 3 min"
          videoSrc="https://www.youtube.com/embed/pBKB4wsQK48"
        />
        <TopicVideoPlayer
          videoTitle="Content Security Policy meta tags"
          videoSrc="https://www.youtube.com/embed/1-sx4AmjGCI"
        />
        <TopicVideoPlayer
          videoTitle="Missing HTTP Security Headers - Bug Bounty Tips"
          videoSrc="https://www.youtube.com/embed/064yDG7Rz80"
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
          topicName= "ContentSecurityPolicy034"
          topicId={34}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/web-security-knowledge-https-33"
          nextTo="/roadmaps/frontend/web-security-knowledge-cors-35"
        />
      </div>
    </div>
  )
}

export default ContentSecurityPolicy034;