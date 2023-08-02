import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Sass041 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Sass Basics",
      url: "https://sass-lang.com/guide",
    },
    {
      id: 2,
      title: "Sass Tutorial by MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Sass",
    },
    {
      id: 3,
      title: "Sass Tutorial by W3Schools",
      url: "https://www.w3schools.com/sass/",
    },
    {
      id: 4,
      title: "Sass vs SCSS: which one to choose?",
      url: "https://www.bettercoder.io/tutorials/sass-vs-scss",
    },
    {
      id: 5,
      title: "Sass Crash Course",
      url: "https://www.youtube.com/watch?v=Zz6eOVaaelI",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Sass</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-architecture-bem-40"
          nextTo="/roadmaps/frontend/css-preprocessors-less-42"
        />
        <hr />

        <h2>Sass</h2>
        <p>
        Sass, short for Syntactically Awesome Stylesheets, is a powerful tool in the modern web development toolkit. It's a CSS preprocessor that allows us to use features that don't exist in CSS yet like variables, nesting, mixins, inheritance, and more.
        <br /> <br /> 
        Why do we use it? Well, it adds a whole lot of functionality to our stylesheets that makes our CSS more maintainable, themeable, and extendable. It helps keep large stylesheets well-organized and makes it easy to share design within and across projects. So, if you're looking to take your CSS to the next level, Sass is a great place to start!

        </p>

        <TopicVideoPlayer
          videoTitle="Sass in 100 Seconds"
          videoSrc="https://www.youtube.com/embed/akDIJa0AP5c"
        />
        <TopicVideoPlayer
          videoTitle="Sass Tutorial for Beginners - CSS With Superpowers"
          videoSrc="https://www.youtube.com/embed/_a5j7KoflTs"
        />
        <TopicVideoPlayer
          videoTitle="Sass Crash Course"
          videoSrc="https://www.youtube.com/embed/nu5mdN2JIwM"
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
          topicName= "Sass041"
          topicId={41}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/css-architecture-bem-40"
          nextTo="/roadmaps/frontend/css-preprocessors-less-42"
        />
      </div>
    </div>
  )
}

export default Sass041;