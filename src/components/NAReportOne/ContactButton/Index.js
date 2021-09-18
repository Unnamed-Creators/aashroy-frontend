import React from 'react'
import button from './img/messageButton.png'
import styles from './ContactButton.module.css'

const ContactButton = () => {
    return (
        <>
            <div className={styles.fixingButton}>
            <img  src={button} alt={button} /> 

            </div>
        </>
    )
}

export default ContactButton;
