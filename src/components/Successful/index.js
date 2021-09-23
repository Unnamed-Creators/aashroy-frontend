import React from 'react'
import styles from './styles.module.css'
import image from './Vector (6).svg'

const Successfulc = () => {
    return (
        <>
          <div className={styles.main}>
            <div><h1 >Complaint Registered Successfully</h1></div>
            <div><h3>Thank You for your valuable time</h3></div>
            <div><img src={image}/></div>
            <div><button>Return to NGO Portal</button></div>
        </div>  
        </>
    )
}

export default Successfulc


