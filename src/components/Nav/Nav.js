// 1. React
import React from 'react'
import './Nav.css'

// 2. Components
import { NavLink } from 'react-router-dom'

// 3. Data
import routes from '../../routes'

const Nav = (props) => {

  return (
    <nav className='Nav'>
      <ul>
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <NavLink to={route.path} activeClassName='activeNav'>
                <img src={route.icon} alt={route.name} />
                <span>{route.name}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
};

export default Nav