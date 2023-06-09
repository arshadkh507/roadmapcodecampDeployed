import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "../../roadmapsAssets/leftSidebar.module.css";
import csTopicsData from "../csTopicsData";
import { useLeftSideNavbar } from '../../../../containers/LeftSideNavbarContext';
const CsLeftSidebar = () => {
  const { showLeftSideNavbar, toggleLeftSideNavbar } = useLeftSideNavbar();
  const location = useLocation();
  return (
    <div className={styles.leftsideMenu} >
      <h2>Computer Science Roadmap</h2>
      {csTopicsData.map((topic) => (
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

export default CsLeftSidebar;






