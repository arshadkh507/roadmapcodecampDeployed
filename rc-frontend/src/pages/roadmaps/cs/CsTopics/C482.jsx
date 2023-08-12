import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const C482 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "C Programming Absolute Beginner's Guide (3rd Edition)",
      url: "https://www.pearson.com/us/higher-education/program/Perry-C-Programming-Absolute-Beginner-s-Guide-3rd-Edition/PGM163398.html",
    },
    {
      id: 2,
      title: "C Programming for the Absolute Beginner (2nd Edition)",
      url: "https://www.pearson.com/us/higher-education/program/Perry-C-Programming-for-the-Absolute-Beginner-2nd-Edition/PGM142075.html",
    },
    {
      id: 3,
      title: "C Programming: A Modern Approach (2nd Edition)",
      url: "https://www.wwnorton.co.uk/books/9780393979503-c-programming",
    },
    {
      id: 4,
      title: "The C Programming Language (2nd Edition)",
      url: "https://www.pearson.com/us/higher-education/program/Kernighan-C-Programming-Language-2nd-Edition-The/PGM301703.html",
    },
    {
      id: 5,
      title: "C Programming Language: The Ultimate Beginner’s Guide",
      url: "https://www.amazon.com/C-Programming-Language-Ultimate-Beginners/dp/1801073983",
    },
    {
      id: 6,
      title: "Learn C Programming: A beginner's guide to learning C programming the easy and disciplined way",
      url: "https://www.amazon.com/Learn-Programming-beginners-programming-disciplined/dp/9798703874327",
    },
    {
      id: 7,
      title: "C Programming Absolute Beginner's Guide (3rd Edition)",
      url: "https://www.amazon.com/Programming-Absolute-Beginners-Guide-Guides/dp/0672337126",
    },
    // Add more items as needed...
  ];
  
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>C</h1>

        <PaginationButtons
          prevTo="/roadmaps/cs/cplusplus-481"
          nextTo="/roadmaps/cs/python-483"
        />
        <hr />

        <h2>C</h2>
        <p>
        C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners. 
        <br /> <br />
        Why use C? Well, C is a foundational language that has influenced many others, including C++ and Python. It's a language that's used to build other languages. It's also commonly used in programming for embedded systems. 
        <br /> <br />
        
        How do we use it? C is a compiled language, which means you write the code, and then run a compiler to turn it into a program that can be run. The syntax is straightforward, with a focus on functions and logical structures. 
        <br /> <br />
        
        As for real-world examples, C is used extensively in a wide range of applications. For instance, the Linux operating system is written in C. It's also used in the development of gaming engines, and even in scientific computing. 
        <br /> <br />
        
        So, whether you're looking to understand more about how your computer works, or want to get into software development, learning C is a great place to start!

        </p>

        <TopicVideoPlayer
  videoTitle="C Language Tutorial for Beginners (with Notes & Practice Questions)"
  videoSrc="https://www.youtube.com/embed/irqbmMNs2Bo"
/>
<TopicVideoPlayer
  videoTitle="C Programming Tutorial for Beginners"
  videoSrc="https://www.youtube.com/embed/KJgsSFOSQv0"
/>
<TopicVideoPlayer
  videoTitle="C Programming Full Course for free 🕹️"
  videoSrc="https://www.youtube.com/embed/87SH2Cn0s9A"
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
          topicName= "C482"
          topicId={482}
          roadmapName="rccs"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/cs/cplusplus-481"
          nextTo="/roadmaps/cs/python-483"
        />
      </div>
    </div>
  )
}

export default C482;