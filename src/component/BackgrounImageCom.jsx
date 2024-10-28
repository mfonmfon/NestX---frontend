import React from 'react'
import { Link } from 'react-router-dom'
import Style from './BackgroundImageCom.module.css'
import BackgroundImage from '../assests/NestBackgroundImage.png.png'

const BackgrounImageCom = () => {
  return (
    <div>
       <div className={Style.BackgroundImageButton}>
          <div className={Style.BackgrounImageComImage}>
            <img src={BackgroundImage} alt={''}></img>
      </div>
        </div>
       
    </div>
  )
}
export default BackgrounImageCom
