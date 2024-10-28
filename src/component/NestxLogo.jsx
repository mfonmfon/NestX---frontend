import React from 'react'
import Style from './NestxLogo.module.css'
import Logo from '../assests/NestLogo.png'

const NestxLogo = () => {
  return (
    <div className={Style}>
      <img src={Logo} alt={'logo'}></img>
      
     
    </div>
  )
}

export default NestxLogo
