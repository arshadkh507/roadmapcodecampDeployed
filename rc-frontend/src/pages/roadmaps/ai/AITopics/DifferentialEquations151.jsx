import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const DifferentialEquations151 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Deep Learning Methods for Partial Differential Equations and Related Parameter Identification Problems",
      url: "https://arxiv.org/abs/2212.03130",
    },
    {
      id: 2,
      title: "Solving differential equations via artificial neural networks: Findings and failures in a model problem☆",
      url: "https://www.sciencedirect.com/science/article/pii/S2666657X21000197",
    },
    {
      id: 3,
      title: "Are differential equations used in AI?",
      url: "https://questions.llc/questions/1912161/are-differential-equations-used-in-ai#:~:text=Yes%2C%20differential%20equations%20are%20used%20in%20AI.%20Differential,problems%2C%20which%20are%20essential%20for%20many%20AI%20tasks.",
    },
    {
      id: 4,
      title: "Differential Equations",
      url: "https://www.khanacademy.org/math/integral-calculus/ic-diff-eq",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Differential Equations</h1>

        <PaginationButtons
          prevTo="/roadmaps/ai/areas-and-volumes-150"
          nextTo="/roadmaps/ai/multivariable-calculus-152"
        />
        <hr />

        <h2>DifferentialEquations151</h2>
        <p>
        Differential equations are mathematical tools that help us describe the world around us. They are equations that involve an unknown function and its derivatives. In the realm of AI, they play a crucial role in modeling dynamic systems, such as weather patterns or stock market trends. AI can use differential equations to predict future states of these systems, making them invaluable in fields like meteorology and finance. Stay tuned as we delve deeper into this fascinating topic!

        </p>

        <TopicVideoPlayer
          videoTitle="Differential Equations"
          videoSrc="https://www.khanacademy.org/math/integral-calculus/ic-diff-eq"
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
          topicName= "DifferentialEquations151"
          topicId={151}
          roadmapName="rcai"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ai/areas-and-volumes-150"
          nextTo="/roadmaps/ai/multivariable-calculus-152"
        />
      </div>
    </div>
  )
}

export default DifferentialEquations151;