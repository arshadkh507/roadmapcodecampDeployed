import styles from "./demoVideos.module.css";

const DemoVideos = () => {

  const demoVideosData = [
    {
      id: 1,
      title: "Python for Beginners",
      embededUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc",
      link: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
      description: "Learn Python, the most popular language for web development, data analysis, and AI."
    },
    {
      id: 2,
      title: "Learn JavaScript for Beginners",
      embededUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
      link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      description: "Get started with JavaScript and build dynamic and interactive web applications."
    },
    {
      id: 3,
      title: "Introduction To Machine Learning",
      embededUrl: "https://www.youtube.com/embed/ukzFI9rgwfU",
      link: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
      description: "Learn the basics of Machine Learning and build your first ML model."
    },
    {
      id: 4,
      title: "Full Computer Science University Course",
      embededUrl: "https://www.youtube.com/embed/8mAITcNt710",
      link: "https://www.youtube.com/watch?v=8mAITcNt710",
      description: "Get a full Computer Science University course and learn programming, algorithms, data structures, and more."
    },
    {
      id: 5,
      title: "System Design for Beginners",
      embededUrl: "https://www.youtube.com/embed/m8Icp_Cid5o",
      link: "https://www.youtube.com/watch?v=m8Icp_Cid5o",
      description: "Learn the basics of System Design and build scalable and reliable systems."
    },
    {
      id: 6,
      title: "Artificial Intelligence Tutorial for Beginners",
      embededUrl: "https://www.youtube.com/embed/JMUxmLyrhSk",
      link: "https://www.youtube.com/watch?v=JMUxmLyrhSk",
      description: "Get an introduction to Artificial Intelligence and learn the basics of AI and its applications."
    },
  ];



  return (
    <>
      <div className={styles.demoVideosContainer} >
        <div className={styles.demoVideosContent}>
          <h2>Learn Your Way</h2>
          <p>Take the stress out of learning with our easy and simple tutorial references, always available to make your journey effortless and enjoyable. Whether you prefer video tutorials or written guides, we have everything you need to master the tech skills you want.</p>
          <div className={styles.videosContainer}>
            {demoVideosData.map(video => (
              <div className={styles.videoCard} key={video.id}>
                <div className={styles.video}>
                  <iframe
                    src={video.embededUrl}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>

                </div>
                <div className={styles.videoInfo}>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <a href={video.link} target="_blank" rel="noopener noreferrer">Watch Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoVideos;


