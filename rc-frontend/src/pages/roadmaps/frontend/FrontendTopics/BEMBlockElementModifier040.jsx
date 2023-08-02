import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const BEMBlockElementModifier040 = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "BEM — Block Element Modifier Introduction",
      url: "https://en.bem.info/methodology/quick-start/",
    },
    {
      id: 2,
      title: "BEM 101 on CSS-Tricks",
      url: "https://css-tricks.com/bem-101/",
    },
    {
      id: 3,
      title: "Introduction to BEM (Block Element Modifier)",
      url: "https://www.youtube.com/watch?v=JcT5V3U_TxY",
    },
    {
      id: 4,
      title: "BEM For Beginners: Why You Need BEM",
      url: "https://www.smashingmagazine.com/2018/06/bem-for-beginners/",
    },
    {
      id: 5,
      title: "Mastering BEM Naming Convention",
      url: "https://medium.com/@dmitrypashkevich/mastering-bem-naming-convention-7b437a0f8b25",
    },
  ];

  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>BEM Block Element Modifier</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/package-managers-pnpm-39"
          nextTo="/roadmaps/frontend/css-preprocessors-sass-41"
        />
        <hr />

        <h2>BEM Block Element Modifier</h2>
        <p>
        BEM, which stands for Block Element Modifier, is a highly useful methodology for writing maintainable and scalable CSS. It's a naming convention that makes your CSS easier to read and understand. It also makes your styles more predictable and easier to work with. <br /> <br />
        In BEM, a Block is a standalone entity that is meaningful on its own. An Element is a part of a Block that has no standalone meaning and is semantically tied to its Block. A Modifier is a property of a Block or an Element that can alter its look or behavior.<br /> <br />
        We use BEM in large-scale projects where maintainability and scalability are of high importance. It's a great way to keep your code organized and prevent styles from "leaking" out into other elements.

        </p>

        <TopicVideoPlayer
          videoTitle="Why I use the BEM naming convention for my CSS"
          videoSrc="https://www.youtube.com/embed/SLjHSVwXYq4"
        />
        <TopicVideoPlayer
          videoTitle="You Probably Need BEM CSS in Your Life (Tutorial)"
          videoSrc="https://www.youtube.com/embed/er1JEDuPbZQ"
        />
        <TopicVideoPlayer
          videoTitle="CSS BEM - The What, How, and Why | Block Element Modifier Methodology"
          videoSrc="https://www.youtube.com/embed/aKenj9ZQwJg"
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
          topicName= "BEMBlockElementModifier040"
          topicId={40}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/package-managers-pnpm-39"
          nextTo="/roadmaps/frontend/css-preprocessors-sass-41"
        />
      </div>
    </div>
  )
}

export default BEMBlockElementModifier040;