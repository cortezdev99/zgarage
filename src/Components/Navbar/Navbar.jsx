import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import ZukiesGarageLogo from '../../Images/Logos/ZukiesGarage_logo.jpg'

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-important-info-wrapper">
        <div className="navbar-contact-info-wrapper">
          <div className="navbar-contact-info-icon">
            <FontAwesomeIcon icon={['fas', 'phone']} />
          </div>

          <div className="navbar-contact-info">
            <div className="navbar-contact-info-phone-num">(801) 259-4056</div>
            <div className="navbar-contact-info-hours">9:00 AM - 5:00 PM</div>
          </div>
        </div>

        <div className="navbar-logo-wrapper">
          <img 
            className="navbar-logo"
            src={ZukiesGarageLogo}
          />
        </div>

        <div className="navbar-address-wrapper">
          <div className="navbar-address-icon-wrapper">
            <FontAwesomeIcon icon={['fas', 'map-pin']} />
          </div>

          <div className="navbar-address">
            2423 S 500 W Bountiful,
            <div>UT, 84010</div>
          </div> 
        </div>
      </div>

      <div className="navbar-links-wrapper">
        <NavLink to="/" className="navbar-link-wrapper">
          <div className="navbar-link-icon">
            <FontAwesomeIcon icon={['fas', 'home']} />
          </div>

          <div className="navbar-link-text">
            Home 
          </div>
        </NavLink>

        <a 
          className="navbar-link-wrapper navbar-booking-link-wrapper"
          target="_blank" 
          href="https://booking.moego.pet/go/?name=ZukiesGarage"
        >
          <div className="navbar-link-icon" >
            <FontAwesomeIcon icon={['far', 'calendar-check']} />
          </div>

          <div className="navbar-link-text">
            Book us 
          </div>
        </a>

        <NavLink className="navbar-link-wrapper" to="/pricing">
          <div className="navbar-link-icon" >
            <FontAwesomeIcon icon={['fas', 'tag']} />
          </div>

          <div className="navbar-link-text">
            Pricing 
          </div>
        </NavLink>

        <NavLink className="navbar-link-wrapper" to="/our-team">
          <div className="navbar-link-icon" >
            <FontAwesomeIcon icon={['fas', 'id-card']} />
          </div>

          <div className="navbar-link-text">
            Our team 
          </div>
        </NavLink>

        <NavLink className="navbar-link-wrapper" to="/photo-gallery">
          <div className="navbar-link-icon" >
            <FontAwesomeIcon icon={['fas', 'images']} />
          </div>

          <div className="navbar-link-text">
            Photo gallery 
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar;