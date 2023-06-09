import React from "react";
import styles from "./UserProgressBar.module.css";

const UserProgressBar = ({ completedRoadmaps }) => {

  const roadmapSizes = {
    rcfrontend: 136, rcbackend: 120, rcflutter: 30, rccs: 280, rcai: 114, rcml: 229, rcdl: 14, rcjavascript: 10, rcreactjs: 12,
    rcnodejs: 10, rcpython: 16, rcjava: 18, rcandriod: 10, rcdevops: 10, rcblockchain: 14, rcdesignsystem: 8,
  };

  const getProgressPercentage = (roadmapName) => {
    const roadmapSize = roadmapSizes[ roadmapName ];
    const completedTopics = JSON.parse(localStorage.getItem(roadmapName)) || [];
    const completedUnits = completedTopics.length;
    const percentage = (completedUnits / roadmapSize) * 100;

    if (percentage < 1) {
      return percentage.toFixed(2);
    } else {
      return Math.round(percentage);
    }
  };

  return (
    <div className={styles.progressBars}>
      {completedRoadmaps.map((roadmap, index) => {
        const progressPercentage = getProgressPercentage(roadmap);
        return (
          <div key={roadmap} className={styles.progressBar}>
            <div
              className={styles.progressBarFill}
              style={{
                width: `${ progressPercentage }%`,
                animation: `fillAnimation 2s ease-in-out forwards`,
              }}
            />
            <div className={styles.progressBarText} >
              {roadmap.replace('rc', '').charAt(0).toUpperCase() + roadmap.slice(3)} - {progressPercentage}%
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserProgressBar;


