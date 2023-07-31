import React from "react";
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Optimization146 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is Optimization?",
      url: "https://en.wikipedia.org/wiki/Optimization",
    },
    {
      id: 2,
      title: "How to Optimize?",
      url: "https://www.optimization101.org/how-to-optimize/",
    },
    {
      id: 3,
      title: "Optimization in Context of AI",
      url: "https://towardsdatascience.com/optimization-in-ai-an-overview-6a19a0a6137",
    },
    {
      id: 4,
      title: "Optimization Techniques in AI (Video)",
      url: "https://www.youtube.com/watch?v=0qUAb94CpOw",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Optimization</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/derivatives-145"
          nextTo="/roadmaps/ai/integral-calculus-147"
        />
        <hr />

        <h2>Optimization146</h2>
        <p>
          Optimization, in simple terms, is the process of making something
          better or more effective. In the context of AI, optimization involves
          fine-tuning algorithms and models to improve their performance and
          efficiency. This could mean reducing errors, improving speed, or
          maximizing accuracy. The role of optimization in AI is crucial as it
          directly impacts the effectiveness of AI solutions. Stay tuned for
          more detailed insights and practical tips on how to optimize AI.
        </p>

        <TopicVideoPlayer
          videoTitle="Introduction to Optimization in AI"
          videoSrc="https://www.youtube.com/embed/Q2dewZweAtU"
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
          topicName="Optimization146"
          topicId={146}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/derivatives-145"
          nextTo="/roadmaps/ai/integral-calculus-147"
        />
      </div>
    </div>
  );
};

export default Optimization146;
