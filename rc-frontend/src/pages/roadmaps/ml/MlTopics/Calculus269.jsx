import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Calculus269 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is Calculus?",
      url: "https://www.mathsisfun.com/calculus/index.html",
    },
    {
      id: 2,
      title: "Calculus in Machine Learning",
      url: "https://towardsdatascience.com/why-calculus-is-important-for-machine-learning-1f4c4212298b",
    },
    {
      id: 3,
      title: "Introduction to Calculus",
      url: "https://www.khanacademy.org/math/calculus-1",
    },
    {
      id: 4,
      title: "Applications of Calculus in Machine Learning",
      url: "https://analyticsindiamag.com/role-of-calculus-in-understanding-the-algorithms-of-machine-learning/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Calculus</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/exception-handling-268"
          nextTo="/roadmaps/ml/limits-270"
        />
        <hr />

        <h2>Calculus</h2>
        <p>
        Calculus is a branch of mathematics that deals with rates of change and accumulation of quantities. It's like a system for understanding the dynamic nature of the world around us. <br /><br />
        In the realm of Machine Learning, calculus is used in a variety of ways. For instance, it's used to optimize loss functions in models, helping to improve their accuracy. It's also used in backpropagation, a method used to train neural networks by adjusting the weights of the nodes. <br /><br />
        So, while calculus might seem like an abstract concept, it's actually a powerful tool that helps us create more effective and efficient machine learning models. Stay tuned as we delve deeper into this fascinating topic!

        </p>

        <TopicVideoPlayer
          videoTitle="Calculus for Machine Learning"
          videoSrc="https://www.youtube.com/embed/en6cnME"
        />
        <TopicVideoPlayer
          videoTitle="Calculus for Beginners full course | Calculus for Machine learning"
          videoSrc="https://www.youtube.com/embed/8stueNPVl-I"
        />
        <TopicVideoPlayer
          videoTitle="10 Math Concepts for Programmers"
          videoSrc="https://www.youtube.com/embed/bOCHTHkBoAs"
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
          topicName= "Calculus269"
          topicId={269}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/exception-handling-268"
          nextTo="/roadmaps/ml/limits-270"
        />
      </div>
    </div>
  )
}

export default Calculus269;