import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const LearnAjaxAndAPIs023 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is Ajax and Why is it Used?",
      url: "https://www.javatpoint.com/ajax-tutorial",
    },
    {
      id: 2,
      title: "A Beginner's Guide to AJAX With jQuery",
      url: "https://www.sitepoint.com/use-jquerys-ajax-function/",
    },
    {
      id: 3,
      title: "Using Fetch - Making requests to an API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
    },
    {
      id: 4,
      title: "How to use an API with JavaScript",
      url: "https://rapidapi.com/blog/how-to-use-an-api-with-javascript/",
    },
    {
      id: 5,
      title: "AJAX - Send a Request To a Server",
      url: "https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Learn Ajax And APIs</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/learn-dom-manipulation-22"
          nextTo="/roadmaps/frontend/es6-and-modular-javascript-24"
        />
        <hr />

        <h2>Learn Ajax And APIs</h2>
        <p>
        Ajax, short for Asynchronous JavaScript and XML, is a set of web development techniques used to create asynchronous web applications. By using Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page.
        <br /><br />
        APIs, or Application Programming Interfaces, are sets of rules that allow different software applications to communicate with each other. It's like a menu in a restaurant: the menu provides a list of dishes you can order, along with a description of each dish. When you specify what menu items you want, the restaurant's kitchen does the work and provides you with some finished dishes. You don't know exactly how the restaurant prepares that food, and you don't really need to.
        <br /><br />
        
        Together, Ajax and APIs are used to fetch data from a server and use that data to update a web page without reloading the page. They are essential tools in creating dynamic, responsive web applications.

        </p>

        <TopicVideoPlayer
          videoTitle="Advance JavaScript - Fetch API Tutorial in Hindi / Urdu"
          videoSrc="https://www.youtube.com/embed/9YNGAxXGJzML"
        />
        <TopicVideoPlayer
          videoTitle="What is an API ? Simply Explained"
          videoSrc="https://www.youtube.com/embed/XGa4onZP66Q"
        />
        <TopicVideoPlayer
          videoTitle="AJAX Crash Course (Vanilla JavaScript)"
          videoSrc="https://www.youtube.com/embed/82hnvUYY6QA"
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
          topicName= "LearnAjaxAndAPIs023"
          topicId={23}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/learn-dom-manipulation-22"
          nextTo="/roadmaps/frontend/es6-and-modular-javascript-24"
        />
      </div>
    </div>
  )
}

export default LearnAjaxAndAPIs023;