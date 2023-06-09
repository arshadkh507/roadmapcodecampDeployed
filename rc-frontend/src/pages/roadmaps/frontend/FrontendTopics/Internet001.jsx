import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Internet001 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "How does the Internet Work?",
      url: "https://cs.fyi/guide/how-does-internet-work",
    },
    {
      id: 2,
      title: "The internet, explained",
      url: "https://www.vox.com/2014/6/16/18076282/the-internet",
    },
    {
      id: 3,
      title: "How Does the Internet Work?",
      url: "http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm",
    },
    {
      id: 4,
      title: "Introduction to Internet",
      url: "https://roadmap.sh/guides/what-is-internet",
    },
    {
      id: 5,
      title: "Learn How the Web Works",
      url: "https://internetfundamentals.com/",
    },
    {
      id: 6,
      title: "How does the Internet work?",
      url: "https://www.youtube.com/watch?v=x3c1ih2NJEg",
    },
    {
      id: 4,
      title: "How the Internet Works in 5 Minutes",
      url: "https://www.youtube.com/watch?v=7_LPdttKXPc",
    },
    {
      id: 5,
      title: "How does the Internet work?",
      url: "https://www.youtube.com/watch?v=x3c1ih2NJEg",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Internet</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend"
          nextTo="/roadmaps/frontend/how-does-the-internet-work-2"
        />
        <hr />

        <h2>Internet</h2>
        <p>
          The Internet is a global network of interconnected computers that communicate using a standardised set of protocols. It provides users with access to a wide range of information, services, and resources.

          from all across the world. The Internet has transformed the way people communicate, work, and obtain information, and it now plays an important role in many aspects of modern life.

        </p>


        <TopicVideoPlayer
          videoTitle="How does internet works?"
          videoSrc="https://www.youtube.com/embed/7_LPdttKXPc"
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
          topicName="Internet"
          topicId={1}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend"
          nextTo="/roadmaps/frontend/how-does-the-internet-work-2"
        />
      </div>
    </div>
  );
};

export default Internet001;
