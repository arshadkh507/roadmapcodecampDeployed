import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const PickAProgrammingLanguage252 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Choosing the Right Programming Language for Machine Learning",
      url: "https://towardsdatascience.com/choosing-the-right-programming-language-for-machine-learning-a5b5bd4bd4f",
    },
    {
      id: 2,
      title: "Best Programming Languages for Machine Learning",
      url: "https://www.geeksforgeeks.org/best-programming-languages-for-machine-learning/",
    },
    {
      id: 3,
      title: "A Guide to Picking the Right Programming Language for ML",
      url: "https://www.analyticsvidhya.com/blog/2020/05/which-programming-language-to-choose-for-machine-learning-and-data-science-jobs-a-comparison-between-python-r-and-sas/",
    },
    {
      id: 4,
      title: "How to Choose a Programming Language for Machine Learning",
      url: "https://www.freecodecamp.org/news/best-programming-language-for-machine-learning/",
    },
    {
      id: 5,
      title: "Python vs R vs other languages for Machine Learning",
      url: "https://www.datacamp.com/community/tutorials/r-or-python-for-data-analysis",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Pick A Programming Language</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/learn-the-basics-251"
          nextTo="/roadmaps/ml/python-253"
        />
        <hr />

        <h2>Pick A Programming Language</h2>
        <p>
        When starting with machine learning, the choice of programming language is crucial. It can affect the ease of learning, the availability of libraries and tools, and the performance of the final models.
        <br /><br />
        Python and R are the most popular languages for machine learning due to their powerful libraries and community support. Python is often preferred for its simplicity and readability, making it a good choice for beginners. R, on the other hand, is favored for statistical analysis and visualization.
        <br /><br />
        
        However, the choice of language should also depend on your specific needs and background. If you're coming from a computer science background, you might find languages like Java or C++ more familiar. If you're dealing with large-scale data, languages like Scala or Julia that can handle parallel computing might be more suitable.
        <br /><br />
        
        Ultimately, the best way to choose a language is to consider your needs, evaluate the pros and cons of each language, and try them out for yourself.

        </p>

        <TopicVideoPlayer
          videoTitle="Should I study Machine Learning? Is it required for Placements? "
          videoSrc="https://www.youtube.com/embed/jyd4uH5dWJ8"
        />
        <TopicVideoPlayer
          videoTitle="How to Get Started with Machine Learning in Python"
          videoSrc="https://www.youtube.com/embed/7eh4d6sabA0"
        />
        <TopicVideoPlayer
          videoTitle="Which Programming Language to Pick for Machine Learning"
          videoSrc="https://www.youtube.com/embed/6kZ-OPLNcgE"
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
          topicName= "PickAProgrammingLanguage252"
          topicId={252}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/learn-the-basics-251"
          nextTo="/roadmaps/ml/python-253"
        />
      </div>
    </div>
  )
}

export default PickAProgrammingLanguage252;