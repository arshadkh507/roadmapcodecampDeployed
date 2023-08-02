import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const React062 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "React Documentation",
      url: "https://reactjs.org/docs/getting-started.html",
    },
    {
      id: 2,
      title: "React Tutorial for Beginners",
      url: "https://www.taniarascia.com/getting-started-with-react/",
    },
    {
      id: 3,
      title: "Learn React with Fullstackopen",
      url: "https://fullstackopen.com/en/part1",
    },
    {
      id: 4,
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    },
    {
      id: 5,
      title: "React.js: Building an Interface",
      url: "https://www.linkedin.com/learning/react-js-building-an-interface",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>React</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-module-bundlers-parcel-61"
          nextTo="/roadmaps/frontend/pick-a-framework-angular-63"
        />
        <hr />

        <h2>React</h2>
        <p>
        React is a popular JavaScript library for building user interfaces, particularly for single-page applications. It's used for handling the view layer in web and mobile apps. React allows you to design simple views for each state in your application, and it will efficiently update and render the right components when your data changes. React's main goal is to be fast, simple, and scalable. So, if you're looking to build high-performance user interfaces, React could be a great fit.

        </p>

        <TopicVideoPlayer
          videoTitle="React JS Tutorial for Beginners"
          videoSrc="https://www.youtube.com/embed/Ke90Tje7VS0"
        />
        <TopicVideoPlayer
          videoTitle="React JS Crash Course"
          videoSrc="https://www.youtube.com/embed/w7ejDZ8SWv8"
        />
        <TopicVideoPlayer
          videoTitle="Full React Course 2020"
          videoSrc="https://www.youtube.com/embed/4UZrsTqkcW4"
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
          topicName= "React062"
          topicId={62}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/build-tools-module-bundlers-parcel-61"
          nextTo="/roadmaps/frontend/pick-a-framework-angular-63"
        />
      </div>
    </div>
  )
}

export default React062;