import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const C256 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is C?",
      url: "https://www.cprogramming.com/tutorial/c/lesson1.html",
    },
    {
      id: 2,
      title: "Why use C for Machine Learning?",
      url: "https://www.quora.com/Why-is-C-used-in-machine-learning",
    },
    {
      id: 3,
      title: "How to use C in Machine Learning?",
      url: "https://www.geeksforgeeks.org/machine-learning-in-c/",
    },
    {
      id: 4,
      title: "C Programming for Machine Learning",
      url: "https://www.udemy.com/course/machine-learning-with-c/",
    },
    {
      id: 5,
      title: "C Libraries for Machine Learning",
      url: "https://analyticsindiamag.com/top-8-c-libraries-developers-should-know-for-machine-learning/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>C</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/java-255"
          nextTo="/roadmaps/ml/matlab-257"
        />
        <hr />

        <h2>C</h2>
        <p>
        C is a powerful general-purpose programming language. It is fast, portable and available on all platforms. 
        In the context of Machine Learning, C can be incredibly efficient, especially in areas where computation speed is critical. <br /><br />
        While it may not be as easy to use as Python or R for Machine Learning, it provides a level of control and efficiency that is hard to match.
        Stay tuned as we delve deeper into how we can leverage C in the field of Machine Learning.

        </p>

        <TopicVideoPlayer
          videoTitle="What is C?"
          videoSrc="https://www.youtube.com/embed/irqbmMNs2Bo"
        />
        <TopicVideoPlayer
          videoTitle="C in 100 Seconds
          "
          videoSrc="https://www.youtube.com/embed/U3aXWizDbQ4"
        />
        <TopicVideoPlayer
          videoTitle="Machine Learning for Everybody – Full Course"
          videoSrc="https://www.youtube.com/embed/i_LwzRVP7bg"
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
          topicName= "C256"
          topicId={256}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/java-255"
          nextTo="/roadmaps/ml/matlab-257"
        />
      </div>
    </div>
  )
}

export default C256;