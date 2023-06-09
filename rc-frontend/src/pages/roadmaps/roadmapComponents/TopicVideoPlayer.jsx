import styles from "../roadmapsAssets/topics.module.css";


const TopicVideoPlayer = ({ videoTitle, videoSrc }) => {
  return (
    <div className={styles.topicVideo}>
      <h5 className={styles.videoTitle}>{videoTitle}</h5>
      <iframe
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
      <a className={styles.videoLink} href={videoSrc} target="_blank" rel="noopener noreferrer">{videoTitle}</a>
    </div>
  );
};


export default TopicVideoPlayer;

