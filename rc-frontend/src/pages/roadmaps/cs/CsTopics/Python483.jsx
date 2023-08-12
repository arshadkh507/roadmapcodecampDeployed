import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Python483 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Python Crash Course: A Hands-On, Project-Based Introduction to Programming",
      url: "https://nostarch.com/pythoncrashcourse2e",
    },
    {
      id: 2,
      title: "Automate the Boring Stuff with Python: Practical Programming for Total Beginners",
      url: "https://automatetheboringstuff.com/",
    },
    {
      id: 3,
      title: "Python for Data Analysis",
      url: "https://www.oreilly.com/library/view/python-for-data/9781491957653/",
    },
    {
      id: 4,
      title: "Learning Python",
      url: "https://www.oreilly.com/library/view/learning-python-5th/9781449355725/",
    },
    {
      id: 5,
      title: "Effective Python: 90 Specific Ways to Write Better Python",
      url: "https://effectivepython.com/",
    },
    {
      id: 6,
      title: "Python Cookbook",
      url: "https://www.oreilly.com/library/view/python-cookbook-3rd/9781449357330/",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Python</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/c-482"
          nextTo="/roadmaps/cs/go-484"
        />
        <hr />

        <h2>Python483</h2>
        <p>
        Python is a high-level, interpreted programming language known for its readability and simplicity. It's designed to be easy to understand and write, which is why it's a great choice for beginners. 
        <br /><br />
        Python is versatile and powerful, making it suitable for a variety of tasks. You can use it for web development, data analysis, machine learning, artificial intelligence, automation, and more. 
        <br /><br />
        
        In the real world, Python is used by many large companies due to its versatility. Google, for instance, uses Python for web search systems, YouTube, and even in their self-driving car project. NASA uses Python for their equipment and space machinery. 
        <br /><br />
        
        So, whether you're looking to dive into the world of programming, automate mundane tasks, or even aim for the stars, Python is a fantastic place to start!

        </p>

        <TopicVideoPlayer
  videoTitle="Python for Beginners - Learn Python in 1 Hour"
  videoSrc="https://www.youtube.com/embed/kqtD5dpn9C8"
/>

<TopicVideoPlayer
  videoTitle="Python Tutorial - Python Full Course for Beginners"
  videoSrc="https://www.youtube.com/embed/_uQrJ0TkZlc"
/>

<TopicVideoPlayer
  videoTitle="Python Tutorial For Beginners In Hindi (With Notes) 🔥"
  videoSrc="https://www.youtube.com/embed/gfDE2a7MKjA"
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
          topicName= "Python483"
          topicId={483}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/c-482"
          nextTo="/roadmaps/cs/go-484"
        />
      </div>
    </div>
  )
}

export default Python483;