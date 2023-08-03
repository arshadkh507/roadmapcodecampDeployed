import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const LinearAlgebra278 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Introduction to Linear Algebra",
      url: "https://www.mathsisfun.com/algebra/linear-algebra-introduction.html",
    },
    {
      id: 2,
      title: "Linear Algebra in Machine Learning",
      url: "https://towardsdatascience.com/linear-algebra-cheat-sheet-for-deep-learning-cd67aba4526c",
    },
    {
      id: 3,
      title: "Understanding Linear Algebra in ML",
      url: "https://www.analyticsvidhya.com/blog/2017/05/comprehensive-guide-to-linear-algebra/",
    },
    {
      id: 4,
      title: "Linear Algebra for Machine Learning",
      url: "https://machinelearningmastery.com/gentle-introduction-linear-algebra/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Linear Algebra</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/taylor-series-277"
          nextTo="/roadmaps/ml/scalars-279"
        />
        <hr />

        <h2>Linear Algebra</h2>
        <p>
        Linear Algebra is a branch of mathematics that deals with vectors and operations on vectors. It forms the backbone of Machine Learning, as it provides us with the tools to handle and manipulate data. In Machine Learning, we use Linear Algebra for transformations, dimensionality reduction, and much more. It's a crucial foundation for understanding and exploring data in a way that machines can understand.

        </p>

        <TopicVideoPlayer
          videoTitle="Linear Algebra - Lecture 1"
          videoSrc="https://www.youtube.com/embed/ZK3O402wf1c"
        />
        <TopicVideoPlayer
          videoTitle="Linear Algebra - Full College Course"
          videoSrc="https://www.youtube.com/embed/JnTa9XtvmfI"
        />
        <TopicVideoPlayer
          videoTitle="Linear Algebra in Machine Learning"
          videoSrc="https://www.youtube.com/embed/8onB7rPG4Pk"
        />
        <TopicVideoPlayer
          videoTitle="Linear Algebra for Machine Learning"
          videoSrc="https://www.youtube.com/embed/8iGzBMboA0I"
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
          topicName= "LinearAlgebra278"
          topicId={278}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/taylor-series-277"
          nextTo="/roadmaps/ml/scalars-279"
        />
      </div>
    </div>
  )
}

export default LinearAlgebra278;