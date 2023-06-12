import { FaCheckCircle, FaSyncAlt } from "react-icons/fa";
import styles from "../roadmapsAssets/topics.module.css";
import useWindowWidth from "../../../customHook/WindowWidth";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import showToast from "../../../components/user/showToast";
import { ToastContainer } from "react-toastify";

const TaskStateButtons = ({ topicName, topicId, roadmapName }) => {
  const windowWidth = useWindowWidth();

  const [ setIsCompleted ] = useState(false);
  const [ isRoadmapExist, setIsRoadmapExist ] = useState(false);

  useEffect(() => {
    const roadmapData = localStorage.getItem(roadmapName);
    if (roadmapData) {
      setIsRoadmapExist(true);
      const topicsData = JSON.parse(roadmapData);
      const topicExist = topicsData.find(
        (topic) => topic.topicId === topicId
        // (topic) => topic.topicId === topicId || topic.topicName === topicName
      );
      setIsCompleted(!!topicExist);
    }
  }, [ roadmapName, setIsCompleted, topicId, topicName ]);

  const handleDoneClick = () => {
    const topicData = { topicId, topicName };
    if (!isRoadmapExist) {
      localStorage.setItem(roadmapName, JSON.stringify([ topicData ]));
      showToast({ message: `Congrigulation! You have Completed Task `, type: 'success' });
    } else {
      const roadmapData = localStorage.getItem(roadmapName);
      const topicsData = JSON.parse(roadmapData);
      const topicExist = topicsData.find(
        (topic) => topic.topicId === topicId
      );
      if (!topicExist) {
        topicsData.push(topicData);
        localStorage.setItem(roadmapName, JSON.stringify(topicsData));
        showToast({ message: `Congrigulation! You have Completed Task `, type: 'success' });
      }
    }

    setIsCompleted(true);
  };

  const handleProgressClick = () => {
    const roadmapData = localStorage.getItem(roadmapName);
    if (!roadmapData) {
      showToast({ message: 'Not completed yet!', type: 'warning' });
      return;
    }
    const topicsData = JSON.parse(roadmapData);
    const topicExistIndex = topicsData.findIndex(
      (topic) => topic.topicId === topicId
    );
    // if (topicExistIndex === -1) {
    //   alert("Not completed yet!");
    //   return;
    // }
    topicsData.splice(topicExistIndex, 1);
    localStorage.setItem(roadmapName, JSON.stringify(topicsData));
    setIsCompleted(false);
  };



  const roadmapData = localStorage.getItem(roadmapName);
  const isTopicInRoadmap = roadmapData ? JSON.parse(roadmapData).some(
    (topic) => topic.topicId === topicId
  ) : false;

  const isMakeAsDoneButtonDisabled = roadmapData && isTopicInRoadmap;
  const isMakeAsProgressButtonDisabled = !localStorage.getItem(roadmapName) || (roadmapData && !isTopicInRoadmap);

  return (
    <div className={styles.donependingButtons}>
      <ToastContainer />
      <button
        className={`${ styles.doneBtn } ${ isMakeAsDoneButtonDisabled && styles.disabled }`}
        onClick={handleDoneClick}
        disabled={isMakeAsDoneButtonDisabled}
      >
        {windowWidth < 370 ? "Completed" : "Make as done"}
        <FaCheckCircle />
      </button>
      <button
        className={`${ styles.pendingBtn } ${ isMakeAsProgressButtonDisabled && styles.disabled }`}
        onClick={handleProgressClick}
        disabled={isMakeAsProgressButtonDisabled}
      >
        {windowWidth < 370 ? "Pending" : "Make as pending"}
        <FaSyncAlt />
      </button>
    </div>
  );
};

export default TaskStateButtons;

TaskStateButtons.propTypes = {
  topicId: PropTypes.number.isRequired,
  topicName: PropTypes.string.isRequired,
  roadmapName: PropTypes.string.isRequired,
};


