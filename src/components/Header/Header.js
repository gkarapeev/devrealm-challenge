// 1. React
import React from 'react'
import './Header.css'

// 2. Components
import Nav from '../Nav/Nav'

// 3. Data
import logo from '../../img/logo.svg'


const Header = (props) => {
  return (
    <div className='Header'>
      <div className='header-content'>
        <img src={logo} alt='Photos Logo' id='header-logo' />
        <h2>Album: libero excepturi voluptatem est architecto quae voluptatum officia tempora</h2>
        <Nav />
      </div>
    </div>
  )
};

export default Header;