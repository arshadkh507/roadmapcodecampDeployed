import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const WhatIsDomainName005 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What Is a Domain Name? Domains Explained for Beginners - Hostinger",
      url: "https://www.hostinger.com/tutorials/what-is-a-domain-name",
    },
    {
      id: 2,
      title: "What is a domain name? The best beginner’s guide (2023) - GoDaddy",
      url: "https://www.godaddy.com/garage/what-is-a-domain-name/",
    },
    {
      id: 3,
      title: "Domain name - Wikipedia",
      url: "https://en.wikipedia.org/wiki/Domain_name",
    },
    {
      id: 4,
      title: "What Is a Domain Name? - ThoughtCo",
      url: "https://www.thoughtco.com/what-is-a-domain-name-2483189",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Domain Name</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/what-is-http-4"
          nextTo="/roadmaps/frontend/browsers-and-how-they-work-6"
        />
        <hr />

        <h2>What Is Domain Name</h2>
        <p>
          A domain name is a unique address on the internet that helps people find and access websites easily. It is like the online equivalent of a physical address for a house or a business. Just like you use an address to locate a specific place, a domain name allows you to locate a specific website.





        </p>
        <p> A domain name consists of two main parts: the actual name (such as "example") and the domain extension (such as ".com" or ".org"). When you type a domain name into a web browser, it sends a request to a special computer called a DNS (Domain Name System) server, which looks up the corresponding IP address associated with that domain name. The IP address is a series of numbers that identifies the specific location of the website's server on the internet.</p>
        <p>  In simpler terms, a domain name is like a website's unique name or identity, making it easy for people to remember and access websites without needing to remember complex strings of numbers. It plays a crucial role in helping us navigate the internet and find the websites we want to visit.</p>

        <TopicVideoPlayer
          videoTitle="What Is a Domain Name | Domain Names Explained"
          videoSrc="https://www.youtube.com/embed/lMHzpBwPuG8"
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
          topicName="WhatIsDomainName005"
          topicId={5}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/what-is-http-4"
          nextTo="/roadmaps/frontend/browsers-and-how-they-work-6"
        />
      </div>
    </div>
  );
};

export default WhatIsDomainName005;