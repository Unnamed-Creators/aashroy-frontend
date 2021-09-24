import React from 'react'
import image1 from './images/Vector (3).svg'
import image2 from './images/Vector (4).svg'
import image3 from './images/Vector (2).svg'
import styles from './styles.module.css'
const DonateUIc_3 = () => {
    return (
        <>
             <div className={styles.main}>
            <h1 >
                Select Payment Gateway
            </h1>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <span><img src={image1}/>
                    <img src={image2}/></span>
                    <a href="#" style={{textDecoration: "none", color: "black", fontWeight: "600",fontSize: "1.2rem",background: "none"}}>Donate physically</a>
                </div>
                <div className={styles.card}>
                    <img src={image3}/>
                    <a href="#" style={{textDecoration: "none", color: "black", fontWeight: "600",fontSize: "1.2rem",background: "none"}}>Donate online</a>
                </div>
            </div>
        </div>  
        </>
    )
}

export default DonateUIc_3
