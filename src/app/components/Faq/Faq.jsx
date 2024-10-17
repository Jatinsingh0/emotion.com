"use client"
import { useState } from "react";
import styles from "./FAQ.module.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if it's already open
    } else {
      setOpenIndex(index); // Open the selected item
    }
  };

  return (
    <div className={styles.faqContainer}>
      <p className={styles.faqTitle}>Frequently Asked Questions</p>

      <div className={styles.faqItem}>
        <button
          className={styles.faqQuestion}
          onClick={() => toggleFaq(0)}
        >
          Which Operating Systems Are Compatible With Signager - Digital Signage Software?
          <span className={`${styles.arrow} ${openIndex === 0 ? styles.open : ""}`}>&#x25BA;</span>
        </button>
        <div className={`${styles.faqAnswer} ${openIndex === 0 ? styles.show : ""}`}>
          <p>As of August 2024, Signager digital signage system is compatible with Android TV and Android AOSP operating systems. The Signager team is actively developing "Signager Client" applications for additional operating systems, including WebOS, Tizen OS, and Windows.</p>
        </div>
      </div>

      <div className={styles.faqItem}>
        <button
          className={styles.faqQuestion}
          onClick={() => toggleFaq(1)}
        >
          Is The Signager - Digital Signage Solution Available For All Users?
          <span className={`${styles.arrow} ${openIndex === 1 ? styles.open : ""}`}>&#x25BA;</span>
        </button>
        <div className={`${styles.faqAnswer} ${openIndex === 1 ? styles.show : ""}`}>
          <p>Signager is currently in the beta development stage and is available only to select users. If you are interested in testing Signager digital signage player, please register and request account activation.

If your request is not immediately honored, you will eventually receive an email following the global rollout with a pre-activated account.</p>
        </div>
      </div>

      <div className={styles.faqItem}>
        <button
          className={styles.faqQuestion}
          onClick={() => toggleFaq(2)}
        >
          What Is The Anticipated Pricing For The Signager - Digital Signage Solutions?
          <span className={`${styles.arrow} ${openIndex === 2 ? styles.open : ""}`}>&#x25BA;</span>
        </button>
        <div className={`${styles.faqAnswer} ${openIndex === 2 ? styles.show : ""}`}>
          <p>Firstly, the pricing for Signager will be significantly more affordable compared to current digital signage softwares available online.

The cost of Signager will vary based on the features bundled with the system. However, there will always be a FREE VERSION available, which supports an unlimited number of screens with certain feature limitations.</p>
        </div>
      </div>

      <div className={styles.faqItem}>
        <button
          className={styles.faqQuestion}
          onClick={() => toggleFaq(3)}
        >
          Can Signager Be Downloaded And Operated On A Local System?
          <span className={`${styles.arrow} ${openIndex === 3 ? styles.open : ""}`}>&#x25BA;</span>
        </button>
        <div className={`${styles.faqAnswer} ${openIndex === 3 ? styles.show : ""}`}>
          <p>Signager Digital Signage Software is hosted on a dedicated cloud server, ensuring easy and secure access from anywhere in the world for controlling the client application.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
