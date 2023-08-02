import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Prototypes050 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "JavaScript Prototypes Explained",
      url: "https://www.freecodecamp.org/news/javascript-prototypes-explained/",
    },
    {
      id: 2,
      title: "Understanding Prototypes in JavaScript",
      url: "https://hackernoon.com/understanding-prototypes-in-javascript-c5a88f1c5172",
    },
    {
      id: 3,
      title: "JavaScript Prototype in Plain Language",
      url: "https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/",
    },
    {
      id: 4,
      title: "Prototypes in JavaScript",
      url: "https://www.youtube.com/watch?v=rFiGTFZjIvs",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Prototypes</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-classes-49"
          nextTo="/roadmaps/frontend/advance-javascript-inheritance-51"
        />
        <hr />

        <h2>Prototypes</h2>
        <p>
        Prototypes in JavaScript are a core concept that allow us to create and share properties and methods across objects. They are essentially the mechanism by which JavaScript objects inherit features from one another.  <br />
        <br />
        We use prototypes primarily for two reasons: to implement inheritance in our code, and to add properties or methods to an object after it has been defined. <br /><br />
        For example, if we have a 'Car' object and we want to add a method that allows us to start the car, we can add this method to the Car's prototype. This way, all instances of 'Car' will have access to this method.

        </p>

        <TopicVideoPlayer
          videoTitle="Protypes and __proto__ in JavaScript | JavaScript Tutorial in Hindi "
          videoSrc="https://www.youtube.com/embed/eDxrLEQbLv0"
        />
        <TopicVideoPlayer
          videoTitle="Prototype and Prototypal Inheritance in Javascript | Frontend Interview Question"
          videoSrc="https://www.youtube.com/embed/wstwjQ1yqWQ"
        />
        <TopicVideoPlayer
          videoTitle="Build 15 JavaScript Projects - Vanilla JavaScript Course"
          videoSrc="https://www.youtube.com/embed/3PHXvlpOkf4"
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
          topicName= "Prototypes050"
          topicId={50}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-classes-49"
          nextTo="/roadmaps/frontend/advance-javascript-inheritance-51"
        />
      </div>
    </div>
  )
}

export default Prototypes050;