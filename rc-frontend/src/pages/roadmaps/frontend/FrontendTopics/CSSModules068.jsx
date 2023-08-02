import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const CSSModules068 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "CSS Modules by Example",
      url: "https://www.javascriptstuff.com/css-modules-by-example/",
    },
    {
      id: 2,
      title: "Understanding CSS Modules",
      url: "https://medium.com/nulogy/understanding-css-modules-dba4629961b8",
    },
    {
      id: 3,
      title: "CSS Modules Explained",
      url: "https://www.youtube.com/watch?v=3-4KsXPO2Q4",
    },
    {
      id: 4,
      title: "CSS Modules & Sass in Create React App",
      url: "https://www.youtube.com/watch?v=6Urm0v1XV7U",
    },
    {
      id: 5,
      title: "CSS Modules vs CSS in JS",
      url: "https://blog.bitsrc.io/css-modules-vs-css-in-js-265bd7e95c5e",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>CSS Modules</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/modern-css-styled-components-67"
          nextTo="/roadmaps/frontend/modern-css-styled-jsx-69"
        />
        <hr />

        <h2>CSS Modules</h2>
        <p>
        CSS Modules is a CSS file in which all class names and animation names are scoped locally by default. It's like a personal stylist for your components, ensuring they always look good and never have wardrobe clashes. We use CSS Modules to help manage and organize our CSS, especially in large projects where it's easy to accidentally reuse class names. With CSS Modules, we can avoid this issue, making our CSS more maintainable and our components more reliable. So, it's like having a personal assistant who keeps your wardrobe (or in this case, your styles) perfectly organized!

        </p>

        <TopicVideoPlayer
          videoTitle="7 ways to deal with CSS"
          videoSrc="https://www.youtube.com/embed/ouncVBiye_M"
        />
        <TopicVideoPlayer
          videoTitle="CSS Modules: Why are they great?"
          videoSrc="https://www.youtube.com/embed/pKMWU9OrA2s"
        />
        <TopicVideoPlayer
          videoTitle="Setup React CSS Modules (with SASS, multiple classes and more)"
          videoSrc="https://www.youtube.com/embed/kFA-ZJ9KTqs"
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
          topicName= "CSSModules068"
          topicId={68}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/modern-css-styled-components-67"
          nextTo="/roadmaps/frontend/modern-css-styled-jsx-69"
        />
      </div>
    </div>
  )
}

export default CSSModules068;