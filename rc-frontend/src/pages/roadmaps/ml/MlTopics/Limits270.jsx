import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Limits270 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Limits in Calculus",
      url: "https://www.khanacademy.org/math/calculus-1/cs1-limits-and-continuity",
    },
    {
      id: 2,
      title: "Understanding Limits and Its Applications",
      url: "https://www.mathsisfun.com/calculus/limits.html",
    },
    {
      id: 3,
      title: "How to Use Limits in Machine Learning",
      url: "https://towardsdatascience.com/understanding-limits-in-machine-learning-8c3fe4137c30",
    },
    {
      id: 4,
      title: "Limits in Machine Learning: A Detailed Guide",
      url: "https://www.analyticsvidhya.com/blog/2021/05/understanding-limits-in-machine-learning-a-detailed-guide/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Limits</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/calculus-269"
          nextTo="/roadmaps/ml/derivatives-271"
        />
        <hr />

        <h2>Limits</h2>
        <p>
        In calculus, limits are used to define continuity, derivatives, and integrals. They help us understand the behavior of functions as they approach certain points. <br /><br />
        In the realm of machine learning, limits play a crucial role in optimization algorithms, such as gradient descent, where we iteratively adjust parameters to minimize a cost function. 
        A real-world example of using limits would be in a navigation system, where the system continuously recalculates the shortest path, adjusting as new information becomes available. <br /><br />
        So, whether you're calculating the speed of a car at a specific moment or training a neural network to recognize handwriting, limits are an essential tool in your mathematical toolbox.

        </p>

        <TopicVideoPlayer
          videoTitle="Introduction to limits | Limits | Differential Calculus | Khan Academy"
          videoSrc="https://www.youtube.com/embed/riXcZT2ICjA"
        />

          <TopicVideoPlayer
          videoTitle="Calculus for Beginners full course | Calculus for Machine learning"
          videoSrc="https://www.youtube.com/embed/8stueNPVl-I"
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
          topicName= "Limits270"
          topicId={270}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/calculus-269"
          nextTo="/roadmaps/ml/derivatives-271"
        />
      </div>
    </div>
  )
}

export default Limits270;