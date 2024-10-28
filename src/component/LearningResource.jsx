import React from 'react'
import Style from './LearningResource.module.css'
import { Link } from 'react-router-dom'

const LearningResource = () => {
  return (
    <div className={Style.LearningResourceContainer}>
      <h2 className={Style.LearningResourceTitle}>Get Learning Resource for Product Management and UX Designs</h2>
      <p className={Style.LearningResourceSubTitle}>EXPLORE OUR COMMUNITY POWERED OFFERINGS</p>

      <div className={Style.LearningResourceCard}>
        <div className={Style.LearningResourceCardContent}>
          <img src={''} alt={''}></img>
          <h2>Product Spirit</h2>
          <p>Collaborate with colleagues, set clear goals, and tackle real-world product chanllenges together,
             Get hands-on experience in every sprint</p>
          <button><Link to={'/productsprint'}></Link>Learn more</button>
        </div>

        <div className={Style.LearningResourceCardContent}>
        <img src={''} alt={''}></img>
          <h2>Product Spirit</h2>
          <p>Collaborate with colleagues, set clear goals, and tackle real-world product chanllenges together,
             Get hands-on experience in every sprint</p>
          <button><Link to={'/productsprint'}></Link>Learn more</button>
        </div>

        <div className={Style.LearningResourceCardContent}>
        <img src={''} alt={''}></img>
          <h2>Product Spirit</h2>
          <p>Collaborate with colleagues, set clear goals, and tackle real-world product chanllenges together,
             Get hands-on experience in every sprint</p>
          <button><Link to={'/productsprint'}></Link>Learn more</button>
        </div>

      </div>
      
    </div>
  )
}

export default LearningResource
