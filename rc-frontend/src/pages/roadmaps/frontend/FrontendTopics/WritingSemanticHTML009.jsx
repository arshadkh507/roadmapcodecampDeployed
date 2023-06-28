import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const WritingSemanticHTML009 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is HTML?",
      url: "https://cs.fyi/guide/what-is-html",
    },
    {
      id: 2,
      title: "HTML basics",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
    },
    {
      id: 3,
      title: "HTML Tutorial for Beginners",
      url: "https://youtu.be/pQN-pnXPaVg",
    },
    {
      id: 4,
      title: "Semantic HTML",
      url: "https://www.w3schools.com/html/html5_semantic_elements.asp",
    },
    {
      id: 5,
      title: "Why Semantic HTML Matters",
      url: "https://www.freecodecamp.org/news/semantic-html5-elements/",
    },
    {
      id: 6,
      title: "Semantic HTML in 10 Minutes",
      url: "https://youtu.be/9Jef9IluQw0",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Writing Semantic HTML</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/html-8"
          nextTo="/roadmaps/frontend/html-form-and-validation-10"
        />
        <hr />

        <h2>Writing Semantic HTML</h2>
        <p>
          When it comes to coding websites, one of the most important things to consider is the use of semantic HTML. Essentially, this means that you are using code that accurately reflects the content and structure of your site. Semantic HTML is useful for several reasons. Firstly, it makes your code easier to understand for other developers who may be working on your site in the future. It also makes it easier for search engines to understand and index your content, which can help with your site's SEO. To write semantic HTML, it's important to use appropriate tags for each piece of content on your site. For example, use h1 tags for main headings, p tags for paragraphs, and ul tags for lists. Avoid using div tags for everything, as this can make it harder to understand the structure of your site. Overall, writing semantic HTML can make your site more accessible, understandable, and SEO-friendly.
        </p>

        <TopicVideoPlayer videoTitle="Semantic HTML in 10 Minutes" videoSrc="https://www.youtube.com/embed/9Jef9IluQw0" />
        <TopicVideoPlayer videoTitle="Semantic HTML Tutorial" videoSrc="https://www.youtube.com/embed/8aGhZQkoFbQ" />

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
          topicName="WritingSemanticHTML009"
          topicId={9}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/html-8"
          nextTo="/roadmaps/frontend/html-form-and-validation-10"
        />
      </div>
    </div>
  );
};

export default WritingSemanticHTML009;