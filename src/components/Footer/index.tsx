import React from 'react'
import './footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__intro">FINLAND</p>
      <p className="footer__intro">© 2020 AMOUR All rights reserved</p>
      <ul className="footer__menu">
        <li className="footer__menu__icon">
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </li>
      </ul>
    </div>
  )
}

export default Footer
