import React from 'react';
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const HTMLWebAccessibility011 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "What is web accessibility?",
      url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
    },
    {
      id: 2,
      title: "Accessibility - HTML: HyperText Markup Language | MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Accessibility",
    },
    {
      id: 3,
      title: "Web Accessibility Tutorial for Beginners",
      url: "https://youtu.be/cOmehxAU_4s",
    },
    {
      id: 4,
      title: "HTML Accessibility Techniques",
      url: "https://www.w3schools.com/html/html_accessibility.asp",
    },
    {
      id: 5,
      title: "Web Content Accessibility Guidelines (WCAG) Overview",
      url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
    },
    {
      id: 6,
      title: "Web Accessibility Checklist",
      url: "https://webaim.org/standards/wcag/checklist",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>HTML Web Accessibility</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/html-form-and-validation-10"
          nextTo="/roadmaps/frontend/html-seo-basics-12"
        />
        <hr />

        <h2>HTML Web Accessibility</h2>
        <p>
          HTML - Web Accessibility is the practice of making web pages accessible to everyone, regardless of their abilities or disabilities.Web accessibility means that people with visual, hearing, motor, cognitive, or other impairments can perceive, understand, navigate, and interact with web content.Web accessibility also benefits people who use different devices, browsers, or network conditions.Web accessibility follows some guidelines and standards that help web developers create accessible web pages.Web accessibility is important because it ensures that everyone can access and enjoy the web.🌐
        </p>

        <TopicVideoPlayer videoTitle="Web Accessibility Tutorial for Beginners" videoSrc="https://www.youtube.com/embed/cOmehxAU_4s" />

        <TopicVideoPlayer videoTitle="HTML Accessibility Techniques" videoSrc="https://www.youtube.com/embed/5R-6WvAihms" />


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
          topicName="HTMLWebAccessibility011"
          topicId={11}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/html-form-and-validation-10"
          nextTo="/roadmaps/frontend/html-seo-basics-12"
        />
      </div>
    </div>
  );
};

export default HTMLWebAccessibility011;







