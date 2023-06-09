import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "../../roadmapsAssets/leftSidebar.module.css";
import mlTopicsData from "../mlTopicsData";
import { useLeftSideNavbar } from '../../../../containers/LeftSideNavbarContext';
const MlLeftSidebar = () => {
  const { showLeftSideNavbar, toggleLeftSideNavbar } = useLeftSideNavbar();
  const location = useLocation();
  return (
    <div className={styles.leftsideMenu} >
      <h2>Machine Learning Roadmap</h2>
      {mlTopicsData.map((topic) => (
        <Link
          key={topic.topicId}
          to={topic.topicPath}
          className={`${ styles.leftsideMenuLink } ${ location.pathname === topic.topicPath && styles.activeMenuLink }`}
          onClick={() => toggleLeftSideNavbar(!showLeftSideNavbar)}
        >
          {topic.topicName}
        </Link>
      ))}
    </div>
  );
};

export default MlLeftSidebar;






