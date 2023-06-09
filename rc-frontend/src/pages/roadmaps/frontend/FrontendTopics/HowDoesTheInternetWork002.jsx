import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const HowDoesTheInternetWork002 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "How does the Internet Work?",
      url: "https://cs.fyi/guide/how-does-internet-work",
    },
    {
      id: 2,
      title: "How Does the Internet Work? MDN Docs",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work",
    },
    {
      id: 3,
      title: "Introduction to Internet",
      url: "https://youtu.be/Dxcc6ycZ73M",
    },
    {
      id: 4,
      title: "How does the Internet work?",
      url: "https://www.youtube.com/watch?v=TNQsmPf24go",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>How Internet Work</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/internet-1"
          nextTo="/roadmaps/frontend/dns-and-how-it-works-3"
        />
        <hr />

        <h2>Internet</h2>
        <p>
          The Internet is a global network of interconnected computers that communicate using a standardised set of protocols. It provides users with access to a wide range of information, services, and resources.

          from all across the world. The Internet has transformed the way people communicate, work, and obtain information, and it now plays an important role in many aspects of modern life.

        </p>

        <TopicVideoPlayer
          videoTitle="How the Internet Works in 5 Minutes"
          videoSrc="https://www.youtube.com/embed/7_LPdttKXPc"
        />



        <TopicVideoPlayer
          videoTitle="How does your mobile phone work? "
          videoSrc="https://www.youtube.com/embed/1JZG9x_VOwA"
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
          topicName="HowDoesTheInternetWork002"
          topicId={2}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/internet-1"
          nextTo="/roadmaps/frontend/dns-and-how-it-works-3"
        />
      </div>
    </div>
  );
};

export default HowDoesTheInternetWork002;