// src/components/PricingFAQ.js
"use client"
import React, { useState } from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Pricing Plans
  const plans = [
    {
      title: 'Basic',
      price: '$0',
      description: 'For personal use and exploration of AI technology.',
      features: [
        { feature: '100 requests per day', explanation: 'Make up to 100 requests to the system per day.' },
        { feature: 'Free trial features access', explanation: 'Explore basic features to get a feel of the system.' },
        { feature: 'Limited API access', explanation: 'Get limited access to the API for testing.' }
      ],
      buttonText: 'Get started',
    },
    {
      title: 'Premium',
      price: '$9.99',
      description: 'Perfect for professionals and small businesses.',
      features: [
        { feature: 'Unlimited AI generation', explanation: 'Generate unlimited AI responses with no restrictions.' },
        { feature: 'Full new features access', explanation: 'Get access to all new premium features as soon as they’re released.' },
        { feature: 'Priority support', explanation: 'Receive priority support for faster issue resolution.' }
      ],
      buttonText: 'Get started',
      popular: true, // Mark this plan as popular
    },
    {
      title: 'Enterprise',
      price: 'Contact sale',
      description: 'Perfect for large businesses or organizations.',
      features: [
        { feature: 'Custom deployment', explanation: 'Get a custom-built deployment tailored to your business needs.' },
        { feature: 'Comprehensive usage data', explanation: 'Access detailed analytics and usage data for monitoring.' },
        { feature: 'Training specialized models', explanation: 'Train models specific to your use case.' }
      ],
      buttonText: 'Contact sale',
    },
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What do I get with a premium subscription?",
      answer: "With a premium subscription, you get unlimited AI generation, access to all new premium features, and priority support."
    },
    {
      question: "What are premium solutions? Can I see a sample?",
      answer: "Premium solutions include advanced AI functionalities and new tools. You can access a sample once you subscribe to a premium plan."
    },
    {
      question: "How do you group questions by company?",
      answer: "Questions are grouped by the company based on frequently asked queries relevant to specific business requirements."
    },
    {
      question: "I clicked the subscribe button, filled in my credit card information, and clicked 'Add Payment Method'. I still don't have access to any premium features.",
      answer: "If you have completed the process but still don't see premium features, try refreshing the page or contacting support for further assistance."
    },
    {
      question: "What if I subscribe and want to cancel?",
      answer: "You can cancel your subscription anytime. You'll still have access to premium features until the end of your billing cycle."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.combinedSection}>
      {/* Pricing Section */}
      <div className={styles.pricingSection}>
        <h2 className={styles.heading}>Choose your plan</h2>
        <p className={styles.subHeading}>Unlock endless possibilities</p>
        <div className={styles.planContainer}>
          {plans.map((plan, index) => (
            <div key={index} className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}>
              <h3 className={styles.planTitle}>{plan.title}</h3>
              <p className={styles.planPrice}>{plan.price}</p>
              <p className={styles.planDescription}>{plan.description}</p>
              <ul className={styles.featuresList}>
                {plan.features.map((featureItem, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.featureTitle}>{featureItem.feature}</span>
                    <p className={styles.featureExplanation}>{featureItem.explanation}</p>
                  </li>
                ))}
              </ul>
              <button className={styles.planButton}>{plan.buttonText}</button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <h2 className={styles.heading}>Frequently asked questions</h2>
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={styles.plusIcon}>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className={styles.answer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
