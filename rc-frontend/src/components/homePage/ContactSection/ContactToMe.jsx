import React from 'react';
import styles from "./contactsection.module.css";
import { BsFacebook, BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";


const ContactToMe = ({ image, name, facebook, whatsapp, linkedin, github }) => {
  return (
    <div className={styles.contactToMe}>

      <div className={styles.contactToMeLeft}>
        <div className={styles.myImage}>
          <img src={image} alt={name} />
        </div>
        <div className="info">
          <h4>{name}</h4>
          <h6>Web Developer</h6>
        </div>
      </div>

      <div className={styles.contactToMeRight}>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <BsFacebook className={styles.socialIcons} />
        </a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          <BsWhatsapp className={styles.socialIcons} />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <BsLinkedin className={styles.socialIcons} />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <BsGithub className={styles.socialIcons} />
        </a>
      </div>

    </div>
  );
};

export default ContactToMe;