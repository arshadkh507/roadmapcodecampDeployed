import styles from './navbar.module.css';
import logo from "../../assets/images/rsz_1rsz_roadmap-codecamp-logox192.png";
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { useState } from 'react';
import RoadmapsMegaMenu from '../modals/RoadmapsMegaMenu/RoadmapsMegaMenu';
import useWindowWidth from '../../customHook/WindowWidth';
import { MdPerson } from 'react-icons/md';
import { useAuth } from '../../customHook/AuthContext';

const Navbar = () => {

  const [ showModal, setShowModal ] = useState(false);
  const { isLoggedIn } = useAuth();
  const windowWidth = useWindowWidth();

  const handleModal = () => {
    setShowModal(!showModal);
  };


  const handleClose = () => {
    setShowModal(false);
  };



  return (
    <>
      <nav className={styles.navbarContainer}>

        <aside className={styles.navLeft}>

          <Link to="/">
            <button className={styles.logoContainer}  >
              <img src={logo} alt="Logo" />
            </button>
          </Link>

          <button className={`${ styles.roadmapsBtn } ${ showModal ? styles.active : '' }`} onClick={handleModal}>
            <span>{windowWidth < 330 ? "Menu" : "Roadmaps"}</span>
            {showModal ? <FaChevronUp className={styles.icon} /> : <FaChevronDown className={styles.icon} />}
          </button>

        </aside>



        <aside className={styles.navRight}>





          {isLoggedIn && (
            <Link to="/user/user-profile/" className={styles.userProfile}>
              <div className={styles.userAvatar}>
                <MdPerson className={styles.userIcon} />
              </div>
            </Link>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/user/signup" className={styles.signupBtn}>
                <span className={styles.linkBtn}>SignUp</span>
              </Link>
              <Link to="/user/login" className={styles.loginBtn}>
                <span className={styles.linkBtn}>LogIn</span>
              </Link>
            </>
          )}


        </aside>
      </nav>



      {showModal && (
        <RoadmapsMegaMenu handleClose={handleClose} />
      )}


    </>
  );
};

export default Navbar;






 // ! chatGPT recommend
/*
  const handleModal = useCallback(() => {
  setShowModal(prevState => !prevState);
}, []);

const handleTheme = useCallback(() => {
  setIsNightMode(prevState => !prevState);
}, []);
     <button className={styles.themeBtn} onClick={handleTheme} >
            {isNightMode ? <BsSunFill className={styles.iconSun} /> : <BsFillMoonFill />}
          </button>
*/
