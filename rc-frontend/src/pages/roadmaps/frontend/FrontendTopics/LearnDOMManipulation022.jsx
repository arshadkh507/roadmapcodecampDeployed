import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const LearnDOMManipulation022 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "DOM Introduction - W3Schools",
      url: "https://www.w3schools.com/js/js_htmldom.asp",
    },
    {
      id: 2,
      title: "Introduction to the DOM - Web APIs | MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
    },
    {
      id: 3,
      title: "JavaScript HTML DOM - W3Schools",
      url: "https://www.w3schools.com/js/js_htmldom.asp",
    },
    {
      id: 4,
      title: "DOM Manipulation in JavaScript - GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/dom-manipulation-in-javascript/",
    },
    {
      id: 5,
      title: "Understanding DOM vs Virtual DOM - React Kung Fu",
      url: "https://reactkungfu.com/2015/10/understanding-react-and-the-virtual-dom/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Learn DOM Manipulation</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/javascript-syntax-and-basics-constructs-21"
          nextTo="/roadmaps/frontend/learn-ajax-and-apis-23"
        />
        <hr />

        <h2>Learn DOM Manipulation</h2>
        <p>
        DOM Manipulation refers to the process by which we can dynamically update and change the content, structure, and style of a webpage. It's like the magic wand of JavaScript, allowing us to interact with and modify web documents in real time. <br /> <br />
        We use DOM Manipulation primarily to enhance the user experience on our webpages. It allows us to create dynamic and interactive websites by enabling us to respond to user actions, update content, and animate elements on the page.
        So, buckle up and get ready to dive into the fascinating world of DOM Manipulation!

        </p>

        <TopicVideoPlayer
          videoTitle="DOM Manipulation | Javascript | Web Development Course"
          videoSrc="https://www.youtube.com/embed/fYR3i0mcE5c"
        />
        <TopicVideoPlayer
          videoTitle="JavaScript DOM Manipulation - Full Course for Beginners"
          videoSrc="https://www.youtube.com/embed/5fb2aPlgoys"
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
          topicName= "LearnDOMManipulation022"
          topicId={22}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/javascript-syntax-and-basics-constructs-21"
          nextTo="/roadmaps/frontend/learn-ajax-and-apis-23"
        />
      </div>
    </div>
  )
}

export default LearnDOMManipulation022;