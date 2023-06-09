import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../customHook/AuthContext';
import { Link } from 'react-router-dom';
import { BsCheckCircleFill } from "react-icons/bs";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FaSpinner } from "react-icons/fa";
import styles from './userProgress.module.css';
import { roadmapCodecampData } from '../../../roadmapCodecampData';
import UserNoProgress from './UserNoProgress';
import UserProgressBar from './UserProgressBar';

const UserProgress = () => {
  const { isLoggedIn } = useAuth();
  const [ completedRoadmaps, setCompletedRoadmaps ] = useState([]);
  const [ collapsed, setCollapsed ] = useState([ false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ]); // initial state: only the first roadmap is expanded

  const toggleCollapse = (index) => {
    const newCollapsed = [ ...collapsed ];
    newCollapsed[ index ] = !newCollapsed[ index ];
    setCollapsed(newCollapsed);
  };

  useEffect(() => {
    const roadmapNames = [ "rcfrontend", "rcbackend", "rcflutter", "rccs", "rcai", "rcml",
      "rcdl", "rcjavascript", "rcreactjs", "rcnodejs", "rcpython", "rcjava", "rcflutter", "rcandriod", "rcdevops", "rcblockchain", "rcdesignsystem" ];
    const completedRoadmaps = roadmapNames.filter((roadmapName) => {
      const completedTopics = JSON.parse(localStorage.getItem(roadmapName));
      return completedTopics && completedTopics.length > 0;
    });
    setCompletedRoadmaps(completedRoadmaps);
  }, []);

  if (!isLoggedIn) {
    return <div></div>;
  }
  return (
    <div className={styles.userProgressContainer}>
      <div className={styles.userProgressWrapper}>
        <div className={styles.userProgressContent}>
          <h1>Track Your Progress and Achieve Your Goals</h1>

          <UserProgressBar completedRoadmaps={completedRoadmaps} />

          {completedRoadmaps.length === 0 ? (
            <UserNoProgress />
          ) : (
            roadmapCodecampData.map((roadmap, index) => {
              const { roadmapId, roadmapName, topics } = roadmap;
              const completedTopics = JSON.parse(localStorage.getItem(roadmapName)) || [];
              const hasCompletedTopics = completedTopics.length > 0;

              const isCollapsed = collapsed[ index ];
              const shouldRender = completedRoadmaps.some((completed) => completed === roadmapName);


              return shouldRender && (
                <div key={roadmapId} className={styles.roadmapContainer}>
                  <h2 className={styles.roadmapName} onClick={() => toggleCollapse(index)}>
                    {roadmapName.replace('rc', '').charAt(0).toUpperCase() + roadmapName.slice(3)}
                    {isCollapsed ? <SlArrowDown /> : <SlArrowUp />}
                  </h2>
                  {!isCollapsed && (
                    <div className={styles.roadmapTopics}>
                      <ul>
                        {topics.map((topic) => {
                          const { topicId, topicName, topicPath } = topic;
                          const isCompleted = completedTopics.some((completedTopic) => completedTopic.topicId === topicId);

                          return (
                            <li key={topicId}>
                              <Link className={styles.topicLink} to={topicPath}>
                                {topicName}
                                {isCompleted && <BsCheckCircleFill className={styles.completed} />}
                                {!isCompleted && hasCompletedTopics && <FaSpinner className={styles.progress} />}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>

                    </div>
                  )};
                </div>
              );
            })
          )}


        </div>
      </div>
    </div>
  );
};

export default UserProgress;

