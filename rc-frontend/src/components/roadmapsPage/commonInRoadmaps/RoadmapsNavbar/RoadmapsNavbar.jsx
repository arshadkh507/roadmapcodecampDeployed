import styles from "./roadmapsNavbar.module.css";
import { MdHome } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useMemo, useState, useRef, useEffect } from "react";
import { VscThreeBars } from "react-icons/vsc";
import useWindowWidth from "../../../../customHook/WindowWidth";
import { useLeftSideNavbar } from "../../../../containers/LeftSideNavbarContext";

const RoadmapsNavbar = () => {

  const roadmapsNavLinkData = useMemo(
    () => [
      { id: 1, label: 'Front-end', to: '/roadmaps/frontend', title: 'Frontend Roadmap' },
      { id: 2, label: 'Computer Science', to: '/roadmaps/cs', title: 'Computer Science Roadmap' },
      { id: 3, label: 'Machine Learning', to: '/roadmaps/ml', title: 'Machine Learning Roadmap' },
      { id: 4, label: 'Artificial Intelligence', to: '/roadmaps/ai', title: 'Artificial Intelligence Roadmap' },
      { id: 5, label: 'Back-end', to: '/roadmaps/backend', title: 'Backend Roadmap' },
      { id: 6, label: 'Deep Learning', to: '/roadmaps/dl', title: 'Deep Learning Roadmap' },
      { id: 7, label: 'JavaScript', to: '/roadmaps/javascript', title: 'JavaScript Roadmap' },
      { id: 8, label: 'ReactJS', to: '/roadmaps/reactjs', title: 'ReactJS Roadmap' },
      { id: 9, label: 'NodeJS', to: '/roadmaps/nodejs', title: 'NodeJS Roadmap' },
      { id: 10, label: 'Python', to: '/roadmaps/python', title: 'Python Roadmap' },
      { id: 11, label: 'Java', to: '/roadmaps/java', title: 'Java Roadmap' },
      { id: 12, label: 'Andriod', to: '/roadmaps/andriod', title: 'Andrio Roadmap' },
      { id: 13, label: 'Flutter', to: '/roadmaps/flutter', title: 'Flutter Roadmap' },
      { id: 14, label: 'DevOps', to: '/roadmaps/devops', title: 'DevOps Roadmap' },
      { id: 15, label: 'Blockchain', to: '/roadmaps/blockchain', title: 'Bloackchain Roadmap' },
      { id: 16, label: 'Design System', to: '/roadmaps/designsystem', title: 'Design System Roadmap' },
    ],
    []
  );


  // ! old version updated hide uncompleted roadmaps sir inam sir instructions 
  /* const roadmapsNavLinkData = useMemo(
    () => [
      { id: 1, label: 'Front-end', to: '/roadmaps/frontend', title: 'Frontend Roadmap' },
      { id: 2, label: 'Back-end', to: '/roadmaps/backend', title: 'Backend Roadmap' },
      { id: 3, label: 'Flutter', to: '/roadmaps/flutter', title: 'Flutter Roadmap' },
      { id: 4, label: 'CS', to: '/roadmaps/cs', title: 'Computer Science Roadmap' },
      { id: 5, label: 'AI', to: '/roadmaps/ai', title: 'Artificial Intelligence Roadmap' },
      { id: 6, label: 'ML', to: '/roadmaps/ml', title: 'Machine Learning Roadmap' },
      { id: 7, label: 'DL', to: '/roadmaps/dl', title: 'Deep Learning Roadmap' },
      { id: 8, label: 'JavaScript', to: '/roadmaps/javascript', title: 'JavaScript Roadmap' },
      { id: 9, label: 'ReactJS', to: '/roadmaps/reactjs', title: 'ReactJS Roadmap' },
      { id: 10, label: 'NodeJS', to: '/roadmaps/nodejs', title: 'NodeJS Roadmap' },
      { id: 11, label: 'Python', to: '/roadmaps/python', title: 'Python Roadmap' },
      { id: 12, label: 'Java', to: '/roadmaps/java', title: 'Java Roadmap' },
      { id: 13, label: 'Flutter', to: '/roadmaps/flutter', title: 'Flutter Roadmap' },
      { id: 14, label: 'Andriod', to: '/roadmaps/andriod', title: 'Andrio Roadmap' },
      { id: 15, label: 'DevOps', to: '/roadmaps/devops', title: 'DevOps Roadmap' },
      { id: 16, label: 'Blockchain', to: '/roadmaps/blockchain', title: 'Bloackchain Roadmap' },
      { id: 17, label: 'Design System', to: '/roadmaps/designsystem', title: 'BDesign System Roadmap' },
    ],
    []
  ); */


  const [ roadmapsNavLinks, setRoadmapsNavLinks ] = useState(roadmapsNavLinkData);
  const { showLeftSideNavbar, toggleLeftSideNavbar } = useLeftSideNavbar();
  const navContainerRef = useRef(null);
  const windowWidth = useWindowWidth();
  const location = useLocation();




  // responsive navbar
  const [ numLinksToRender, setNumLinksToRender ] = useState();

  useEffect(() => {
    let linksToRender;
    if (windowWidth < 262) {
      linksToRender = 0;
    } else if (windowWidth < 460) {
      linksToRender = 1;
    } else if (windowWidth < 630) {
      linksToRender = 2;
    } else if (windowWidth < 850) {
      linksToRender = 3;
    } else if (windowWidth < 960) {
      linksToRender = 4;
    } else if (windowWidth < 1060) {
      linksToRender = 5;
    } else if (windowWidth < 1180) {
      linksToRender = 6;
    } else if (windowWidth < 1300) {
      linksToRender = 7;
    } else if (windowWidth < 1400) {
      linksToRender = 8;
    } else if (windowWidth < 1480) {
      linksToRender = 9;
    } else if (windowWidth < 1600) {
      linksToRender = 10;
    } else if (windowWidth < 1700) {
      linksToRender = 11;
    } else if (windowWidth < 1820) {
      linksToRender = 12;
    } else if (windowWidth < 1900) {
      linksToRender = 13;
    } else if (windowWidth < 1940) {
      linksToRender = 14;
    } else if (windowWidth < 2060) {
      linksToRender = 15;
    } else if (windowWidth < 2130) {
      linksToRender = 16;
    } else if (windowWidth < 2200) {
      linksToRender = 17;
    }
    // } else {
    //   linksToRender = 17;
    // }

    setNumLinksToRender(linksToRender);
  }, [ windowWidth, roadmapsNavLinkData.length ]);


  useEffect(() => {
    setRoadmapsNavLinks(roadmapsNavLinkData.slice(0, numLinksToRender));
  }, [ numLinksToRender, roadmapsNavLinkData ]);


  // for conditionaly change active class
  const activeLink = roadmapsNavLinks.find((link) =>
    location.pathname.startsWith(link.to)
  );
  const activeLinkId = activeLink ? activeLink.id : null;


  return (
    <>
      <div className={styles.roadmapsNavContainer}>
        <div className={styles.roadmapsNavContent}>

          {<nav ref={navContainerRef} className={styles.roadmapNavbar} >



            {(windowWidth < 993) && (
              <button
                className={styles.roadmapsNavLink}
                id={styles[ "barsButton" ]} title="LeftSide bar"
                onClick={() => toggleLeftSideNavbar(!showLeftSideNavbar)}
              >
                <VscThreeBars id={styles[ "barsIcon" ]} />
              </button>
            )}




            <Link to="/" className={styles.roadmapsNavLink} title="Home" >
              <MdHome id={styles[ "homeIcon" ]} />
            </Link>
            {roadmapsNavLinks.map(link => (
              <Link
                key={link.id}
                to={link.to}
                title={link.title}
                className={link.id === activeLinkId ? `${ styles.activeLink } ${ styles.roadmapsNavLink }` : styles.roadmapsNavLink}
              >
                {link.label}
              </Link>
            ))}

          </nav>
          }

        </div>
      </div>
    </>
  );
};

export default RoadmapsNavbar;
