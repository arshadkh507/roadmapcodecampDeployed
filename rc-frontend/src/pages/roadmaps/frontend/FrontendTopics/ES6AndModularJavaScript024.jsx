import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ES6AndModularJavaScript024 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "ES6 - The Next Version of JavaScript",
      url: "https://www.udacity.com/course/es6-javascript-improved--ud356",
    },
    {
      id: 2,
      title: "ES6 and Why it Matters",
      url: "https://www.sitepoint.com/es6-beyond-an-introduction/",
    },
    {
      id: 3,
      title: "Modular JavaScript: A Beginners Guide",
      url: "https://www.sitepoint.com/understanding-es6-modules/",
    },
    {
      id: 4,
      title: "Why Use ES6 and Modular JavaScript",
      url: "https://www.toptal.com/javascript/write-code-for-the-future-using-es6",
    },
    {
      id: 5,
      title: "ES6 and Modular JavaScript Tutorial",
      url: "https://www.youtube.com/watch?v=3PHXvlpOkf4",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>ES6 And Modular JavaScript</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/learn-ajax-and-apis-23"
          nextTo="/roadmaps/frontend/understand-the-concepts-25"
        />
        <hr />

        <h2>ES6 And Modular JavaScrip</h2>
        <p>
        ES6, or ECMAScript 6, is the latest standardized version of JavaScript, bringing many new features and improvements to the language. It's like a breath of fresh air for developers, making JavaScript more powerful and easier to work with.
<br /> <br />
        One of the key features introduced in ES6 is the concept of modules. Modular JavaScript allows us to split our code into reusable pieces, or modules. Each module is a piece of code that is executed once it is loaded. This means we can define a module that can be used across different parts of our application, keeping our code DRY (Don't Repeat Yourself) and easier to maintain.
        <br /> <br />

        We use ES6 and modular JavaScript for a variety of reasons. Firstly, it makes our code more readable and maintainable. Secondly, it allows us to use advanced features like classes, promises, arrow functions, and more. Lastly, it helps us organize our code better, making it easier to test and debug.
        <br /> <br />

        So, how do we use it? Well, to use ES6 and modular JavaScript, we need to use a modern browser that supports it, or a compiler like Babel that can compile our ES6 code into ES5 code that all browsers can understand. We can then start writing our code using the new ES6 syntax and features, and split our code into modules that can be imported and used where needed.
        <br /> <br />

        In conclusion, ES6 and modular JavaScript are powerful tools in a developer's toolbox, helping us write cleaner, more efficient, and more maintainable code.

        </p>

        <TopicVideoPlayer
          videoTitle="ES6 Tutorial: Learn Modern JavaScript in 1 Hour"
          videoSrc="https://www.youtube.com/embed/NCwa_xi0Uuc"
        />
        <TopicVideoPlayer
          videoTitle="Advance Javascript - Modules Tutorial in Hindi / Urdu"
          videoSrc="https://www.youtube.com/embed/FDZIt1MDuBI"
        />
       <TopicVideoPlayer
          videoTitle="Learn JavaScript - Full Course for Beginners"
          videoSrc="https://www.youtube.com/embed/PkZNo7MFNFg"
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
          topicName= "ES6AndModularJavaScript024"
          topicId={24}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/learn-ajax-and-apis-23"
          nextTo="/roadmaps/frontend/understand-the-concepts-25"
        />
      </div>
    </div>
  )
}

export default ES6AndModularJavaScript024;