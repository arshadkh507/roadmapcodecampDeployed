import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const IndefiniteIntegrals149 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Indefinite Integrals",
      url: "https://www.mathsisfun.com/calculus/indefinite-integrals.html",
    },
    {
      id: 2,
      title: "Indefinite Integrals in AI: Why and How?",
      url: "https://www.analyticsvidhya.com/blog/2020/02/integral-calculus-ai-machine-learning/",
    },
    {
      id: 3,
      title: "Application of Indefinite Integrals in AI",
      url: "https://towardsdatascience.com/integrals-and-ai-df3b6fb389e2",
    },
    {
      id: 4,
      title: "Indefinite Integrals: A Comprehensive Guide",
      url: "https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-1/a/indefinite-integrals",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Indefinite Integrals</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/definite-integrals-148"
          nextTo="/roadmaps/ai/areas-and-volumes-150"
        />
        <hr />

        <h2>IndefiniteIntegrals149</h2>
        <p>
        Indefinite integrals, often simply called integrals, are fundamental concepts in calculus. They represent the 'opposite' of derivatives, and their main function is to calculate the area under a curve. <br /><br />
        In the field of Artificial Intelligence (AI), indefinite integrals play a crucial role in various areas. They are used in algorithms for learning, predicting, and data analysis. For instance, they are used in the backpropagation process of training neural networks, where the aim is to minimize the error function.<br /><br />
        Understanding indefinite integrals can provide a deeper insight into how these AI algorithms work and can lead to the development of more efficient and effective models. So, keep exploring and happy learning!

        </p>

        <TopicVideoPlayer
          videoTitle="What are Indefinite Integrals?"
          videoSrc="https://www.youtube.com/embed/o75AqTInKDU"
        />
        <TopicVideoPlayer
          videoTitle="Why use Indefinite Integrals in AI?"
          videoSrc="https://www.khanacademy.org/math/integral-calculus"
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
          topicName= "IndefiniteIntegrals149"
          topicId={149}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/definite-integrals-148"
          nextTo="/roadmaps/ai/areas-and-volumes-150"
        />
      </div>
    </div>
  )
}

export default IndefiniteIntegrals149;