"use client"
import { useState } from "react";
import Link from 'next/link'; // Import Link component from next/link
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/TimidllyLogo.jpg" alt="Timidlly Logo" className={styles.logoImage} />
          </Link>
        </div>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/pages">Pricing</Link></li> {/* Use Link for Next.js routing */}
          <li><Link href="#">Downloads</Link></li>
          <li><Link href="#" className={styles.ctaButton}>Register Now</Link></li>
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
