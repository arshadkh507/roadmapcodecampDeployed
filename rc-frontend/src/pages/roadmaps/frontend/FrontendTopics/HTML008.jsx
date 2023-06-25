import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const HTML008 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "HTML Tutorial - W3Schools",
      url: "https://www.w3schools.com/html/",
    },
    {
      id: 2,
      title: "HTML: HyperText Markup Language | MDN - MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 3,
      title: "HTML basics - Learn web development | MDN - MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
    },
    {
      id: 4,
      title: "What is HTML? - Codecademy",
      url: "https://www.codecademy.com/articles/what-is-html",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>HTML </h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/what-is-hosting-7"
          nextTo="/roadmaps/frontend/html-writing-semantic-html-9"
        />
        <hr />

        <h2>HTML-HyperText Markup Language</h2>
        <p>
          HTML, which stands for Hypertext Markup Language, is the foundation of every web page you see on the internet. It's like the building blocks that give structure and meaning to the content you view in your browser.
        </p>
        <p>
          HTML, which stands for Hypertext Markup Language, is the foundation of every web page you see on the internet. It's like the building blocks that give structure and meaning to the content you view in your browser.

          Imagine you're creating a document, but instead of using a word processor, you use HTML to structure your information. HTML uses tags, which are like instructions, to define different elements of your document. For example, you can use a <code>h1</code> tag to mark a heading, <code>p</code> tags for paragraphs, <code>img</code>  tags for images, and so on.</p>
        <p>These tags help browsers understand how to display your content. They provide a structure that determines what text is a heading, what text is a paragraph, where images should be placed, and how different elements relate to each other.</p>
        <p>HTML also allows you to include links, create lists, add tables, and much more. It's a versatile language that allows you to express your content in a meaningful way.</p>


        <TopicVideoPlayer
          videoTitle="HTML Full Course - Build a Website Tutorial"
          videoSrc="https://www.youtube.com/embed/pQN-pnXPaVg"
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
          topicName="HTML008"
          topicId={1}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/what-is-hosting-7"
          nextTo="/roadmaps/frontend/html-writing-semantic-html-9"
        />
      </div>
    </div>
  );
};

export default HTML008;