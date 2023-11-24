import styles from "./footerHomePage.module.css";
import logo from "../../../assets/images/roadmap-codecamp-logo.png";
import { BsFacebook, BsWhatsapp, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterHomePage = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className={styles.footerContaier}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <div className={styles.footerTop}>
            <div className={styles.footerTopLeft}>
              <div className={styles.footerLogo} onClick={scrollToTop}>
                <img src={logo} alt="LOGO" />
              </div>
            </div>

            <div className={styles.footerTopRight}>
              <div className={styles.footerRoadmaps}>
                <Link to="/roadmaps/frontend" className={styles.link}>
                  <h3>Frontend</h3>
                </Link>
                <Link to="/roadmaps/javaScript" className={styles.link}>
                  <h5>JavaScript</h5>
                </Link>
                <Link to="/roadmaps/reactjs" className={styles.link}>
                  <h5>ReactJS</h5>
                </Link> 
              </div>
              <div className={styles.footerRoadmaps}>
                <Link to="/roadmaps/ai" className={styles.link}>
                  <h3>Advnaced</h3>
                </Link>
                <Link to="/roadmaps/ai" className={styles.link}>
                  <h5>AI</h5>
                </Link>
                <Link to="/roadmaps/ml" className={styles.link}>
                  <h5>ML</h5>
                </Link>

                 <Link to="/roadmaps/dl" className={styles.link}>
                  <h5>DL</h5>
                </Link> 
              </div>
              <div className={styles.footerRoadmaps}>
                <Link to="/roadmaps/backend" className={styles.link}>
                  <h3>Backend</h3>
                </Link>
                <Link to="/roadmaps/expressjs" className={styles.link}>
                  <h5>ExpressJS</h5>
                </Link>
                <Link to="/roadmaps/nodejs" className={styles.link}>
                  <h5>NoteJS</h5>
                </Link> 
              </div>
              <div className={styles.footerRoadmaps}>
                <Link to="/roadmaps/python" className={styles.link}>
                  <h3>Others</h3>
                </Link>
                <Link to="/roadmaps/python" className={styles.link}>
                  <h5>Python</h5>
                </Link>
                <Link to="/roadmaps/flutter" className={styles.link}>
                  <h5>Flutter</h5>
                </Link>

                <Link to="/roadmaps/java" className={styles.link}>
                  <h5>Java</h5>
                </Link> 
              </div>

             
            </div>
          </div>
        </div>

        <div className={styles.footerCenter}>
          <hr />
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p>@copyright 2023 roadmap website</p>
            <div className={styles.footerSocialIcons}>
              <BsFacebook className={styles.icon} />
              <BsWhatsapp className={styles.icon} />
              <BsGithub className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHomePage;
