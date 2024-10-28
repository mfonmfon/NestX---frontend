import React from "react";
import Style from './NavBar.module.css'
import {Link} from 'react-router-dom'
import NestxLogo from './NestxLogo'

const NavBar = () => {
  return(
    <div className={Style.NavBarContainer}>
      <nav className={Style.navList}>
      <NestxLogo />
        <ul>
          <li className={Style.navItem}><Link to={'/program'}>Program</Link></li>
          <li className={Style.navItem}><Link to={'/library'}>Library</Link></li>
          <li className={Style.navItem}><Link to={'/becomeamentor'}>Become A Mentor</Link></li>
          <li className={Style.navItem}><Link to={'/community'}>Community</Link></li>
          <li className={Style.navItem}><Link to={'/blog'}>Blog</Link></li>
        </ul>
        <li className={Style.navItemButton}><Link to={'/signin'}>Sign in</Link></li>
      </nav>
    </div>
  )
}
export default NavBar