import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../types'
import { userLogout } from '../../redux/actions/auth'
import './userAccountNavigation.scss'

function UserAccountNavigation() {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.auth.user)
  const isAdmin = user?.isAdmin
  const handleSignOut = () => {
    dispatch(userLogout())
    history.push('/')
  }
  return (
    <nav className="account__navigation">
      <ul className="account__navigation__list">
        <li className="account__navigation__item">
          <NavLink
            to={`/user/${user?._id}`}
            activeClassName="account__navigation__link--active"
            className="account__navigation__link"
          >
            my data
          </NavLink>
        </li>
        {isAdmin && (
          <li className="account__navigation__item">
            <NavLink
              to="/admin/addnewproduct"
              activeClassName="account__navigation__link--active"
              className="account__navigation__link"
            >
              Add new product
            </NavLink>
          </li>
        )}
        <li className="account__navigation__item">
          <NavLink to="#" className="account__navigation__link">
            my orders
          </NavLink>
        </li>
        <li className="account__navigation__item">
          <NavLink to="#" className="account__navigation__link">
            my returns
          </NavLink>
        </li>
        <li className="account__navigation__item">
          <NavLink to="#" className="account__navigation__link">
            invoice data
          </NavLink>
        </li>
        <li className="account__navigation__item">
          <button className="account__navigation__btn" onClick={handleSignOut}>
            sign out
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default UserAccountNavigation
