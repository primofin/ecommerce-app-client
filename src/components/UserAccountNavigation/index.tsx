import React from 'react'
import { NavLink } from 'react-router-dom'

import "./userAccountNavigation.scss"

function UserAccountNavigation() {
  return (
    <nav className="account__navigation">
      <ul>
        <li>
          <NavLink to="/user/:userid">my data</NavLink>
        </li>
        <li>
          <NavLink to="#">my orders</NavLink>
        </li>
        <li>
          <NavLink to="#">my returns</NavLink>
        </li>
        <li>
          <NavLink to="#">invoice data</NavLink>
        </li>
        <li>
            <a href="#">sign out</a>
        </li>
      </ul>
    </nav>
  )
}

export default UserAccountNavigation
