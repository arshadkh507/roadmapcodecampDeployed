import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const OWASPSecurityRisks036 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "OWASP Top 10 Security Risks",
      url: "https://owasp.org/www-project-top-ten/",
    },
    {
      id: 2,
      title: "OWASP Security Risks Explained",
      url: "https://www.acunetix.com/blog/articles/owasp-top-10-security-risks-explained/",
    },
    {
      id: 3,
      title: "Understanding OWASP Security Risks",
      url: "https://www.imperva.com/learn/application-security/owasp-top-10-application-security-risks/",
    },
    {
      id: 4,
      title: "OWASP Security Risks and Mitigation Techniques",
      url: "https://www.csoonline.com/article/2130877/the-owasp-top-10-security-risks-explained.html",
    },
    {
      id: 5,
      title: "OWASP Security Risks: A Deep Dive",
      url: "https://www.youtube.com/watch?v=n1Zi3rpqJcg",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>OWASP Security Risks</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/web-security-knowledge-cors-35"
          nextTo="/roadmaps/frontend/package-managers-npm-37"
        />
        <hr />

        <h2>OWASP Security Risks</h2>
        <p>
        OWASP Security Risks refer to the top 10 most critical web application security risks identified by the Open Web Application Security Project (OWASP). These risks provide a comprehensive guide to the most critical vulnerabilities that are commonly found in web applications, often exploited by malicious attackers.
<br /><br />
        These risks are used by security professionals and organizations around the world to understand and minimize the potential threats to their web applications. By understanding and addressing these risks, organizations can significantly improve the security of their applications and reduce the likelihood of an attack.
        <br /><br />

        Stay tuned as we delve deeper into each of these risks, their implications, and how to mitigate them in the upcoming sections.

        </p>

        <TopicVideoPlayer
          videoTitle="OWASP Top 10 Web Application Security Risks"
          videoSrc="https://www.youtube.com/embed/wUaeKEl1RCw"
        />
        <TopicVideoPlayer
          videoTitle="Web Application Security and OWASP - Top 10 Security Flaws with Examples"
          videoSrc="https://www.youtube.com/embed/j5PuYFCS0Iw"
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
          topicName= "OWASPSecurityRisks036"
          topicId={36}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/web-security-knowledge-cors-35"
          nextTo="/roadmaps/frontend/package-managers-npm-37"
        />
      </div>
    </div>
  )
}

export default OWASPSecurityRisks036;