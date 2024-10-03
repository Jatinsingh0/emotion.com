"use client"

import { useState } from "react";
import styles from "./navbar.module.css"
// import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">əmotion</a>
        </div>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <li><a href="#">WHAT WE DO</a></li>
          <li><a href="#">THE PROBLEM</a></li>
          <li><a href="#">THE SOLUTION</a></li>
          <li><a href="#">PROJECTS</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#" className={styles.soundLink}>SOUND (OFF)</a></li>
          <li><a href="#" className={styles.ctaButton}>Get started →</a></li>
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