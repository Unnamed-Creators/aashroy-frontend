import React from 'react'
import styles from './styles.module.css'
import image1 from './images/Vector (1).svg'
import image2 from './images/Vector (2).svg'
const DonateUIc_2 = () => {
    return (
        <>
            <div className={styles.main}>
            <h1 style={{}}>
                Select Payment Procedure
            </h1>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <img src={image1}/>
                    <a href="#" style={{textDecoration: "none", color: "black",background: "none", fontWeight: "600",fontSize: "1.2rem"}}>Donate physically</a>
                </div>
                <div className={styles.card}>
                    <img src={image2}/>
                    <a href="#" style={{textDecoration: "none", color: "black",background: "none", fontWeight: "600",fontSize: "1.2rem"}}>Donate online</a>
                </div>
            </div>
        </div>   
        </>
    )
}

export default DonateUIc_2
