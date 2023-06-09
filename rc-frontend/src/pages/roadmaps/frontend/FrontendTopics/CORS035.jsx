import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const CORS035 = () => {
  const recommendedReading = [
    {
      id: 5,
      title: "Cross-Origin Resource Sharing (CORS) - MDN Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
    },
    {
      id: 6,
      title: "What is CORS? Codecademy",
      url: "https://www.codecademy.com/articles/what-is-cors",
    },
    {
      id: 7,
      title: "Understanding CORS - freeCodeCamp",
      url: "https://www.freecodecamp.org/news/understanding-cors/",
    },
    {
      id: 8,
      title: "CORS Tutorial - A Guide to Cross-Origin Resource Sharing",
      url: "https://www.youtube.com/watch?v=4KHiSt0oLJ0",
    },
  ];
  /* 
  let articles = [
 {
 id: 1,
 title: "Cross-origin resource sharing - Wikipedia",
 url: "https://en.wikipedia.org/wiki/Cross-origin_resource_sharing",
 },
 {
 id: 2,
 title: "Cross-Origin Resource Sharing (CORS) - HTTP | MDN",
 url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
 },
 {
 id: 3,
 title: "Enable Cross-Origin Requests (CORS) in ASP.NET Core",
 url: "https://learn.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-7.0",
 },
 {
 id: 4,
 title: "Enabling Cross-Origin Requests in ASP.NET Web API 2",
 url: "https://learn.microsoft.com/en-us/aspnet/web-api/overview/security/enabling-cross-origin-requests-in-web-api",
 },
 {
 id: 5,
 title: "Authoritative guide to CORS (Cross-Origin Resource Sharing ... - Moesif",
 url: "https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/",
 },
];

  
  */

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>CORS</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/web-security-knowledge-content-security-policy-34"
          nextTo="/roadmaps/frontend/web-security-knowledge-owasp-security-risks-36"
        />
        <hr />

        <h2>
          what is CORS
        </h2>
        <p>
          CORS stands for Cross-Origin Resource Sharing. It is a mechanism implemented in web browsers that allows web applications running in one domain to request resources from another domain. In simpler terms, it enables web pages to make cross-origin HTTP requests.
        </p>

        <TopicVideoPlayer
          videoTitle="CORS in 100 Seconds"
          videoSrc="https://www.youtube.com/embed/4KHiSt0oLJ0"
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
          topicName="CORS035"
          topicId={1}
          roadmapName="frontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/web-security-knowledge-content-security-policy-34"
          nextTo="/roadmaps/frontend/web-security-knowledge-owasp-security-risks-36"
        />>
      </div>
    </div>
  );
};

export default CORS035;