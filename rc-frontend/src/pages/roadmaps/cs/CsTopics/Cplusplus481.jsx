import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Cplusplus481 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "C++ Tutorial for Beginners",
      url: "https://www.programiz.com/cpp-programming",
    },
    {
      id: 2,
      title: "Learn C++ - C++ Programming for Complete Beginners",
      url: "https://www.udemy.com/course/free-learn-c-tutorial-beginners/",
    },
    {
      id: 3,
      title: "The C++ Programming Language (Bjarne Stroustrup)",
      url: "https://www.amazon.com/The-Programming-Language-4th-Edition/dp/0321563840",
    },
    {
      id: 4,
      title: "C++ Primer (Stanley B. Lippman, Josée Lajoie, Barbara E. Moo)",
      url: "https://www.amazon.com/C-Primer-5th-Stanley-Lippman/dp/0321714113",
    },
    {
      id: 5,
      title: "C++ Standard Library Reference",
      url: "https://en.cppreference.com/w/",
    },
    {
      id: 6,
      title: "Effective Modern C++ (Scott Meyers)",
      url: "https://www.oreilly.com/library/view/effective-modern-c/9781491908419/",
    },
    {
      id: 7,
      title: "Accelerated C++ (Andrew Koenig, Barbara E. Moo)",
      url: "https://www.amazon.com/Accelerated-C-Practical-Programming-Example/dp/020170353X",
    },
    // Add more items as needed...
  ]
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Cplusplus</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/pick-a-language-480"
          nextTo="/roadmaps/cs/c-482"
        />
        <hr />

        <h2>Cplusplus481</h2>
        <p>
        C++ is a powerful, high-performance programming language designed to provide explicit control over hardware resources. It's widely used in the development of software infrastructure and resource-constrained applications, like desktop applications or e-commerce servers. 
        <br /> <br />
        C++ is cherished for its speed and efficiency. It allows procedural programming for intensive functions of the CPU and provides control over hardware, because of which it has been widely used in developing different games or in gaming engines. 
        <br /> <br />
        
        C++ also plays a pivotal role in many other sectors: banking applications, real-time physical simulations, high-performance image processing, and real-time systems, to name a few. 
        <br /> <br />
        
        So, if you're looking for a language that offers a blend of performance and high-level functionality, C++ is a great choice.

        </p>

        <TopicVideoPlayer
  videoTitle="C++ Crash Course for Beginners"
  videoSrc="https://www.youtube.com/embed/1v_4dL8l8pQ"
/>
<TopicVideoPlayer
  videoTitle="C++ Tutorial for Beginners - Full Course"
  videoSrc="https://www.youtube.com/embed/vLnPwxZdW4Y"
/>
<TopicVideoPlayer
  videoTitle="1. Introduction to C++ | Data Structures and Algorithms | College Placement Course | Lecture 1"
  videoSrc="https://www.youtube.com/embed/z9bZufPHFLU"
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
          topicName= "Cplusplus481"
          topicId={481}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/pick-a-language-480"
          nextTo="/roadmaps/cs/c-482"
        />
      </div>
    </div>
  )
}

export default Cplusplus481;