import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Expressions261 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Expressions in Programming: An Overview",
      url: "https://www.geeksforgeeks.org/expressions-in-programming/",
    },
    {
      id: 2,
      title: "Understanding Expressions, Statements, and Blocks in JavaScript",
      url: "https://www.digitalocean.com/community/tutorials/understanding-expressions-statements-and-blocks-in-javascript",
    },
    {
      id: 3,
      title: "What is an Expression in Programming?",
      url: "https://www.computerhope.com/jargon/e/expression.htm",
    },
    {
      id: 4,
      title: "How to Use Expressions in Programming",
      url: "https://www.dummies.com/programming/programming-basics/how-to-use-expressions-in-programming/",
    },
    {
      id: 5,
      title: "Why Expressions Matter in Programming",
      url: "https://www.infoworld.com/article/3022425/why-expressions-matter-in-programming.html",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Expressions</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/variables-260"
          nextTo="/roadmaps/ml/operators-262"
        />
        <hr />

        <h2>Expressions261</h2>
        <p>
        In programming, an expression is a piece of code that produces a value when it's evaluated. Expressions can include variables, operators, literals, and function calls. For example, in the expression "2 + 3", "2" and "3" are integer literals, "+" is an operator, and the whole expression produces the value "5" when evaluated. Stay tuned as we dive deeper into expressions in the upcoming sections.

        </p>

        <TopicVideoPlayer
          videoTitle="Expressions In Python Full Tutorial"
          videoSrc="https://www.youtube.com/embed/KUsYcJ-04Gk"
        />
        <TopicVideoPlayer
          videoTitle="Expressions vs. Statements in JS"
          videoSrc="https://www.youtube.com/embed/WVyCrI1cHi8"
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
          topicName= "Expressions261"
          topicId={261}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/variables-260"
          nextTo="/roadmaps/ml/operators-262"
        />
      </div>
    </div>
  )
}

export default Expressions261;