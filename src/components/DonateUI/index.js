import React from 'react'
import styles from "./styles.module.css";
import image from "./image/image-_1_.svg"
const DonateUIc = () => {
    return (
        <>
          <div className={styles.main}>
            <div className={styles.heading}>
                <h3 style={{fontFamily: "'Raleway', sans-serif", color:"#383874", fontWeight: "700",lineHeight: "2rem"}}>Donate to the Needy</h3>
                <h5 style={{fontFamily: 'Raleway'}}>You can donate to the people listed here directly or through NGOs</h5>
            </div>
            <div className={styles.sort_list}>

            </div>
            <div className={styles.cards}>
                
                <div className={styles.locationDelhi}>
                    <img src={image}/>
                    <h5>Location:Delhi</h5>
                    <button className={styles.donateButton}>Donate</button>
                    <div className={styles.overlay}>
                        <div className={styles.button}><button>See Details</button></div>
                    </div>
                </div>

                <div className={styles.locationDelhi}>
                    <img src={image}/>
                    <h5>Location:Delhi</h5>
                    <button className={styles.donateButton}>Donate</button>
                    <div className={styles.overlay}>
                        <div className={styles.button}><button>See Details</button></div>
                    </div>
                </div>

                <div className={styles.locationDelhi}>
                    <img src={image}/>
                    <h5>Location:Delhi</h5>
                    <button className={styles.donateButton}>Donate</button>
                    <div className={styles.overlay}>
                        <div className={styles.button}><button>See Details</button></div>
                    </div>
                </div>

                <div className={styles.locationDelhi}>
                    <img src={image}/>
                    <h5>Location:Delhi</h5>
                    <button className={styles.donateButton}>Donate</button>
                    <div className={styles.overlay}>
                        <div className={styles.button}><button>See Details</button></div>
                    </div>
                </div>

                <div className={styles.locationDelhi}>
                    <img src={image}/>
                    <h5>Location:Delhi</h5>
                    <button className={styles.donateButton}>Donate</button>
                    <div className={styles.overlay}>
                        <div className={styles.button}><button>See Details</button></div>
                    </div>
                </div>

                <div className={styles.locationDelhi}>
                    <img src={image}/>
                    <h5>Location:Delhi</h5>
                    <button className={styles.donateButton}>Donate</button>
                    <div className={styles.overlay}>
                        <div className={styles.button}><button>See Details</button></div>
                    </div>
                </div>
                
               
            
            </div>
       </div>  
        </>
    )
}

export default DonateUIc
