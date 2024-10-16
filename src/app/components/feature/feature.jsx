import React from "react";
import styles from "./feature.module.css";
import Link from "next/link";

const Feature = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <p className={styles.title}>Worried About Crazy</p>
        <p className={styles.title}>Digital Signage</p>
        <p className={styles.title}>Software Fees?</p>
      </div>

      <div className={styles.desc}>
        <p>Trust us!</p>
        <p>Many were right in your shoes, Just a few months ago.</p>
        <p>
          Timidlly - The digital signage software can patch your draining
          pockets now!
        </p>
      </div>

      <Link href="#" className={styles.ctaButton}>
        Login & Try Now →
      </Link>
    </div>
  );
};

export default Feature;
