import React from 'react'
import styles from './styles.module.css'

const DonateUIc_photo1 = () => {
    return (
        <>
           <div className={styles.main}>
            <h1 style={{textAlign: "center", padding: "40px"}}>Upload a photo with the recipient</h1>
            <div className={styles.photo}>
                <button>Upload image</button>
            </div>
            <div className={styles.buttons}>
                
                    <div className={styles.firstbutton}><button>Go back</button></div>
                    <div className={styles.firstbutton}><button>Submit</button></div>
                
            </div>
        </div>   
        </>
    )
}

export default DonateUIc_photo1
