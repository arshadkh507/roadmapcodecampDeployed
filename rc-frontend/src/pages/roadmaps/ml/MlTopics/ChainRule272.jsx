import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ChainRule272 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding the Chain Rule in Calculus",
      url: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new/ab-3-1a/a/chain-rule-review",
    },
    {
      id: 2,
      title: "The Chain Rule Explained",
      url: "https://www.mathsisfun.com/calculus/chain-rule.html",
    },
    {
      id: 3,
      title: "Why the Chain Rule Works",
      url: "https://www.youtube.com/watch?v=YG15m2VwSjA",
    },
    {
      id: 4,
      title: "How the Chain Rule is used in Machine Learning",
      url: "https://towardsdatascience.com/understanding-the-chain-rule-of-calculus-in-deep-learning-7e0b47a941ba",
    },
    {
      id: 5,
      title: "Chain Rule in Neural Networks",
      url: "https://medium.com/@14prakash/back-propagation-is-very-simple-who-made-it-complicated-97b794c97e5c",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Chain Rule</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/derivatives-271"
          nextTo="/roadmaps/ml/gradient-273"
        />
        <hr />

        <h2>Chain Rule</h2>
        <p>
        The Chain Rule is a fundamental concept in calculus that's extensively used in machine learning. It's a method for finding the derivative of composite functions, or functions that are made up of multiple smaller functions. 
<br /><br />
        In the realm of machine learning, the Chain Rule plays a crucial role in the training of neural networks through a process called backpropagation. Backpropagation is how neural networks learn from their mistakes, adjusting their weights and biases in response to the errors they make during training. The Chain Rule is used to calculate these adjustments, making it an essential part of the machine learning process.
        <br /><br />
        So, whether you're diving into the depths of neural networks, or just brushing up on your calculus, understanding the Chain Rule is a must!

        </p>

        <TopicVideoPlayer
          videoTitle="Chain rule | Derivative rules | AP Calculus AB"
          videoSrc="https://www.youtube.com/embed/0T0QrHO56qg"
        />
        <TopicVideoPlayer
          videoTitle="Chain Rule For Finding Derivatives"
          videoSrc="https://www.youtube.com/embed/HaHsqDjWMLU"
        />
        <TopicVideoPlayer
          videoTitle="Tutorial 6-Chain Rule of Differentiation with BackPropagation"
          videoSrc="https://www.youtube.com/embed/CRB266Eyjkg"
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
          topicName= "ChainRule272"
          topicId={272}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/derivatives-271"
          nextTo="/roadmaps/ml/gradient-273"
        />
      </div>
    </div>
  )
}

export default ChainRule272;