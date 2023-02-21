import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import ZukiesGarageLogo from '../../Images/Logos/ZukiesGarage_logo.jpg'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-logo-wrapper">
        <img 
          className="footer-logo" 
          src={ZukiesGarageLogo} 
        />
      </div>

      <div className="footer-important-info-wrapper">
        <div className="footer-contact-info-container">
          <div className="footer-contact-info-icon-wrapper">
            <FontAwesomeIcon 
              className="footer-contact-info-icon" 
              icon={['fas', 'phone']}
            />
          </div>

          <div className="footer-contact-info-wrapper">
            <div className="footer-contact-info-phone-num">
              (801) 259-4056
            </div>

            <div className="footer-contact-info-avail-hours">
              9:00 AM - 5:00 PM
            </div>
          </div>
        </div>

        <div className="footer-address-container">
          <div className="footer-address-icon-wrapper">
            <FontAwesomeIcon
              className="footer-address-icon" 
              icon={['fas', 'map-pin']}
            />
          </div>

          <div className="footer-address">
            2423 S 500 W Bountiful,

            <div className="footer-address-split">
              UT, 84010
            </div>
          </div>       
        </div>
      </div>

      <div className="footer-nav-links-wrapper">
        <div className="footer-nav-link">
          Home
        </div>

        <div className="footer-nav-link">
          Book Us
        </div>

        <div className="footer-nav-link">
          Pricing
        </div>

        <div className="footer-nav-link">
          Our Team
        </div>

        <div className="footer-nav-link">
          Photo Gallery
        </div>
      </div>

      <div className="footer-social-media-links-wrapper">
        <div className="footer-social-media-link footer-social-media-link-full-text-wrapper">
          <FontAwesomeIcon 
            icon={['fab', 'facebook-square']}
          /> 

          <div className="footer-social-media-link-full-text">
            Facebook
          </div>
        </div>
      </div>

      <div className="footer-copyright-wrapper">
        Copyright @2022 All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer;