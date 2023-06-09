/* eslint-disable no-unused-vars */
import RoadmapsNavbar from "../../components/roadmapsPage/commonInRoadmaps/RoadmapsNavbar/RoadmapsNavbar";
import styles from "./roadmapsPage.module.css";
import { useLocation, useParams } from "react-router-dom";
import RoadmapsFooter from "../../components/roadmapsPage/commonInRoadmaps/RoadmapsFooter/RoadmapsFooter";
import FrontendRightSide from "../../pages/roadmaps/frontend/FrontendRigthSide/FrontendRightSide";
import React, { Suspense, lazy, useMemo } from "react";
import useWindowWidth from "../../customHook/WindowWidth";
import useScrollY from "../../customHook/ScrollY";
import { useLeftSideNavbar } from "../LeftSideNavbarContext";
import ComingSoonPage from "../comingSoonPage/ComingSoonPage";
import Spinner from "../../containers/spinner/Spinner";

import rcCsTopics from "./roadmapData/rcCsTopics";
import rcMlTopics from "./roadmapData/rcMlTopics";
import rcAiTopics from "./roadmapData/rcAiTopics";
import rcFrontendTopics from "./roadmapData/rcFrontendTopics";

const CsRightSide = lazy(() =>
  import("../../pages/roadmaps/cs/CsRightSide/CsRightSide")
);
const FrontendLeftSidebar = lazy(() =>
  import("../../pages/roadmaps/frontend/FrontendLeftSidebar/FrontendLeftSidebar")
);
const CsLeftSidebar = lazy(() =>
  import("../../pages/roadmaps/cs/CsLeftSidebar/CsLeftSidebar")
);
const MlRightSide = lazy(() =>
  import("../../pages/roadmaps/ml/MlRightSide/MlRightSide")
);
const CsRoadmap = lazy(() =>
  import("../../pages/roadmaps/cs/CsRoadmap/CsRoadmap")
);
const MlRoadmap = lazy(() =>
  import("../../pages/roadmaps/ml/MlRoadmap/MlRoadmap")
);
const AILeftSidebar = lazy(() =>
  import("../../pages/roadmaps/ai/AILeftSidebar/AILeftSidebar")
);
const MlLeftSidebar = lazy(() =>
  import("../../pages/roadmaps/ml/MlLeftSidebar/MlLeftSidebar")
);
const AIRightSide = lazy(() =>
  import("../../pages/roadmaps/ai/AIRightSide/AIRightSide")
);
const AIRoadmap = lazy(() =>
  import("../../pages/roadmaps/ai/AIRoadmap/AIRoadmap")
);
const FrontendRoadmap = lazy(() =>
  import("../../pages/roadmaps/frontend/FrontendRoadmap/FrontendRoadmap")
);



const RoadmapsPage = () => {
  const location = useLocation();
  const { roadmapName, topicName } = useParams();
  const pathname = location.pathname;

  function getTopicNameFromPathname (topicName, roadmapTopics) {
    const topic = roadmapTopics.find((t) => t.path === topicName);
    return topic ? topic.name : <ComingSoonPage />;
  }

  // let renderingRoadmap;
  let renderTopic;

  if (pathname || roadmapName || topicName) {
    // render frontend roadmap topics
    if (pathname.includes("/roadmaps/frontend")) {
      if (topicName) {
        renderTopic = getTopicNameFromPathname(topicName, rcFrontendTopics);
      } else if (!topicName && roadmapName === "frontend") {
        renderTopic = <FrontendRoadmap />;
      }
    } else if (pathname.includes("/roadmaps/ai")) {
      if (topicName) {
        console.log(topicName);
        renderTopic = getTopicNameFromPathname(topicName, rcAiTopics);
      } else if (!topicName && roadmapName === "ai") {
        renderTopic = <AIRoadmap />;
      }
    } else if (pathname.includes("/roadmaps/cs")) {
      if (topicName) {
        renderTopic = getTopicNameFromPathname(topicName, rcCsTopics);
      } else if (!topicName && roadmapName === "cs") {
        renderTopic = <CsRoadmap />;
      }
    } else if (pathname.includes("/roadmaps/ml")) {
      if (topicName) {
        renderTopic = getTopicNameFromPathname(topicName, rcMlTopics);
      } else if (!topicName && roadmapName === "ml") {
        renderTopic = <MlRoadmap />;
      }
    } else {
      if (topicName) {
        renderTopic = getTopicNameFromPathname(topicName, rcFrontendTopics);
      } else {
        renderTopic = <ComingSoonPage />;
      }
    }
  }

  // left side bar
  const { showLeftSideNavbar } = useLeftSideNavbar();
  const windowWidth = useWindowWidth();
  const scrollY = useScrollY();

  const path = location.pathname;
  const leftSide = useMemo(() => {
    switch (true) {
      case path.includes("/roadmaps/frontend"):
        return <FrontendLeftSidebar />;
      case path.includes("/roadmaps/ai"):
        return <AILeftSidebar />;
      case path.includes("/roadmaps/ml"):
        return <MlLeftSidebar />;
      case path.includes("/roadmaps/cs"):
        return <CsLeftSidebar />;
      default:
        return "coming soon";
    }
  }, [ path ]);

  const rightSide = useMemo(() => {
    switch (true) {
      case path.includes("/roadmaps/frontend"):
        return <FrontendRightSide />;
      case path.includes("/roadmaps/ai"):
        return <AIRightSide />;
      case path.includes("/roadmaps/ml"):
        return <MlRightSide />;
      case path.includes("/roadmaps/cs"):
        return <CsRightSide />;
      default:
        return "coming soon";
    }
  }, [ path ]);

  return (
    <>
      <RoadmapsNavbar />
      <div className={styles.roadmapsContainer}>
        <aside
          id="left-sidebar"
          className={styles.roadmapLeftSide}
          style={{
            display:
              (showLeftSideNavbar && windowWidth < 993) || windowWidth >= 993
                ? "block"
                : "none",
            height: scrollY,
          }}
        >
          {leftSide}
        </aside>

        <aside className={styles.roadmapContent}>
          <div className={styles.roadmapCenterRight}>
            <main className={styles.roadmapMain}>
              <Suspense fallback={<Spinner />}>
                {renderTopic}
              </Suspense>
            </main>

            <aside className={styles.roadmapRightSide}>{rightSide}</aside>
          </div>
          <footer className={styles.roadmapFooter}>
            <RoadmapsFooter />
          </footer>
        </aside>
      </div>
    </>
  );
};

export default RoadmapsPage;





/*  
! chatgpt roadmapRight container suggestions:
Sure, here are some suggestions for content you could include in the roadmapRight container:
Learning resources: You could include links to online courses, tutorials, blogs, and other learning resources related to the specific roadmap that is being displayed in roadmapMain. This could include resources for beginners, intermediate learners, and advanced learners.
Community resources: You could include links to online communities, forums, and social media groups related to the specific roadmap. This would allow users to connect with other learners, ask questions, and share resources.
Tools and technologies: You could include information about tools and technologies related to the specific roadmap, such as frameworks, libraries, and software. This could include descriptions, features, and links to download or install them.
Career paths: You could include information about different career paths related to the specific roadmap, such as job titles, salaries, and required skills. This could help users understand the real-world applications of the skills they are learning.
Success stories: You could include stories of individuals who have successfully learned the skills related to the specific roadmap and used them in their careers. This could provide motivation and inspiration for users who are just starting out.
Related roadmaps: You could include links to other roadmaps that are related to the specific roadmap being displayed in roadmapMain. This could help users discover new topics and skills that they might be interested in learning.
which one will be most attractive to developers of begginer please choose it for me
For beginners, I would suggest including learning resources as the main content in the roadmapRight container.This could include links to beginner - friendly tutorials, courses, and other resources that provide a structured approach to learning the skills related to the specific roadmap being displayed in roadmapMain.
You could also consider including community resources, such as links to online forums and social media groups, to help beginners connect with other learners and get support as they work through the learning materials.
Finally, you could include success stories of other beginners who have successfully learned the skills related to the roadmap.This could help inspire and motivate beginners who may feel overwhelmed or uncertain about their ability to learn the new skills.
*/
