import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const CORS035 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding CORS",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
    },
    {
      id: 2,
      title: "CORS: Cross-Origin Resource Sharing",
      url: "https://www.codecademy.com/articles/what-is-cors",
    },
    {
      id: 3,
      title: "CORS guide on MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
    },
    {
      id: 4,
      title: "CORS tutorial",
      url: "https://www.youtube.com/watch?v=4KHiSt0o8rM",
    },
    {
      id: 5,
      title: "CORS explained",
      url: "https://www.youtube.com/watch?v=x_Z6iYY5ibc",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>CORS</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/web-security-knowledge-content-security-policy-34"
          nextTo="/roadmaps/frontend/web-security-knowledge-owasp-security-risks-36"
        />
        <hr />

        <h2>CORS (Cross Origin Resource Sharing)</h2>
        <p>
        CORS, or Cross-Origin Resource Sharing, is a mechanism that allows many resources (e.g., fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated. It's a clever technique that empowers the web server to securely allow its resources to be accessed by a web page from a different domain. This cross-domain sharing helps in creating a way for user-agents to safely perform cross-site HTTP requests.
<br /> <br />
        We use CORS because it provides a secure way to handle cross-origin requests. It allows servers to specify who can access its assets and how the assets can be accessed. CORS is essential because it maintains the security in the handling of requests and prevents malicious activity.
        <br /> <br />

        Implementing CORS involves setting appropriate HTTP headers. For example, the Access-Control-Allow-Origin header can be used to specify which domains are allowed to access the resources. If a browser receives a response that doesn't match the origin of the request, it will block the request for security reasons.

        </p>

        <TopicVideoPlayer
          videoTitle="CORS in 100 Seconds"
          videoSrc="https://www.youtube.com/embed/4KHiSt0oLJ0"
        />
        <TopicVideoPlayer
          videoTitle="Cross Origin Resource Sharing (Explained by Example)"
          videoSrc="https://www.youtube.com/embed/Ka8vG5miErk"
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
          topicName= "CORS035"
          topicId={35}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/web-security-knowledge-content-security-policy-34"
          nextTo="/roadmaps/frontend/web-security-knowledge-owasp-security-risks-36"
        />
      </div>
    </div>
  )
}

export default CORS035;