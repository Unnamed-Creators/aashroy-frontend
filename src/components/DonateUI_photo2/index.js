import React from 'react'
import image from './Rectangle 31.svg'
import styles from './styles.module.css'
const DonateUIc_phpoto2 = () => {
    return (
        <>
             <div className={styles.main}>
            <h1 style={{textAlign: "center", padding: "40px"}}>Upload a photo with the recipient</h1>
            <div className={styles.photo}>
                <img src={image}/>
            </div>
            <div className={styles.buttons}>
                
                    <div><button>Go back</button></div>

                    <div><button style={{backgroundImage: "linear-gradient(270deg, #FF708B 0%, #7D40FF 162.75%)"}}>Reupload</button></div>
                    <div><button>Submit</button></div>
            </div>
        </div>  
        </>
    )
}

export default DonateUIc_phpoto2
