import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import styles from './loginSignup.module.css';
import logo from '../../../assets/images/rsz_1rsz_roadmap-codecamp-logox192.png';

const ModalHeader = ({ removeNoScrollClass }) => {
  return (
    <header>
      <aside className={styles.headerLeft} >
        <img src={logo} alt="LOGO" />
      </aside>
      <aside className={styles.headerRight}>
        <Link to="/" onClick={removeNoScrollClass}>
          <FaTimes className={styles.closeIcon} />
        </Link>
      </aside>
    </header>
  );
};

export default ModalHeader;
