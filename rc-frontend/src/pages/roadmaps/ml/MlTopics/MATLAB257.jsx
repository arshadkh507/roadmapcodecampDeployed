import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const MATLAB257 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is MATLAB and Why is it Used in Machine Learning?",
      url: "https://www.mathworks.com/discovery/machine-learning.html",
    },
    {
      id: 2,
      title: "MATLAB in Real-World Machine Learning Applications",
      url: "https://www.mathworks.com/company/newsletters/articles/developing-an-isolation-forest-anomaly-detection-model-with-matlab.html",
    },
    {
      id: 3,
      title: "Introduction to MATLAB for Machine Learning",
      url: "https://www.coursera.org/learn/machine-learning-with-matlab",
    },
    {
      id: 4,
      title: "Why MATLAB is the Foundation of Deep Learning",
      url: "https://www.youtube.com/watch?v=ZzZ1dxzYtwA",
    },
  
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>M A T L A B</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/c++-256"
          nextTo="/roadmaps/ml/javascript-258"
        />
        <hr />

        <h2>MATLAB</h2>
        <p>
        MATLAB, short for Matrix Laboratory, is a high-level programming language and environment designed specifically for numerical computation. It's a popular tool in Machine Learning (ML) because it simplifies many complex computations and visualizations. 
        <br /><br />
        In ML, MATLAB is often used for algorithm development, data analysis, visualization, and numerical computation. Its built-in libraries and functions make it easy to implement ML algorithms without having to code from scratch. Plus, it's interactive environment allows for immediate algorithm testing and modification, which is crucial in the iterative process of ML model development.
        <br /><br />
        So, whether you're developing complex neural networks or simple regression models, MATLAB can be a powerful tool in your ML toolkit.

        </p>

        <TopicVideoPlayer
          videoTitle="MATLAB Crash Course for Beginners"
          videoSrc="https://www.youtube.com/embed/7f50sQYjNRA"
        />
        <TopicVideoPlayer
          videoTitle="Essential Tools for Machine Learning - MATLAB Video"
          videoSrc="https://www.youtube.com/embed/k_BrPj3TcTE"
        />
        <TopicVideoPlayer
          videoTitle="Introduction to Machine Learning with MATLAB!"
          videoSrc="https://www.youtube.com/embed/D2vZmz-JsLw"
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
          topicName= "MATLAB257"
          topicId={257}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/c++-256"
          nextTo="/roadmaps/ml/javascript-258"
        />
      </div>
    </div>
  )
}

export default MATLAB257;