import React from 'react';
import styles from './SignageInfo.module.css';

const SignageInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading}>Why Digital Signage Softwares Were Expensive Before Signager?</h1>
        <p className={styles.description}>
          Digital signage softwares were made expensive due to various purposeful and resource-based reasons in the Indian market specifically. A few of them are outlined here.
        </p>
        <div className={styles.imageContainer}>
          <img
            src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66a9fabc2a4cf2eb5b3d65a8_signager%20digital%20signage%20software%20logo-p-1080.webp"
            alt="Signager logo"
            className={styles.signagerImage}
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66aa13db5c37cd3e48e15a28_icons8-dislike-64.webp" alt="Global Market Icon" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardHeading}>Built For Global Market</h3>
            <p className={styles.cardText}>
              Digital signage software companies were building for global market rather than contextual Indian market requirements.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66aa13db5c37cd3e48e15a28_icons8-dislike-64.webp" alt="Pocket Friendly Icon" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardHeading}>Priced In Dollars, Not Rupees</h3>
            <p className={styles.cardText}>
              Indian consumers expect products to be priced in Indian rupees with right value for money, rather than Dollar to Rupees inflation.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66aa13db5c37cd3e48e15a28_icons8-dislike-64.webp" alt="Non-Practical Icon" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardHeading}>Non-Practical Features</h3>
            <p className={styles.cardText}>
              Implementation of too many non-core features compromise the main USP, leading to more digital resource consumption.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66aa13db5c37cd3e48e15a28_icons8-dislike-64.webp" alt="Hardware and Firmware Icon" />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardHeading}>Complex Hardware And Firmware Requirements</h3>
            <p className={styles.cardText}>
              Digital signage softwares need to be configured from the firmware level, finding the right hardware with relevant firmware was a challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignageInfo;
