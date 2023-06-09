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
      { id: 1, label: 'Frontend', to: '/roadmaps/frontend', title: 'Frontend Roadmap' },
      { id: 2, label: 'Backend', to: '/roadmaps/backend', title: 'Backend Roadmap' },
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
  );


  const [ roadmapsNavLinks, setRoadmapsNavLinks ] = useState(roadmapsNavLinkData);
  const { showLeftSideNavbar, toggleLeftSideNavbar } = useLeftSideNavbar();
  const navContainerRef = useRef(null);
  const windowWidth = useWindowWidth();
  const location = useLocation();




  // responsive navbar
  const [ numLinksToRender, setNumLinksToRender ] = useState();

  useEffect(() => {
    let linksToRender;
    if (windowWidth < 260) {
      linksToRender = 0;
    } else if (windowWidth < 360) {
      linksToRender = 1;
    } else if (windowWidth < 460) {
      linksToRender = 2;
    } else if (windowWidth < 500) {
      linksToRender = 3;
    } else if (windowWidth < 560) {
      linksToRender = 4;
    } else if (windowWidth < 620) {
      linksToRender = 5;
    } else if (windowWidth < 680) {
      linksToRender = 6;
    } else if (windowWidth < 800) {
      linksToRender = 7;
    } else if (windowWidth < 900) {
      linksToRender = 8;
    } else if (windowWidth < 980) {
      linksToRender = 9;
    } else if (windowWidth < 1040) {
      linksToRender = 10;
    } else if (windowWidth < 1120) {
      linksToRender = 11;
    } else if (windowWidth < 1220) {
      linksToRender = 12;
    } else if (windowWidth < 1300) {
      linksToRender = 13;
    } else if (windowWidth < 1400) {
      linksToRender = 14;
    } else if (windowWidth < 1500) {
      linksToRender = 15;
    } else if (windowWidth < 1660) {
      linksToRender = 16;
    } else if (windowWidth < 1890) {
      linksToRender = 17;
    } else {
      linksToRender = 17;
    }

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
