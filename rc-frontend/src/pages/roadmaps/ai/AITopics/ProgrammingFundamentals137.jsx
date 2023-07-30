import React from "react";
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ProgrammingFundamentals137 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Artificial Intelligence: A Modern Approach",
      url: "http://aima.cs.berkeley.edu/",
    },
    {
      id: 2,
      title:
        "Artificial Intelligence: Structures and Strategies for Complex Problem Solving",
      url: "https://www.amazon.com/Artificial-Intelligence-Structures-Strategies-Complex/dp/0321545893",
    },
    {
      id: 3,
      title:
        "Programming Collective Intelligence: Building Smart Web 2.0 Applications",
      url: "https://www.amazon.com/Programming-Collective-Intelligence-Building-Applications/dp/0596529325",
    },
    {
      id: 4,
      title: "Artificial Intelligence: A Guide to Intelligent Systems",
      url: "https://www.amazon.com/Artificial-Intelligence-Guide-Intelligent-Systems/dp/0321204662",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Programming Fundamentals</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai"
          nextTo="/roadmaps/ai/basic-data-structures-and-algorithms-138"
        />
        <hr />

        <h2>Programming Fundamentals</h2>
        <p>
          Programming Fundamentals for AI involves understanding the basics of
          programming languages, data structures, algorithms, and software
          development principles. It also includes learning about AI-specific
          programming concepts such as machine learning algorithms, neural
          networks, and natural language processing. This knowledge forms the
          foundation for developing AI applications and systems.
        </p>

        <TopicVideoPlayer
          videoTitle="Programming Fundamentals for Artificial Intelligence - Part 1"
          videoSrc="https://www.youtube.com/embed/Z1Yd7upQsXY"
        />
        <TopicVideoPlayer
          videoTitle="Programming Fundamentals for Artificial Intelligence - Part 2"
          videoSrc="https://www.youtube.com/embed/aircAruvnKk"
        />
        <TopicVideoPlayer
          videoTitle="Programming Fundamentals for Artificial Intelligence - Part 3"
          videoSrc="https://www.youtube.com/embed/IHZwWFHWa-w"
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
          topicName="ProgrammingFundamentals137"
          topicId={137}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai"
          nextTo="/roadmaps/ai/basic-data-structures-and-algorithms-138"
        />
      </div>
    </div>
  );
};

export default ProgrammingFundamentals137;
