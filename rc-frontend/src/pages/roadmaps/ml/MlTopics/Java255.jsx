import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Java255 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Java and Machine Learning: An Introduction",
      url: "https://www.javaworld.com/article/2076481/java-and-machine-learning.html",
    },
    {
      id: 2,
      title: "Why Java for Machine Learning?",
      url: "https://towardsdatascience.com/why-java-for-machine-learning-5a79a46ae7c8",
    },
    {
      id: 3,
      title: "How to use Java for Machine Learning",
      url: "https://www.edureka.co/blog/java-machine-learning/",
    },
    {
      id: 4,
      title: "Java Machine Learning Libraries",
      url: "https://www.baeldung.com/java-machine-learning-libraries",
    },
    {
      id: 5,
      title: "Machine Learning in Java - Tutorial",
      url: "https://www.youtube.com/watch?v=V1V3qJc8JvY",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Java</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/r-254"
          nextTo="/roadmaps/ml/c++-256"
        />
        <hr />

        <h2>Java</h2>
        <p>
        Java is a versatile programming language widely used in the field of machine learning. It offers robustness, ease of use, and a rich ecosystem of libraries and frameworks that make it a great choice for machine learning applications.
        <br /><br />
        From building machine learning models to deploying scalable solutions, Java's versatility shines. Its strong typing system and object-oriented programming paradigm make it easier to write complex algorithms, while its vast array of libraries, such as Weka and Deeplearning4j, provide tools for data preprocessing, algorithm implementation, and model evaluation.
        So, whether you're just starting your machine learning journey or you're looking to scale up your existing projects, Java has got you covered!

        </p>

        <TopicVideoPlayer
          videoTitle="Introduction to Java Language | Lecture 1 | Complete Placement Course"
          videoSrc="https://www.youtube.com/embed/yRpLlJmRo2w"
        />
        <TopicVideoPlayer
          videoTitle="Machine Learning with Java Training | Machine Learning Java"
          videoSrc="https://www.youtube.com/embed/Z8Xwb2fpfyY"
        />
        <TopicVideoPlayer
          videoTitle="Detailed Roadmap for Machine Learning | Free Study Resources | Simply Explained"
          videoSrc="https://www.youtube.com/embed/1vsmaEfbnoE"
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
          topicName= "Java255"
          topicId={255}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/r-254"
          nextTo="/roadmaps/ml/c++-256"
        />
      </div>
    </div>
  )
}

export default Java255;