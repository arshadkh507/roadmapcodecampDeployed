import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const PartialDerivatives276 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Partial Derivatives",
      url: "https://www.mathsisfun.com/calculus/derivatives-partial.html",
    },
    {
      id: 2,
      title: "Partial Derivatives in Machine Learning",
      url: "https://towardsdatascience.com/understanding-partial-derivatives-in-machine-learning-c1a7c66a1a2f",
    },
    {
      id: 3,
      title: "Partial Derivatives and Their Applications",
      url: "https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivatives-and-the-gradient/a/partial-derivatives",
    },
    {
      id: 4,
      title: "Partial Derivatives in Neural Networks",
      url: "https://medium.com/@a.mirzaei69/partial-derivative-in-neural-network-214c0b0658ba",
    },
    {
      id: 5,
      title: "Partial Derivatives in Gradient Descent",
      url: "https://machinelearningmastery.com/gentle-introduction-gradient-descent-optimization/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Partial Derivatives</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/jacobian-275"
          nextTo="/roadmaps/ml/taylor-series-277"
        />
        <hr />

        <h2>Partial Derivatives</h2>
        <p>
        Partial derivatives are a type of derivative that allow us to measure how a function changes when we alter just one of its variables, keeping the others constant. In the realm of machine learning, they play a crucial role in optimization algorithms like gradient descent, which are used to minimize error functions by iteratively adjusting model parameters. By understanding how a small change in a parameter affects the error, we can adjust the parameter in the direction that reduces the error most rapidly. So, in essence, partial derivatives are the compass that guides our machine learning models towards the best fit.

        </p>

        <TopicVideoPlayer
          videoTitle="Partial Derivatives - Multivariable Calculus"
          videoSrc="https://www.youtube.com/embed/JAf_aSIJryg"
        />
        <TopicVideoPlayer
          videoTitle="Partial derivatives, introduction"
          videoSrc="https://www.youtube.com/embed/AXqhWeUEtQU"
        />
        <TopicVideoPlayer
          videoTitle=". Backpropagation: Find Partial Derivatives"
          videoSrc="https://www.youtube.com/embed/lZrIPRnoGQQ"
        />
        <TopicVideoPlayer
          videoTitle="Partial Derivatives and the Gradient of a Function"
          videoSrc="https://www.youtube.com/embed/AXH9Xm6Rbfc"
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
          topicName= "PartialDerivatives276"
          topicId={276}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/jacobian-275"
          nextTo="/roadmaps/ml/taylor-series-277"
        />
      </div>
    </div>
  )
}

export default PartialDerivatives276;