import React from 'react'
import styles from './TopDetails.module.css'
const TopDetails = () => {
    return (
        <>
           <div className={styles.TopHeading}>
        <a className={styles.link}>
          Back
        </a>
        <h3 className={styles.heading}>File a complaint</h3>
        <p className={styles.Subheading}>For the purpose of industry regulation, your details are required.</p>
      </div> 
        </>
    )
}

export default TopDetails;
