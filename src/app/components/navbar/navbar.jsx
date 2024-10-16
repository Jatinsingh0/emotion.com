"use client"
import { useState } from "react";
import styles from "./navbar.module.css"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">Timidlly</a>
        </div>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#" >Downloads</a></li>
          <li><a href="#" className={styles.ctaButton}>Register Now</a></li>
        </ul>
        <div className={styles.hamburger} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          
      </nav>
    </div>
  );
};

export default Navbar;