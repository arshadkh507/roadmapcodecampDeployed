import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const HTMLSEOBasics012 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is SEO?",
      url: "https://moz.com/learn/seo/what-is-seo",
    },
    {
      id: 2,
      title: "SEO basics: 22 essentials you need for optimizing your site",
      url: "https://www.searchenginewatch.com/2016/01/21/seo-basics-22-essentials-you-need-for-optimizing-your-site/",
    },
    {
      id: 3,
      title: "SEO Tutorial for Beginners",
      url: "https://youtu.be/hF515-0Tduk",
    },
    {
      id: 4,
      title: "HTML and CSS for SEO",
      url: "https://www.w3schools.com/html/html_seo.asp",
    },
    {
      id: 5,
      title: "HTML elements reference - HTML: HyperText Markup Language | MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
    },
    {
      id: 6,
      title: "HTML SEO Tutorial",
      url: "https://youtu.be/KJ13lX20FqU",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>SEO Basics</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/html-web-accessibility-11"
          nextTo="/roadmaps/frontend/css-13"
        />
        <hr />

        <h2>HTML SEO Basics</h2>
        <p>
          HTML - SEO Basics is the practice of using HTML elements and attributes to optimize web pages for search engines.SEO stands for Search Engine Optimization, which means improving the quality and quantity of web traffic to a website.SEO helps web pages rank higher in search results for relevant keywords and phrases.HTML elements and attributes can provide information to search engines about the content, structure, and meaning of web pages.HTML elements and attributes can also affect the appearance and usability of web pages.HTML - SEO Basics is important because it helps web pages reach more potential users and customers.🔎


        </p>

        <TopicVideoPlayer
          videoTitle="HTML SEO Tutorial"
          videoSrc="https://www.youtube.com/embed/KJ13lX20FqU"
        />



        <TopicVideoPlayer
          videoTitle="SEO For Beginners: A Basic Search Engine Optimization Tutorial for Higher Google Rankings"
          videoSrc="https://www.youtube.com/embed/DvwS7cV9GmQ"
        />;

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
          topicName="HTMLSEOBasics012"
          topicId={12}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/html-web-accessibility-11"
          nextTo="/roadmaps/frontend/css-13"
        />
      </div>
    </div>
  );
};

export default HTMLSEOBasics012;






