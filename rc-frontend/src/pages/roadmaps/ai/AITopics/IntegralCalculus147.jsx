import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const IntegralCalculus147 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Integral Calculus",
      url: "https://www.mathsisfun.com/calculus/integration-introduction.html",
    },
    {
      id: 2,
      title: "Integral Calculus for Beginners",
      url: "https://www.khanacademy.org/math/integral-calculus",
    },
    {
      id: 3,
      title: "How is Integral Calculus used in AI?",
      url: "https://towardsdatascience.com/how-calculus-is-used-in-machine-learning-839f0623a9e",
    },
    {
      id: 4,
      title: "The Role of Calculus in Artificial Intelligence and Machine Learning",
      url: "https://analyticsindiamag.com/the-role-of-calculus-in-artificial-intelligence-and-machine-learning/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Integral Calculus</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/optimization-146"
          nextTo="/roadmaps/ai/definite-integrals-148"
        />
        <hr />

        <h2>Integral Calculus</h2>
        <p>
        Integral Calculus is a fundamental branch of mathematics that deals with the concept of accumulation and area under curves. It is used extensively in various fields, including Artificial Intelligence (AI).
<br /><br />

        In AI, integral calculus is used in various ways. For instance, it is used in the training of neural networks, where the goal is to minimize the error function. This process involves finding the area under the curve of the error function, which is where integral calculus comes into play.
        <br /><br />
        Furthermore, integral calculus is used in probabilistic models in AI. Many AI algorithms involve dealing with probabilities, and integral calculus is used to calculate the total probability in certain scenarios.
        <br /><br />
        Understanding integral calculus is crucial for anyone looking to delve deep into AI, as it forms the backbone of many AI algorithms and models. Its real-world applications in AI are vast and varied, making it an important topic in the field.

        </p>

        <TopicVideoPlayer
          videoTitle="Introduction to Integral Calculus"
          videoSrc="https://www.youtube.com/embed/FnJqaIESC2s"
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
          topicName= "IntegralCalculus147"
          topicId={147}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/optimization-146"
          nextTo="/roadmaps/ai/definite-integrals-148"
        />
      </div>
    </div>
  )
}

export default IntegralCalculus147;