import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";


const WhatIsHTTP004 = () => {

  const recommendedReading = [
    {
      id: 1,
      title: "Everything you need to know about HTTP",
      url: "https://cs.fyi/guide/http-in-depth",
    },
    {
      id: 2,
      title: "What is HTTP?",
      url: "https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/",
    },
    {
      id: 3,
      title: "How HTTPS Works …in a comic!",
      url: "https://howhttps.works/",
    },
    {
      id: 4,
      title: "An overview of HTTP",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
    },
    {
      id: 5,
      title: "Journey to HTTP/2",
      url: "https://kamranahmed.info/blog/2016/08/13/http-in-depth",
    },
    {
      id: 6,
      title: "HTTP/3 From A To Z: Core Concepts",
      url: "https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/",
    },
    {
      id: 7,
      title: "HTTP/3 Is Now a Standard: Why Use It and How to Get Started",
      url: "https://thenewstack.io/http-3-is-now-a-standard-why-use-it-and-how-to-get-started/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>

        <h1>HTTP</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/dns-and-how-it-works-3"
          nextTo="/roadmaps/frontend/what-is-domain-name-5"
        />
        <hr />


        <h2>What is Http</h2>
        <p>
          HTTP is the TCP/IP based application layer communication protocol which standardizes how the client and server communicate with each other. HTTP follows a classical “Client-Server model” with a client opening a connection request, then waiting until it receives a response. HTTP is a stateless protocol, that means that the server does not keep any data (state) between two requests.
        </p>

        <TopicVideoPlayer
          videoTitle="HTTP Crash Course & Exploration"
          videoSrc="https://www.youtube.com/embed/iYM2zFP3Zn0"
        />

        <hr />

        <div className={styles.topicResources}>
          <h2>Recommended Reading</h2>
          <ul>
            {recommendedReading.map((item) => (
              <li key={item.id}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <TaskStateButtons
          topicName="What is HTTP"
          topicId={4}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/dns-and-how-it-works-3"
          nextTo="/roadmaps/frontend/what-is-domain-name-5"
        />


      </div>
    </div>
  );
};


export default WhatIsHTTP004;


/* const rcFrontend = [
  {
    topicId: 1,
    topicName: "Internet",
    topicPath: "/roadmaps/frontend/internet-1"
  },
  {
    topicId: 2,
    topicName: "How does the internet work?",
    topicPath: "/roadmaps/frontend/how-does-the-internet-work?-2"
  },
]; */