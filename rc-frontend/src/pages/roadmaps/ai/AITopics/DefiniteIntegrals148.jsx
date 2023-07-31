import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const DefiniteIntegrals148 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Definite Integrals",
      url: "https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-1/a/definite-integrals-intro",
    },
    {
      id: 2,
      title: "Why are Definite Integrals Important in AI?",
      url: "https://towardsdatascience.com/understanding-the-role-of-integrals-in-ai-9f4183b5c3e",
    },
    {
      id: 3,
      title: "How to Use Definite Integrals in AI",
      url: "https://www.analyticsvidhya.com/blog/2020/02/integral-calculus-ai-machine-learning/",
    },
    {
      id: 4,
      title: "Applications of Definite Integrals in AI",
      url: "https://www.researchgate.net/publication/331933608_The_Use_of_Integral_Calculus_in_Artificial_Intelligence",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Definite Integrals</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/integral-calculus-147"
          nextTo="/roadmaps/ai/indefinite-integrals-149"
        />
        <hr />

        <h2>Definite Integrals</h2>
        <p>
        Definite integrals are a fundamental concept in calculus, often used in the field of Artificial Intelligence (AI). They help in calculating the total sum of discrete data points, which is crucial in many AI algorithms.
        <br /><br />
        For instance, in machine learning, definite integrals are used in the training process where the aim is to minimize the error function. This process involves integrating over all the possible values of the input data. Similarly, in robotics, definite integrals are used to calculate the total distance traveled by a robot given its speed at different times.
        <br /><br />
        
        A real-world example of its use in AI is in the field of computer vision, where definite integrals are used to calculate the area under the curve of an object's boundary. This helps in identifying and distinguishing between different objects.
        <br /><br />
        
        In simple terms, think of definite integrals as a tool that helps AI systems to add up all the little pieces of information they have, to make sense of the bigger picture.

        </p>

        <TopicVideoPlayer
          videoTitle="Definite Integrals in AI - Introduction"
          videoSrc="https://www.youtube.com/embed/rCWOdfQ3cwQ"
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
          topicName= "DefiniteIntegrals148"
          topicId={148}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/integral-calculus-147"
          nextTo="/roadmaps/ai/indefinite-integrals-149"
        />
      </div>
    </div>
  )
}

export default DefiniteIntegrals148;