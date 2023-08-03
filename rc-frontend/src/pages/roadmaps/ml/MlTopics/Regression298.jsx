import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Regression298 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding Regression Analysis",
      url: "https://www.investopedia.com/terms/r/regression.asp",
    },
    {
      id: 2,
      title: "Linear Regression in Python",
      url: "https://realpython.com/linear-regression-in-python/",
    },
    {
      id: 3,
      title: "Regression Analysis: A Complete Example",
      url: "https://www.youtube.com/watch?v=NUXdtN1W1FE",
    },
    {
      id: 4,
      title: "Multiple Regression Analysis in Python",
      url: "https://www.datacamp.com/community/tutorials/multiple-regression-in-python",
    },
    {
      id: 5,
      title: "Regression Analysis in Machine Learning",
      url: "https://machinelearningmastery.com/regression-tutorial-keras-deep-learning-library-python/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Regression</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/descriptive-statistics-297"
          nextTo="/roadmaps/ml/anova-299"
        />
        <hr />

        <h2>Regression</h2>
        <p>
        Regression, in the simplest terms, is a statistical method that allows us to examine the relationship between two or more variables of interest. While it may sound intimidating, it's just a way to understand how the typical value of the dependent variable changes when any one of the independent variables is varied. 
<br /><br />
        Why do we use regression? Well, it's all about prediction and forecasting. Imagine you're trying to predict sales for your company. With regression, you can look at how things like marketing spend, seasonality, and competitor activity impact your sales. 
        <br /><br />

        How do we do it? The process involves fitting a curve or line to the data points, in such a way that the differences between the distances of data points from the curve or line is minimized. Don't worry if it sounds complex - there are plenty of tools and libraries out there to help you do this, like Python's scikit-learn library.

        </p>

        <TopicVideoPlayer
          videoTitle="Regression Analysis | Full Course"
          videoSrc="https://www.youtube.com/embed/0m-rs2M7K-Y"
        />
        <TopicVideoPlayer
          videoTitle="Linear Regression Explained in Hindi ll Machine Learning Course"
          videoSrc="https://www.youtube.com/embed/lzGKRSvs5HM"
        />
        <TopicVideoPlayer
          videoTitle="Logistic Regression"
          videoSrc="https://www.youtube.com/embed/yIYKR4sgzI8"
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
          topicName= "Regression298"
          topicId={298}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/descriptive-statistics-297"
          nextTo="/roadmaps/ml/anova-299"
        />
      </div>
    </div>
  )
}

export default Regression298;