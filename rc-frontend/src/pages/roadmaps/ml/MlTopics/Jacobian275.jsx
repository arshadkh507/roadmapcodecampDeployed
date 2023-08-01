import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Jacobian275 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding the Jacobian Matrix",
      url: "https://www.coursera.org/lecture/machine-learning/understanding-the-jacobian-matrix",
    },
    {
      id: 2,
      title: "The Jacobian Matrix and Its Applications in Machine Learning",
      url: "https://towardsdatascience.com/the-jacobian-matrix-and-its-applications-in-machine-learning-3844a148fc4e",
    },
    {
      id: 3,
      title: "Jacobian Matrix and Determinant",
      url: "https://www.youtube.com/watch?v=pJzmiywagfY",
    },
    {
      id: 4,
      title: "Why the Jacobian is Important in Machine Learning",
      url: "https://www.analyticsvidhya.com/blog/2020/03/jacobian-matrix-machine-learning/",
    },
    {
      id: 5,
      title: "How to Use the Jacobian in Machine Learning",
      url: "https://machinelearningmastery.com/jacobian-in-machine-learning/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Jacobian</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/hessian-274"
          nextTo="/roadmaps/ml/partial-derivatives-276"
        />
        <hr />

        <h2>Jacobian</h2>
        <p>
        The Jacobian is a mathematical concept that's quite important in the world of machine learning. It's a matrix that contains all the first-order partial derivatives of a vector-valued function. In simpler terms, it's a tool that helps us understand how changes in input can affect the output of a function.
<br /><br />
        Now, you might be wondering where we use it in machine learning. Well, the Jacobian plays a crucial role in optimization problems, which are a big part of machine learning algorithms. It's used in backpropagation in neural networks, helping to calculate the gradients needed for updating the weights. So, understanding the Jacobian can really help you grasp the inner workings of machine learning models.

        </p>

        <TopicVideoPlayer
          videoTitle="What is Jacobian? | The right way of thinking derivatives and integrals"
          videoSrc="https://www.youtube.com/embed/wCZ1VEmVjVo"
        />
        <TopicVideoPlayer
          videoTitle="The Jacobian matrix"
          videoSrc="https://www.youtube.com/embed/bohL918kXQk"
        />
        <TopicVideoPlayer
          videoTitle="The Jacobian : Data Science Basics"
          videoSrc="https://www.youtube.com/embed/AdV5w8CY3pw"
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
          topicName= "Jacobian275"
          topicId={275}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/hessian-274"
          nextTo="/roadmaps/ml/partial-derivatives-276"
        />
      </div>
    </div>
  )
}

export default Jacobian275;