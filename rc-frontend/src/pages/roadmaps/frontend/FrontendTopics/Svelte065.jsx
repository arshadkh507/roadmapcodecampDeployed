import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const Svelte065 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "Svelte Official Documentation",
      url: "https://svelte.dev/docs",
    },
    {
      id: 2,
      title: "Svelte Tutorial for Beginners",
      url: "https://www.tutorialspoint.com/svelte/index.htm",
    },
    {
      id: 3,
      title: "Svelte: Rethinking Reactivity",
      url: "https://www.youtube.com/watch?v=AdNJ3fydeao",
    },
    {
      id: 4,
      title: "Svelte vs React: Which is better?",
      url: "https://blog.logrocket.com/svelte-vs-react/",
    },
    {
      id: 5,
      title: "Svelte 3: Rethinking reactivity",
      url: "https://svelte.dev/blog/svelte-3-rethinking-reactivity",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>Svelte</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/pick-a-framework-vuejs-64"
          nextTo="/roadmaps/frontend/pick-a-framework-solid-js-66"
        />
        <hr />

        <h2>Svelte</h2>
        <p>
        Svelte is a modern JavaScript framework for building user interfaces. Unlike traditional frameworks, Svelte compiles your code to efficient, imperative code that directly manipulates the DOM. This results in faster initial load times and smoother updates. It's used in situations where performance is critical, or when you need fine control over your app's behavior. It's a great choice for both small and large scale applications due to its simplicity and scalability.

        </p>

        <TopicVideoPlayer
          videoTitle="Svelte Tutorial #1 - Introduction"
          videoSrc="https://www.youtube.com/embed/ujbE0mzX-CU"
        />
        <TopicVideoPlayer
          videoTitle="Svelte.js - The Complete Guide"
          videoSrc="https://www.youtube.com/embed/043h4ugAj4c"
        />
        <TopicVideoPlayer
          videoTitle="Svelte in 100 Seconds"
          videoSrc="https://www.youtube.com/embed/rv3Yq-B8qp4"
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
          topicName= "Svelte065"
          topicId={65}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/pick-a-framework-vuejs-64"
          nextTo="/roadmaps/frontend/pick-a-framework-solid-js-66"
        />
      </div>
    </div>
  )
}

export default Svelte065;