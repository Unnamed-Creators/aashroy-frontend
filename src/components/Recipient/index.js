import React from 'react'
import image from './images/image-_1_.svg'
import styles from './styles.module.css'
const Recipientc = () => {
    return (
        <>
         <div className={styles.main}>
           <h1 style={{textAlign: "center", padding: "30px", color: "#383874"}}>Choose a recipient</h1>
           <div className={styles.cards}>
           <div className={styles.card}>
               <div className={styles.image}>
                   <img src={image} />
               </div>
               <div className={styles.location}>
                   <h4>Name</h4>
                   <p>Location:Details</p>
               </div>
               <div className={styles.donate}>
                   <button>Donate</button>
               </div>
           </div> 
           <div className={styles.card}>
               <div className={styles.image}>
                   <img src={image} />
               </div>
               <div className={styles.location}>
                   <h4>Name</h4>
                   <p>Location:Details</p>
               </div>
               <div className={styles.donate}>
                   <button>Donate</button>
               </div>
           </div> 
           <div className={styles.card}>
               <div className={styles.image}>
                   <img src={image} />
               </div>
               <div className={styles.location}>
                   <h4>Name</h4>
                   <p>Location:Details</p>
               </div>
               <div className={styles.donate}>
                   <button>Donate</button>
               </div>
           </div> 
           <div className={styles.card}>
               <div className={styles.image}>
                   <img src={image} />
               </div>
               <div className={styles.location}>
                   <h4>Name</h4>
                   <p>Location:Details</p>
               </div>
               <div className={styles.donate}>
                   <button>Donate</button>
               </div>
           </div> 
           <div className={styles.card}>
               <div className={styles.image}>
                   <img src={image} />
               </div>
               <div className={styles.location}>
                   <h4>Name</h4>
                   <p>Location:Details</p>
               </div>
               <div className={styles.donate}>
                   
                   <button>Donate</button>
               </div>
           </div> 
           <div className={styles.card}>
               <div className={styles.image}>
                   <img src={image} />
               </div>
               <div className={styles.location}>
                   <h4>Name</h4>
                   <p>Location:Details</p>
               </div>
               <div className={styles.donate}>
                   <button>Donate</button>
               </div>
           </div>
        </div> 
        </div>   
        </>
    )
}

export default Recipientc
