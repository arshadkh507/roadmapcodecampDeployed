import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ConvolutionalNeuralNetworks395 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "ml How does the Internet Work?",
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
        <h1>Convolutional Neural Networks</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/artificial-neural-networks-394"
          nextTo="/roadmaps/ml/recurrent-neural-networks-396"
        />
        <hr />

        <h2>ConvolutionalNeuralNetworks395</h2>
        <p>
        Convolutional Neural Networks is currently under development. Please check back soon for updates.
        </p>

        <TopicVideoPlayer
          videoTitle=""
          videoSrc=""
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
          topicName= "ConvolutionalNeuralNetworks395"
          topicId={395}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/artificial-neural-networks-394"
          nextTo="/roadmaps/ml/recurrent-neural-networks-396"
        />
      </div>
    </div>
  )
}

export default ConvolutionalNeuralNetworks395;