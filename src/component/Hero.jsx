import React from 'react'
import {Link} from 'react-router-dom'
import Style from './Hero.module.css'
import BackgrounImageCom from '../component/BackgrounImageCom'


const Hero = () => {
  return (
    <div className={Style.heroContainer}>
      <div className={Style.heroContent}>
        <h5>FOR PRODUCT MANAGERS, DESIGNERS AND ENGINEERS</h5>
        <h2>Digital Community For Product Development Excellence</h2>
        <p>Learn, receive mentorship, and access the tools you need to manage or real-world projects!</p>
        <button className={Style.heroButtonCon}><Link>Review us on Trustpilot</Link></button>
        <div className={Style.heroSecondButtonStart}>
        <button className={Style.BackgrounImageComButton}><Link>Get Started</Link></button>
        <button className={Style.BackgrounImageComButtonOne}><Link>Get a mentor</Link></button>
        </div>
      </div>
      <BackgrounImageCom/>
    </div>
  )
}

export default Hero
