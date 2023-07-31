import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const LearnTheBasics251 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Machine Learning Basics: What, Why, and How",
      url: "https://towardsdatascience.com/machine-learning-basics-what-why-and-how-78a4b330e36d",
    },
    {
      id: 2,
      title: "A Gentle Introduction to Machine Learning",
      url: "https://machinelearningmastery.com/a-gentle-introduction-to-machine-learning/",
    },
    {
      id: 3,
      title: "Introduction to Machine Learning",
      url: "https://www.coursera.org/learn/machine-learning",
    },
    {
      id: 4,
      title: "Machine Learning for Beginners: An Introduction to Neural Networks",
      url: "https://victorzhou.com/blog/intro-to-neural-networks/",
    },
    {
      id: 5,
      title: "Understanding Machine Learning: From Theory to Algorithms",
      url: "https://www.cse.huji.ac.il/~shais/UnderstandingMachineLearning/index.html",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Learn The Basics</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml"
          nextTo="/roadmaps/ml/pick-a-programming-language-252"
        />
        <hr />

        <h2>Learn The Basics</h2>
        <p>
        Welcome to the basics of Machine Learning! Here, we'll start our journey into this fascinating world. We'll cover the fundamental concepts and techniques, from what Machine Learning is, why it's important, to how it works. So, buckle up and let's dive into the world of Machine Learning together!

        </p>

        <TopicVideoPlayer
          videoTitle="Machine Learning Basics"
          videoSrc="https://www.youtube.com/embed/GwIo3gDZCVQ"
        />
        <TopicVideoPlayer
          videoTitle="Introduction to Machine Learning"
          videoSrc="https://www.youtube.com/embed/IpGxLWOIZy4"
        />
        <TopicVideoPlayer
          videoTitle="Getting Started with Machine Learning"
          videoSrc="https://www.youtube.com/embed/nKW8Ndu7Mjw"
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
          topicName= "LearnTheBasics251"
          topicId={251}
          roadmapName="rcml"
        />

        <hr />
        <PaginationButtons
          prevTo="/roadmaps/ml"
          nextTo="/roadmaps/ml/pick-a-programming-language-252"
        />
      </div>
    </div>
  )
}

export default LearnTheBasics251;