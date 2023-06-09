import React from "react";
import styles from "./userProgress.module.css";
import { Link } from "react-router-dom";

const UserNoProgress = () => {
  const roadmapNames = [
    { name: "Frontend", path: "/roadmaps/frontend" },
    { name: "Backend", path: "/roadmaps/backend" },
    { name: "Flutter", path: "/roadmaps/flutter" },
    { name: "Computer Science", path: "/roadmaps/cs" },
    { name: "Artificial Intelligence", path: "/roadmaps/ai" },
    { name: "Machine Learning", path: "/roadmaps/ml" },
    { name: "Deep Learning", path: "/roadmaps/dl" },
    { name: "JavaScript", path: "/roadmaps/javascript" },
    { name: "ReactJS", path: "/roadmaps/reactjs" },
    { name: "Node.js", path: "/roadmaps/nodejs" },
    { name: "Python", path: "/roadmaps/python" },
    { name: "Java", path: "/roadmaps/java" },
    { name: "Flutter", path: "/roadmaps/flutter" },
    { name: "Android", path: "/roadmaps/android" },
    { name: "DevOps", path: "/roadmaps/devops" },
    { name: "Blockchain", path: "/roadmaps/blockchain" },
    { name: "Design System", path: "/roadmaps/design-system" }
  ];


  return (
    <div className={styles.noProgressContainer}>
      <h2>No progress yet? No problem!</h2>
      <p>
        Welcome to CodeCamp's Roadmaps! These comprehensive roadmaps are
        designed to help you learn new skills and technologies, and track your
        progress as you go. If you're new to CodeCamp, here's how to get
        started:
      </p>
      <ul>
        <li>Choose a roadmap that interests you, such as Frontend, Computer Science, or Machine Learning etc.</li>
        <li>Browse the topics within the roadmap, and select one that you want to learn more about.</li>
        <li>Read the article on that topic, and at the bottom of the page, click "Make as Done" to mark the topic as complete.</li>
        <li>If you're still working on the topic, click "Make it Progress" to track your progress.</li>
        <li>Repeat steps 3-4 for all the topics within your chosen roadmap.</li>
      </ul>

      <p>Once you've completed topics, you can track your progress on your user dashboard. Just click on your profile icon, and select "My Progress".</p>
      <p>Happy learning! And if you have any questions or feedback, don't hesitate to reach out to us. Our team is always here to help.</p>

      <div className={styles.userNoProgressRoadmaps}>
        {roadmapNames.map((raodmap, index) => {
          const { name, path } = raodmap;
          return (
            <Link to={path} key={index}>{name}</Link>
          );
        })}

      </div>
    </div>
  );
};

export default UserNoProgress;
