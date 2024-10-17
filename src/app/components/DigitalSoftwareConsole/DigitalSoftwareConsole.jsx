import React from 'react'
import styles from "./DigitalSoftwareConsole.module.css"

const DigitalSoftwareConsole = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>What Are Elements Of Our Digital Signage Software Console</h2>
      <p className={styles.subtitle}>
        With the objective of making "Digital Signage Software" more user-friendly and easily accessible, we have identified and integrated the following three key elements.
      </p>
      
      <div className={styles.contentWrapper}>
        <div className={styles.elementsWrapper}>
          <div className={styles.FirstElement}>
            <div className={styles.iconWrapper}>
              <img 
                src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66ab329c96ddac8d409263d2_layer.webp" 
                alt="Groups" 
                className={styles.icon} 
              />
            </div>
            <h3 className={styles.elementTitle}>Groups</h3>
            <p className={styles.elementDescription}>
              The objective is to organize a collection of related screens into groups based on various tags, such as business types, zones, properties, cities, states, and countries in the digital signage solution.
            </p>
          </div>

          <div className={styles.element}>
            <div className={styles.iconWrapper}>
              <img 
                src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66ab3391df09cccbbf980dcd_surveillance-monitors-screens-group.webp" 
                alt="Screens" 
                className={styles.icon} 
              />
            </div>
            <h3 className={styles.elementTitle}>Screens</h3>
            <p className={styles.elementDescription}>
              The goal is to assign each screen a unique identifier. A screen is a device that displays content via a digital signage player application.
            </p>
          </div>

          <div className={styles.element}>
            <div className={styles.iconWrapper}>
              <img 
                src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66ab3561ae90877588edf903_rocket.webp" 
                alt="Payloads" 
                className={styles.icon} 
              />
            </div>
            <h3 className={styles.elementTitle}>Payloads</h3>
            <p className={styles.elementDescription}>
              The purpose of the payload is to deliver content from the console to the client application. A payload consists of a playlist or scheduled content for digital signage.
            </p>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img 
            src="https://cdn.prod.website-files.com/66a23afd8c7660b4882c7e75/66ab45f4cab244f0b0f1a2a3_groups.webp" 
            alt="Digital Signage Console" 
            className={styles.image} 
          />
        </div>
      </div>
    </div>
  )
}

export default DigitalSoftwareConsole
