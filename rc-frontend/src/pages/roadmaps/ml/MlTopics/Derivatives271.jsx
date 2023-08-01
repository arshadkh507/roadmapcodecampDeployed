import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Derivatives271 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is a Derivative?",
      url: "https://www.mathsisfun.com/calculus/derivatives-introduction.html",
    },
    {
      id: 2,
      title: "Why do we use Derivatives in Machine Learning?",
      url: "https://towardsdatascience.com/why-do-we-use-derivatives-in-machine-learning-2a67f5db5935",
    },
    {
      id: 3,
      title: "Where and How are Derivatives used in Machine Learning?",
      url: "https://www.analyticsvidhya.com/blog/2020/02/what-are-derivatives-machine-learning/",
    },
    {
      id: 4,
      title: "Understanding Derivatives in Machine Learning",
      url: "https://www.youtube.com/watch?v=WUvTyaaNkzM",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Derivatives</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/limits-270"
          nextTo="/roadmaps/ml/chain-rule-272"
        />
        <hr />

        <h2>Derivatives271</h2>
        <p>
        Derivatives, in the simplest terms, are a measure of how a function changes as its inputs change. They're a fundamental concept in calculus and have a wide range of applications in various fields, including machine learning. <br /><br />
        In machine learning, derivatives play a crucial role in optimization algorithms, such as gradient descent, which are used to minimize the error function by iteratively adjusting the model parameters. By understanding how the error changes as the parameters change, we can find the direction to adjust the parameters that will minimize the error. <br /><br />
        So, in a nutshell, derivatives help our machine learning models learn from their mistakes and improve their predictions. Stay tuned for more detailed content on this topic.

        </p>

        <TopicVideoPlayer
          videoTitle="Derivatives (C1W2L05)"
          videoSrc="https://www.youtube.com/embed/GzphoJOVEcE"
        />
        <TopicVideoPlayer
          videoTitle="Derivative of a Matrix : Data Science Basics"
          videoSrc="https://www.youtube.com/embed/e73033jZTCI"
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
          topicName= "Derivatives271"
          topicId={271}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/limits-270"
          nextTo="/roadmaps/ml/chain-rule-272"
        />
      </div>
    </div>
  )
}

export default Derivatives271;