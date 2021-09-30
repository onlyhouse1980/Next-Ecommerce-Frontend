import React from 'react'
import styles from '../styles/WelcomePage.module.css'


const FooterPage = () => {
  return (
      <div className={styles.footer}>
        &copy; {new Date().getFullYear()} Powered By:
        <a href='http://anewshade.de'>
        <img width="50px" height="50px" src="https://obcg.org/Images/anewshade.png" alt="aNewShade Logo" className={styles.footerLogo} /></a>
      </div>
  );
};

export default FooterPage;
