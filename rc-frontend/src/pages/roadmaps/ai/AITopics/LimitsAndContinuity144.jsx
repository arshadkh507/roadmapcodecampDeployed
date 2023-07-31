import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const LimitsAndContinuity144 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Limits and Continuity in AI",
      url: "https://cs.fyi/guide/limits-continuity-ai",
    },
    {
      id: 2,
      title: "Limits and Continuity in Machine Learning",
      url: "https://developer.mozilla.org/en-US/docs/Learn/AI/Limits_Continuity",
    },
    {
      id: 3,
      title: "Video Tutorial: Limits and Continuity in AI",
      url: "https://youtu.be/Dxcc6ycZ73M",
    },
    {
      id: 4,
      title: "How Limits and Continuity Impact AI Algorithms",
      url: "https://www.youtube.com/watch?v=TNQsmPf24go",
    },
    {
      id: 5,
      title: "The Role of Limits and Continuity in Neural Networks",
      url: "https://www.researchgate.net/publication/limits_continuity_neural_networks",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Limits And Continuity</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/differential-calculus-143"
          nextTo="/roadmaps/ai/derivatives-145"
        />
        <hr />

        <h2>Limits And Continuity</h2>
        <p>
        In the realm of artificial intelligence (AI), 'Limits' and 'Continuity' are fundamental concepts. They help us understand how small changes in input can affect the output of our AI models. 
        'Limits' in AI refers to the value that a function or sequence "approaches" as the input (or index) "approaches" a certain value. In other words, it's about predicting the behavior of your AI model as it gets closer to a certain condition or state.
        <br/>
        <br/>
        'Continuity', on the other hand, is about ensuring that the AI model behaves in a smooth and predictable manner, without any abrupt changes or discontinuities. This is crucial for the stability and reliability of AI systems.
        Understanding these concepts can help you design more effective and robust AI models. Stay tuned for more detailed discussions and practical examples on these topics.

        </p>

        <TopicVideoPlayer
          videoTitle="Understanding Limits and Continuity in AI"
          videoSrc="https://www.youtube.com/embed/Dxcc6ycZ73M"
        />
        <TopicVideoPlayer
          videoTitle="Limits and Continuity in Machine Learning"
          videoSrc="https://www.youtube.com/embed/TNQsmPf24go"
        />
        <TopicVideoPlayer
          videoTitle="Limits and Continuity"
          videoSrc="https://www.youtube.com/embed/9brk313DjV8"
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
          topicName= "LimitsAndContinuity144"
          topicId={144}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/differential-calculus-143"
          nextTo="/roadmaps/ai/derivatives-145"
        />
      </div>
    </div>
  )
}

export default LimitsAndContinuity144;