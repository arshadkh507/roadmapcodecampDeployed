import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const HigherorderFunctions044 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Higher Order Functions in JavaScript",
      url: "https://eloquentjavascript.net/05_higher_order.html",
    },
    {
      id: 2,
      title: "Understanding Higher-Order Functions in JavaScript",
      url: "https://www.digitalocean.com/community/tutorials/js-higher-order-functions-map-filter-reduce",
    },
    {
      id: 3,
      title: "Higher Order Functions in JavaScript - MDN Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#higher-order_functions",
    },
    {
      id: 4,
      title: "JavaScript Higher Order Functions & Arrays",
      url: "https://www.youtube.com/watch?v=rRgD1yVwIvE",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Higher Order Functions</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-preprocessors-postcss-43"
          nextTo="/roadmaps/frontend/advance-javascript-closures-45"
        />
        <hr />

        <h2>Higher Order Functions</h2>
        <p>
        Higher order functions are a fundamental concept in JavaScript, and they're quite magical. They are functions that operate on other functions, either by taking them as arguments or by returning them. In simple terms, a Higher Order function is a function that receives a function as an input or returns a function as output or both.
<br /> <br />
        Why do we use them? Well, Higher Order Functions allow us to create more abstract and reusable code. They help us to write cleaner and more concise code by allowing us to extract common tasks into reusable functions. 
        <br /> <br />

        Where do we use them? They're used extensively in JavaScript, especially in modern frameworks and libraries like React and Lodash. They're also the backbone of functional programming in JavaScript, making our code more readable, maintainable, and testable.

        </p>

        <TopicVideoPlayer
          videoTitle="Higher-Order Functions ft. Functional Programming | Namaste JavaScript"
          videoSrc="https://www.youtube.com/embed/HkWxvB1RJq0"
        />
        <TopicVideoPlayer
          videoTitle="JavaScript Higher Order Functions & Arrays"
          videoSrc="https://www.youtube.com/embed/rRgD1yVwIvE"
        />
        <TopicVideoPlayer
          videoTitle="Higher Order Functions - JavaScript Tutorial"
          videoSrc="https://www.youtube.com/embed/0aKZvNNf8BA"
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
          topicName= "HigherorderFunctions044"
          topicId={44}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-preprocessors-postcss-43"
          nextTo="/roadmaps/frontend/advance-javascript-closures-45"
        />
      </div>
    </div>
  )
}

export default HigherorderFunctions044;