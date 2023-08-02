import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const ORM463 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Understanding ORM (Object-Relational Mapping)",
      url: "https://www.sitepoint.com/hibernate-and-java-orm-overview/",
    },
    {
      id: 2,
      title: "ORMs: An Introduction",
      url: "https://www.fullstackpython.com/object-relational-mappers-orms.html",
    },
    {
      id: 3,
      title: "What is an ORM and Why You Should Use it",
      url: "https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a",
    },
    {
      id: 4,
      title: "ORM Tutorial",
      url: "https://www.youtube.com/watch?v=3vtC9BzWtqE",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>ORM</h1>

        <PaginationButtons
          prevTo="/roadmaps/ml/databases-462"
          nextTo="/roadmaps/ml/sql-464"
        />
        <hr />

        <h2>ORM (Object-Relational Mapping)</h2>
        <p>
        ORM, or Object-Relational Mapping, is a programming technique that allows us to interact with our database, like SQL, as if it were objects. This means we can use our familiar object-oriented programming concepts, such as inheritance and polymorphism, with our data. It's a handy tool that can save us from writing a lot of repetitive SQL code. We typically use ORM in web and software development, where it helps us to create, retrieve, update, and delete records from our database in an intuitive way.

        </p>

        <TopicVideoPlayer
          videoTitle="What is ORM? | Object Relational Mapping"
          videoSrc="https://www.youtube.com/embed/KthQ0UmBmxE"
        />
        <TopicVideoPlayer
          videoTitle="#15 Django tutorials | ORM | Object Relational Mapper | Theory"
          videoSrc="https://www.youtube.com/embed/7E1M1W9o7PA"
        />
        <TopicVideoPlayer
          videoTitle="What is ORM tool ?"
          videoSrc="https://www.youtube.com/embed/wIp3veR_9Ag"
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
          topicName= "ORM463"
          topicId={463}
          roadmapName="rcml"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/ml/databases-462"
          nextTo="/roadmaps/ml/sql-464"
        />
      </div>
    </div>
  )
}

export default ORM463;