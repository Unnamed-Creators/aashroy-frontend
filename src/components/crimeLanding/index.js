import React from 'react'
import hero_img from './img/crimeLanding.svg'
import style from './styles.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className={style.outer_container}>
            <div className={style.left_section}>
                <div className={style.text}>
                    <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor vel tincidunt sagittis libero, pharetra. Senectus nullam nulla interdum quam sagittis aliquet erat pellentesque hac.Senectus nullam nulla interdum quam sagittis aliquet erat pellentesque hac.</p>
                </div>
                <div className={style.buttons}>
                    <button> <Link style={{color:"#fff",textDecoration:"none"}} to='/crimereporting/filecomplain'>File A Complaint</Link> </button>
                    <button>Learn more</button>
                </div>
            </div>
            <div className={style.right_section}>
                <img src={hero_img} alt="" />
            </div>
        </div>
    )
}

export default Landing
