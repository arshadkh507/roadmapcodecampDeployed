import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const DNSAndHowItWorks003 = () => {

  const recommendedReading = [
    {
      id: 1,
      title: "What is DNS? and How Does DNS Work? (Explained for Beginners)",
      url: "https://www.wpbeginner.com/glossary/dns/",
    },
    {
      id: 2,
      title: "What is DNS? | How DNS works | Cloudflare",
      url: "https://www.cloudflare.com/learning/dns/what-is-dns/",
    },
    {
      id: 3,
      title: "What Is DNS? Everything You Need to Know About the Web's Phone Book - PCMag",
      url: "https://www.pcmag.com/how-to/what-is-dns-how-it-works-domain-name-system",
    },
    {
      id: 4,
      title: "How to Create an Effective SEO Strategy In 2022 - Backlinko",
      url: "https://backlinko.com/seo-strategy",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>DNS-Domain Name System</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/how-does-the-internet-work-2"
          nextTo="/roadmaps/frontend/what-is-http-4"
        />
        <hr />

        <h2>DNS And How It Works</h2>
        <p>
          DNS stands for Domain Name System. It’s a system that lets you connect to websites by matching human-readable domain names (like google.com) with the unique ID of the server where a website is stored. Think of the DNS system as the internet’s phonebook1.

          How does DNS work? Imagine you want to visit a website, say youtube.com. You type the name of the website in your browser’s address bar and hit enter. But how does your browser know where to find youtube.com on the internet? That’s where DNS comes in.
        </p>

        <TopicVideoPlayer
          videoTitle="What is DNS and How Does It Work?"
          videoSrc="https://www.youtube.com/embed/9d0iu2Q6iMU"
        />
        <TopicVideoPlayer
          videoTitle="How DNS Works"
          videoSrc="https://www.youtube.com/embed/mpQZVYPuDGU"
        />

        <TopicVideoPlayer
          videoTitle="DNS Explained - Domain Name System"
          videoSrc="https://www.youtube.com/embed/72snZctFFtA"
        />

        <TopicVideoPlayer
          videoTitle="How Does DNS Work?"
          videoSrc="https://www.youtube.com/embed/2ZUxoi7YNgs"
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
          topicName="DNSAndHowItWorks003"
          topicId={3}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/how-does-the-internet-work-2"
          nextTo="/roadmaps/frontend/what-is-http-4"
        />
      </div>
    </div>
  );
};

export default DNSAndHowItWorks003;