import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Mathematics142 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Mathematics for Machine Learning",
      url: "https://www.coursera.org/specializations/mathematics-machine-learning",
    },
    {
      id: 2,
      title: "The Mathematics of Machine Learning",
      url: "https://towardsdatascience.com/the-mathematics-of-machine-learning-894f046c568",
    },
    {
      id: 3,
      title: "Essential Math for Data Science",
      url: "https://towardsdatascience.com/the-5-must-knows-of-math-for-data-science-7765b3a0bb05",
    },
    {
      id: 4,
      title: "Mathematics for Artificial Intelligence",
      url: "https://www.analyticsvidhya.com/blog/2019/07/5-math-skills-data-science-python/",
    },
    {
      id: 5,
      title: "Mathematics for AI: All the essential math topics you need",
      url: "https://www.freecodecamp.org/news/mathematics-for-artificial-intelligence-all-the-essential-math-topics-you-need-to-know-1b3b95976f3a/",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Mathematics</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/input-output-operations-141"
          nextTo="/roadmaps/ai/differential-calculus-143"
        />
        <hr />

        <h2>Mathematics142</h2>
        <p>
        Mathematics plays a crucial role in AI. It provides a way to understand and model the complexity of the real world that AI seeks to mimic. From linear algebra and calculus to probability and statistics, these mathematical concepts form the backbone of most AI algorithms. Understanding these concepts is key to understanding how AI works and how to implement it effectively.
        </p>

        <TopicVideoPlayer
          videoTitle="Mathematics for AI"
          videoSrc="https://www.youtube.com/embed/8onB7rPG4Pk"
        />
         <TopicVideoPlayer
          videoTitle="Mathematics for AI"
          videoSrc="https://www.youtube.com/embed/z9O2ThhsIjs"
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
          topicName= "Mathematics142"
          topicId={142}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/input-output-operations-141"
          nextTo="/roadmaps/ai/differential-calculus-143"
        />
      </div>
    </div>
  )
}

export default Mathematics142;