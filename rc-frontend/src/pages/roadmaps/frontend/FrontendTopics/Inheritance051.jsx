import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Inheritance051 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Inheritance in JavaScript - W3Schools",
      url: "https://www.w3schools.com/js/js_object_prototypes.asp",
    },
    {
      id: 2,
      title: "Understanding Prototypes and Inheritance in JavaScript - DigitalOcean",
      url: "https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript",
    },
    {
      id: 3,
      title: "JavaScript Inheritance and the Prototype Chain - MDN Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
    },
    {
      id: 4,
      title: "JavaScript Inheritance - GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/javascript-inheritance/",
    },
    {
      id: 5,
      title: "Inheritance in JavaScript - JavaScript.Info",
      url: "https://javascript.info/prototype-inheritance",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Inheritance</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-prototypes-50"
          nextTo="/roadmaps/frontend/build-tools-linters-and-formatters-52"
        />
        <hr />

        <h2>Inheritance</h2>
        <p>
        Inheritance in JavaScript is a concept that allows one object to gain the properties and methods of another object. This is a powerful feature that promotes code reusability and modularity. It's commonly used when you have objects that are similar but need additional or more specific features. For example, you might have a 'Vehicle' object and then 'Car' and 'Motorcycle' objects that inherit from it, each with their own additional properties or methods.

        </p>
        <TopicVideoPlayer
          videoTitle="Inheritance & extends Keyword in JavaScript | JavaScript Tutorial in Hindi"
          videoSrc="https://www.youtube.com/embed/9loYq8W8rsg"
        />
        <TopicVideoPlayer
          videoTitle="Advance Javascript - Class Inheritance Tutorial in Hindi "
          videoSrc="https://www.youtube.com/embed/2ZNbdUyjGUY"
        />
        <TopicVideoPlayer
          videoTitle="JavaScript ES6, ES7, ES8: Learn to Code on the Bleeding Edge (Full Course)"
          videoSrc="https://www.youtube.com/embed/nZ1DMMsyVyI"
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
          topicName= "Inheritance051"
          topicId={51}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-prototypes-50"
          nextTo="/roadmaps/frontend/build-tools-linters-and-formatters-52"
        />
      </div>
    </div>
  )
}

export default Inheritance051;