import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Derivatives145 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Derivatives: The Basics",
      url: "https://www.investopedia.com/terms/d/derivative.asp",
    },
    {
      id: 2,
      title: "The Role of Derivatives in Machine Learning",
      url: "https://towardsdatascience.com/the-role-of-derivatives-in-machine-learning-294dd3a9c34",
    },
    {
      id: 3,
      title: "Derivatives in Artificial Intelligence",
      url: "https://www.analyticsvidhya.com/blog/2020/02/4-applications-of-derivatives-in-artificial-intelligence/",
    },
    {
      id: 4,
      title: "Understanding the Mathematics of Machine Learning",
      url: "https://www.edureka.co/blog/mathematics-for-machine-learning/",
    },
    {
      id: 5,
      title: "The Importance of Calculus in AI & Machine Learning",
      url: "https://analyticsindiamag.com/the-importance-of-calculus-in-ai-machine-learning/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Derivatives</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/limits-and-continuity-144"
          nextTo="/roadmaps/ai/optimization-146"
        />
        <hr />

        <h2>Derivatives</h2>
        <p>
        Derivatives are a fundamental concept in calculus, representing an infinitesimal change in a function with respect to its variables. They play a crucial role in various aspects of Artificial Intelligence (AI) and Machine Learning (ML).</p>

        <p>In the context of AI and ML, derivatives are used in optimization algorithms like Gradient Descent to find the minimum of a function (usually a loss function). They help in understanding how changing the input of a function slightly might change its output, which is essential in tweaking and improving models.</p>

        <p>Furthermore, derivatives are used in backpropagation in neural networks, which is a method used to train and optimize these networks. They are also used in understanding and interpreting the behavior of complex models, and in feature selection where we need to understand the most important inputs for a predictive model.</p>

        

        <TopicVideoPlayer
          videoTitle="What is Derivatives"
          videoSrc="https://www.youtube.com/embed/3d6DsjIBzJ4"

        />
        <TopicVideoPlayer
          videoTitle="Derivatives introduction | AP Calculus AB"
          videoSrc="https://www.youtube.com/embed/N2PpRnFqnqY"
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
          topicName= "Derivatives145"
          topicId={145}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/limits-and-continuity-144"
          nextTo="/roadmaps/ai/optimization-146"
        />
      </div>
    </div>
  )
}

export default Derivatives145;