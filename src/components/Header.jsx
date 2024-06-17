import React from 'react'
import Navbar from './NavBar'
import Banner from './Banner'

const Header = () => {
  return (
    <div className='my-header '>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="banner">
          <Banner/>
        </div>
    </div>
  )
}

export default Header