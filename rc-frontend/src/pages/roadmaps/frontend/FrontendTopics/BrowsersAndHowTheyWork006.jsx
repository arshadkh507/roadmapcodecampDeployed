import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const BrowsersAndHowTheyWork006 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "How Browsers Work - freeCodeCamp.org",
      url: "https://www.freecodecamp.org/news/web-application-security-understanding-the-browser-5305ed2f1dac/",
    },
    {
      id: 2,
      title: "Web browser - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Web_browser",
    },
    {
      id: 3,
      title: "What is a web browser? - Mozilla",
      url: "https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/",
    },
    {
      id: 4,
      title: "What is a Browser and How do they work? | BrowserStack",
      url: "https://www.browserstack.com/guide/what-is-browser",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Browsers</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/what-is-domain-name-5"
          nextTo="/roadmaps/frontend/what-is-hosting-7"
        />
        <hr />

        <h2>Browsers And How They Work</h2>
        <p>
          Browsers are the software programs we use to access and view websites on the internet. They are like the gateway that connects us to the vast world of the web. You might be familiar with popular browsers like Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge.
        </p>
        <p>
          When we type a website's URL or click on a link, the browser springs into action. It acts as our trusty guide, taking us on a journey through the internet. Here's a simplified explanation of how browsers work:
        </p>
        <p>
          In simpler terms, browsers are like our personal tour guides through the internet. They understand website addresses, request webpages from servers, put everything together to create the webpages we see, and provide us with a user-friendly way to navigate and interact with websites.
        </p>
        <TopicVideoPlayer
          videoTitle="How do web browsers work? | Web Demystified, Episode 5"
          videoSrc="https://www.youtube.com/embed/uE3UPEK26U0"
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
          topicName="BrowsersAndHowTheyWork006"
          topicId={1}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/what-is-domain-name-5"
          nextTo="/roadmaps/frontend/what-is-hosting-7"
        />
      </div>
    </div>
  );
};

export default BrowsersAndHowTheyWork006;