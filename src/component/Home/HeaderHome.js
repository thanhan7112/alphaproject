import React from 'react'
import HomeBody from './HomeBody'
import '../Main.css'
import HeaderMain from '../Header'
const Header = () => {
  return (
    <div className="home_content">
        <HeaderMain/>
        <HomeBody/>
      </div>
  )
}

export default Header