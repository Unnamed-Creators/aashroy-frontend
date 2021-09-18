import React from 'react'
import photo from '../crimeLanding/img/crimeLanding.svg'
import style from './style.module.css'
import Popup from '../popup/Popup'

const CrimeSeco = () => {
    return (
        <div className={style.outer_container}>
            <div className={style.image}>
                <img src={photo} alt="" />
            </div>
            <Popup/>
        </div>
    )
}

export default CrimeSeco
