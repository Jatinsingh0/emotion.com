import React from 'react';
import styles from './DigitalSoftware.module.css';

const DigitalSoftware = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        How Signager Can Benefit Your Business?
      </h2>
      <div className={styles.cardContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66ab6b28e04265c4a5b8c83d_user%20friendly%20icon-p-500.webp" alt="User Friendly Icon" className={styles.icon} />
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>
              User-Friendly Digital Signage Ecosystem
            </p>
            <p className={styles.cardDescription}>
              Signager provides user-friendly interfaces across all its digital signage systems, ensuring that even individuals with no technical background can effortlessly achieve their digital signage goals using simple drag-and-drop methods.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66ab6b28caddd370ddf7724d_pocket%20friendly-p-500.webp" alt="Pocket Friendly Icon" className={styles.icon} />
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>
              Pocket Friendly Digital Signage Software
            </p>
            <p className={styles.cardDescription}>
              The Signager is built to be affordable by reducing the non-core functionalities that consume a lot of resources. Also priced in Indian Rupees to avoid Dollar to Rupees inflation unlike other digital signage software.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66ab6b28d67adbf055f1245e_scalable%20icon-p-500.webp" alt="Scalable Solutions Icon" className={styles.icon} />
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>
              Scalable Digital Signage Solutions
            </p>
            <p className={styles.cardDescription}>
              The "Signager" digital signage software is built to scale with unlimited number of screens per account, extendable sign drive space, advance content tracking and analytics from Version 2.1 and above.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66ab6b28d932d780c0e60ef0_customer%20support%20icon-p-500.webp" alt="Support Services Icon" className={styles.icon} />
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>
              6 Days A Week Support Services
            </p>
            <p className={styles.cardDescription}>
              Discuss your goals, requirements, and issues with 6 days a week expert technician support team on both phone call and chat mediums.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSoftware;
