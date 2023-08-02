import React from "react";
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const PerformanceOptimization048 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Optimizing Performance | MDN",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Performance",
    },
    {
      id: 2,
      title: "Front-End Performance Checklist 2021 [PDF, Apple Pages, MS Word]",
      url: "https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/",
    },
    {
      id: 3,
      title: "Performance | web.dev",
      url: "https://web.dev/performance/",
    },
    {
      id: 4,
      title: "Performance Optimization in Frontend Development",
      url: "https://www.geeksforgeeks.org/performance-optimization-in-frontend-development/",
    },
    {
      id: 5,
      title: "10 Modern Ways to Improve Website Loading Speed and Performance",
      url: "https://www.freecodecamp.org/news/10-modern-ways-to-improve-website-loading-speed-performance/",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Performance Optimization</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-event-loop-concurrency-47"
          nextTo="/roadmaps/frontend/advance-javascript-classes-49"
        />
        <hr />

        <h2>Performance Optimization</h2>
        <p>
          Performance optimization in frontend web development is a crucial
          aspect that can significantly enhance the user experience. Here are
          some ways to achieve it: <br /> <br />
          <ul>
            <li>
              Minimize HTTP requests: Too many requests can slow down your page.
              Try to limit the use of scripts, and combine CSS and JavaScript
              files.
            </li>
            <li>
              Use asynchronous loading for CSS and JavaScript files:
              Asynchronous loading can prevent blocking of page rendering.
            </li>
            <li>
              Minify CSS, JavaScript, and HTML: Minification removes unnecessary
              characters from code to reduce its size, thus improving load
              times.
            </li>
            <li>
              Use a Content Delivery Network (CDN): CDNs distribute your content
              across multiple geographic locations to speed up access to your
              website for users worldwide.
            </li>
            <li>
              Optimize images: Use the correct file format and compress images
              to reduce their size without compromising on quality.
            </li>
            <li>
              Implement caching: Caching stores copies of files to serve up to
              users, reducing the need for HTTP requests to the server.
            </li>
            <li>
              Reduce server response time: Your server response time is affected
              by the amount of traffic you receive, the resources each page
              uses, the software your server uses, and the hosting solution you
              use.
            </li>
          </ul> <br /> <br />
          Remember, the goal is to create a smooth and enjoyable user experience
          by making your website load faster and run smoother.
        </p>

        <TopicVideoPlayer videoTitle="Introduction - Website Performance Optimization" videoSrc="https://www.youtube.com/embed/GNAENzKdciQ" />
        <TopicVideoPlayer videoTitle="Optimize for Core Web Vitals" videoSrc="https://www.youtube.com/embed/AQqFZ5t8uNc" />
        <TopicVideoPlayer videoTitle="Website Speed Optimization: How to Check Website Speed & Quality? | Website Testing Tools" videoSrc="https://www.youtube.com/embed/OSZhEivMN1g" />
       

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
          topicName="PerformanceOptimization048"
          topicId={48}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/advance-javascript-event-loop-concurrency-47"
          nextTo="/roadmaps/frontend/advance-javascript-classes-49"
        />
      </div>
    </div>
  );
};

export default PerformanceOptimization048;
