import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const TaylorSeries277 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding the Taylor Series",
      url: "https://www.mathsisfun.com/algebra/taylor-series.html",
    },
    {
      id: 2,
      title: "Taylor Series in Machine Learning",
      url: "https://towardsdatascience.com/taylor-series-in-machine-learning-7700e3b8e5ff",
    },
    {
      id: 3,
      title: "Taylor Series: Simple and Multivariable Calculus",
      url: "https://www.khanacademy.org/math/calculus-2/cs2-series-and-sequences/cs2-taylor-and-maclaurin-series/a/maclaurin-and-taylor-series-intro",
    },
    {
      id: 4,
      title: "The Role of Taylor Series in Machine Learning",
      url: "https://medium.com/@andrew.chamberlain/the-role-of-taylor-series-in-machine-learning-64c2d6e7a739",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Taylor Series</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/partial-derivatives-276"
          nextTo="/roadmaps/ml/linear-algebra-278"
        />
        <hr />

        <h2>Taylor Series</h2>
        <p>
        The Taylor Series is a powerful mathematical tool that allows us to approximate any function as a sum of terms calculated from the function's derivatives at a single point. In the realm of Machine Learning, the Taylor Series is often used in optimization algorithms. It helps us to simplify complex functions and make them more manageable for computations. Stay tuned as we delve deeper into this fascinating topic!

        </p>

        <TopicVideoPlayer
          videoTitle="Taylor Series and Maclaurin Series - Calculus 2"
          videoSrc="https://www.youtube.com/embed/LDBnS4c7YbA"
        />
        <TopicVideoPlayer
          videoTitle="Taylor series | Chapter 11, Essence of calculus"
          videoSrc="https://www.youtube.com/embed/3d6DsjIBzJ4"
        />
        <TopicVideoPlayer
          videoTitle="Taylor Series | Taylor Theorem | Proof & Series Expansion | Part-I"
          videoSrc="https://www.youtube.com/embed/LEspaisjDFE"
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
          topicName= "TaylorSeries277"
          topicId={277}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/partial-derivatives-276"
          nextTo="/roadmaps/ml/linear-algebra-278"
        />
      </div>
    </div>
  )
}

export default TaylorSeries277;