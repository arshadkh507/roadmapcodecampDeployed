import { Link, useLocation } from 'react-router-dom';
import styles from "../../roadmapsAssets/leftSidebar.module.css";
import frontendTopicsData from "../frontendTopicsData";
import { useLeftSideNavbar } from '../../../../containers/LeftSideNavbarContext';


const FrontendLeftSidebar = () => {

  const { showLeftSideNavbar, toggleLeftSideNavbar } = useLeftSideNavbar();
  const location = useLocation();


  return (
    <div className={styles.leftsideMenu} >
      <h2>Frontend Roadmap</h2>
      {frontendTopicsData.map((topic) => (
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

export default FrontendLeftSidebar;


