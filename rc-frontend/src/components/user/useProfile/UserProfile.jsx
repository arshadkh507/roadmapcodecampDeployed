import React, { useState, useEffect } from "react";
import styles from "./UserProfile.module.css";
import { useAuth } from "../../../customHook/AuthContext";
import { FaCog, FaChartLine } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const UserProfile = () => {

  const { isLoggedIn, userEmail } = useAuth();
  const [ userData, setUserData ] = useState({});

  useEffect(() => {
    if (isLoggedIn) {
      const fetchData = async () => {
        try {
          const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
          const response = await fetch(`${ baseUrl }/user/${ userEmail }`);
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [ isLoggedIn, userEmail ]);

  if (!isLoggedIn) {
    // Render login/signup form
    return (
      <div className="loginSignupContainer">
        <h2>Please Login or Signup</h2>
      </div>
    );
  }


  return (
    <>
      <div className={styles.userProfileContainer}>
        <div className={styles.userProfileWrapper}>
          <div className={styles.userProfileContent}>
            <div className={styles.container}>
              <div className={styles.profile}>
                <div className={styles.profilePicture}>
                  <CgProfile className={styles.profilePictureIcon} />
                </div>
                <div className={styles.profileInfo}>
                  <h2 className={styles.profileName}>
                    {userData.name?.split(' ')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                      .join(' ')
                    }
                  </h2>
                  <p className={styles.joiningDate}>Joined: {userData?.createdAt?.substring(0, 10)}</p>
                </div>
              </div>
              <div className={styles.profileButtons}>
                <Link to="/user/user-profile/password-reset" className={styles.button}>
                  <FaCog className={styles.icon} />
                  Settings
                </Link>
                <Link to="/user/user-profile/" className={styles.button}>
                  <FaChartLine className={styles.icon} />
                  My Progress
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default UserProfile;



