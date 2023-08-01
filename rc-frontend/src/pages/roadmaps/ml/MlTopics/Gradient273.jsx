import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Gradient273 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Gradients in Machine Learning",
      url: "https://towardsdatascience.com/understanding-the-gradient-2f3e3318e996",
    },
    {
      id: 2,
      title: "Why Do We Use Gradient Descent in Machine Learning?",
      url: "https://www.analyticsvidhya.com/blog/2020/10/why-do-we-use-gradient-descent-in-machine-learning/",
    },
    {
      id: 3,
      title: "How to Implement Gradient Descent in Python",
      url: "https://machinelearningmastery.com/implement-gradient-descent-algorithm-scratch-python/",
    },
    {
      id: 4,
      title: "Gradient Descent in Machine Learning",
      url: "https://www.geeksforgeeks.org/gradient-descent-in-linear-regression/",
    },
    {
      id: 5,
      title: "A Gentle Introduction to the Gradient Descent Algorithm for Machine Learning",
      url: "https://machinelearningmastery.com/gentle-introduction-gradient-descent-optimization/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Gradient</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/chain-rule-272"
          nextTo="/roadmaps/ml/hessian-274"
        />
        <hr />

        <h2>Gradient</h2>
        <p>
        The gradient, in the context of machine learning, is a directional value representing the slope of a function at a given point. It's like a compass guiding us to the direction of the steepest ascent. But why do we want to know this in machine learning? Well, we use it primarily for optimization purposes.
<br /><br />
        When we're training a model, we want to find the best parameters that minimize the error of our predictions. This is where the gradient comes in handy. By knowing the direction of the steepest ascent, we can move in the opposite direction (the steepest descent) to find the minimum point, thus minimizing our error. This process is known as gradient descent.
        <br /><br />

        So, in a nutshell, we use the gradient in machine learning to guide our models to better performance. It's like a lighthouse guiding a ship to safe harbor in the vast sea of potential parameters.

        </p>

        <TopicVideoPlayer
          videoTitle="Gradient Descent Explained"
          videoSrc="https://www.youtube.com/embed/sDv4f4s2SB8"
        />
        <TopicVideoPlayer
          videoTitle="Understanding Gradients in Machine Learning"
          videoSrc="https://www.youtube.com/embed/GkB4vW16QHI"
        />
        <TopicVideoPlayer
          videoTitle="Gradient Descent in Machine Learning"
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
          topicName= "Gradient273"
          topicId={273}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/chain-rule-272"
          nextTo="/roadmaps/ml/hessian-274"
        />
      </div>
    </div>
  )
}

export default Gradient273;