import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const WhatIsHosting007 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is Hosting? - Definition from Techopedia",
      url: "https://www.techopedia.com/definition/29023/web-hosting",
    },
    {
      id: 2,
      title: "What Is Web Hosting – Web Hosting Explained for Beginners",
      url: "https://www.hostinger.com/tutorials/what-is-web-hosting/",
    },
    {
      id: 3,
      title: "What is Web Hosting? - Web Hosting Service Explained - AWS",
      url: "https://aws.amazon.com/what-is/web-hosting/",
    },
    {
      id: 4,
      title: "What is host (in computing)? | Definition from TechTarget",
      url: "https://www.techtarget.com/searchnetworking/definition/host",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Hosting</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/browsers-and-how-they-work-6"
          nextTo="/roadmaps/frontend/html-8"
        />
        <hr />

        <h2>What Is Hosting</h2>
        <p>
          Imagine you have a beautiful website that you want to share with the world. But for others to see it, you need a special place to store all the files and data that make up your website. That's where hosting comes in!
        </p>

        <p>Hosting is like renting a plot of land on the internet where your website can live. It's a service provided by hosting companies that give you space on their powerful computers called servers. These servers are connected to the internet 24/7, making your website accessible to anyone, anytime.</p>
        <p>In simpler terms, hosting is like renting a space on the internet where your website can live. It's where you store all your website files and make them available to anyone who wants to visit your site. Hosting companies take care of the technical details and ensure that your website is always up and running.</p>


        <TopicVideoPlayer
          videoTitle="What is Domain and Hosting in Hindi"
          videoSrc="https://www.youtube.com/embed/tkDsQO4OAgE"
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
          topicName="WhatIsHosting007"
          topicId={1}
          roadmapName="rcfrontend"
        />

        <hr />


        <PaginationButtons
          prevTo="/roadmaps/frontend/browsers-and-how-they-work-6"
          nextTo="/roadmaps/frontend/html-8"
        />
      </div>
    </div>
  );
};

export default WhatIsHosting007;