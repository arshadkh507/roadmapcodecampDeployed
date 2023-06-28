import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const HTMLFormAndValidation010 = () => {
  const recommendedReading = [
    { id: 1, title: "HTML Forms", url: "https://www.w3schools.com/html/html_forms.asp" },
    { id: 2, title: "Forms - HTML: HyperText Markup Language | MDN", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" },
    { id: 3, title: "HTML Form Tutorial for Beginners", url: "https://youtu.be/5bMdjkfvONE" },
    { id: 4, title: "HTML Form Validation", url: "https://www.w3schools.com/js/js_validation.asp" },
    { id: 5, title: "Client-side form validation - Learn web development | MDN", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation" },
    { id: 6, title: "HTML Form Validation Tutorial", url: "https://youtu.be/In0nB0ABaUk" }
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>HTML Form & Validation</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/html-writing-semantic-html-9"
          nextTo="/roadmaps/frontend/html-web-accessibility-11"
        />
        <hr />

        <h2>HTML Form And Validation</h2>
        <p>
          HTML is a markup language that allows you to create web pages that users can interact with. One of the most important components of user interaction on the web is the use of forms. HTML forms allow users to submit information to a web server, which is then used to process user input. HTML forms are made up of a number of different elements, including text boxes, radio buttons, checkboxes, and drop-down menus.</p>

        <p>One of the key aspects of working with HTML forms is validation. Validation is the process of ensuring that the information submitted by the user meets certain requirements. This is important for a variety of reasons, including security and accuracy of data. There are a number of different methods that can be used to validate an HTML form, including JavaScript, server-side validation, and client-side validation.</p>

        <p>JavaScript validation involves using JavaScript code to check the form data as it is being submitted. This is done by attaching JavaScript functions to various form elements, which are then called when the form is submitted. Server-side validation involves checking the form data after it has been submitted to the server. This is typically done using a scripting language such as PHP or Python. Client-side validation involves using JavaScript code to check the form data as it is being entered by the user. This can prevent the user from submitting invalid data in the first place.</p>

        <p>Overall, HTML forms and validation are essential components of web development. By understanding how to create and validate HTML forms, you can create web applications that are both secure and user-friendly. Whether you are building a simple contact form or a complex e-commerce site, HTML forms and validation are critical skills that every web developer should master.
        </p>

        <TopicVideoPlayer videoTitle="HTML Form Tutorial for Beginners" videoSrc="https://www.youtube.com/embed/5bMdjkfvONE" />

        <TopicVideoPlayer videoTitle="HTML Form Validation Tutorial" videoSrc="https://www.youtube.com/embed/In0nB0ABaUk" />


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
          topicName="HTMLFormAndValidation010"
          topicId={10}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/html-writing-semantic-html-9"
          nextTo="/roadmaps/frontend/html-web-accessibility-11"
        />
      </div>
    </div>
  );
};

export default HTMLFormAndValidation010;