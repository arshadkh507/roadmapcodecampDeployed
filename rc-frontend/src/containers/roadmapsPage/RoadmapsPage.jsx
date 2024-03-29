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



