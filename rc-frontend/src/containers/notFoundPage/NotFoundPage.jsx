import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import { FaMapSigns } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <FaMapSigns className={styles.icon} />
        <h1 className={styles.heading}>Oops! Page not found.</h1>
        <p className={styles.text}>
          We're sorry, the page you're looking for could not be found.
        </p>
        <Link to="/" className={styles.button}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;