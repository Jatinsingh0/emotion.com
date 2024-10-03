import React from "react";
import styles from "./feature.module.css";
import Link from "next/link";

const Feature = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <div>
          <p className={styles.title}>Cutting</p>
          <p className={`${styles.title} ${styles.stylizedText}`}>edge.</p>
        </div>
        <div>
          <p className={styles.scroll}>
            <span className={styles.bracket}>[</span>
            <span className={styles.movingText}>ESCROLL, GSAP, NEXT, THREE.JS, STORYBLOK, STORYTELLING</span>
            <span className={styles.bracket}>]</span>
          </p>
        </div>
      </div>

      <div className="buttonSection">
        <p><Link href="#" className={styles.ctaButton}>Ready To Talk →</Link></p>
      </div>

      <div className={styles.subtitleSection}>
        <div className={styles.infoText}>
          <p>We specialize in crafting interfaces that deliver an</p>
          <p>unparalleled user experience. Prototyping, designing,</p>
          <p>and developing for Web2 & Web3 interfaces.</p>
        </div>
        <div>
          <p className={styles.subtitle}>Frontend</p>
          <p className={styles.subtitle}>solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
