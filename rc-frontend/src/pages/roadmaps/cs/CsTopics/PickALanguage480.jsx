import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const PickALanguage480 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "How to Choose the Right Programming Language for Your Project",
      url: "https://www.freecodecamp.org/news/how-to-choose-the-right-programming-language-for-your-project/",
    },
    {
      id: 2,
      title: "Tips for Choosing the Right Programming Language",
      url: "https://www.geeksforgeeks.org/tips-for-choosing-the-right-programming-language/",
    },
    {
      id: 3,
      title: "Choosing a Programming Language: A Practical Guide",
      url: "https://www.codecademy.com/resources/blog/choosing-a-programming-language",
    },
    {
      id: 4,
      title: "How to Choose a Programming Language for Your Startup",
      url: "https://builtin.com/software-engineering-perspectives/how-choose-programming-language-startup",
    },
    {
      id: 5,
      title: "Factors to Consider When Choosing a Programming Language",
      url: "https://www.codingdojo.com/blog/considerations-choosing-programming-language",
    },
    {
      id: 6,
      title: "The Best Programming Languages to Learn in 2023",
      url: "https://www.businessinsider.com/best-programming-languages-to-learn",
    },
    // Add more items as needed...
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Pick A Language</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs"
          nextTo="/roadmaps/cs/cplusplus-481"
        />
        <hr />

        <h2>PickALanguage480</h2>
        <p>
        Picking a programming language in computer science is like choosing the best tool for a specific job. Just like how a carpenter uses different tools for different tasks, programmers have various languages at their disposal, each with its own strengths and purposes. When deciding which language to learn or use for a project, it's essential to consider factors like the type of project you're working on, your familiarity with other languages, and your ultimate goals. <br /><br />

        Some languages are great for web development, others excel in data analysis or game development. So, take some time to explore the options, consider your project's needs, and don't forget to trust your instincts. With the right language in hand, you'll be well-equipped to bring your coding ideas to life!
        </p>

        <TopicVideoPlayer
  videoTitle="The Programming Language Guide"
  videoSrc="https://www.youtube.com/embed/2lVDktWK-pc"
/>
<TopicVideoPlayer
  videoTitle="How to choose a programming language (for your tech stack)"
  videoSrc="https://www.youtube.com/embed/uZ5bq7cKX4Y"
/>
<TopicVideoPlayer
  videoTitle="What Programming Language Should I Learn First?"
  videoSrc="https://www.youtube.com/embed/poJfwre2PIs"
/>

<TopicVideoPlayer
  videoTitle="Why so many Coding Languages are created?"
  videoSrc="https://www.youtube.com/embed/5QUSeBAMjoo"
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
          topicName= "PickALanguage480"
          topicId={480}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs"
          nextTo="/roadmaps/cs/cplusplus-481"
        />
      </div>
    </div>
  )
}

export default PickALanguage480;