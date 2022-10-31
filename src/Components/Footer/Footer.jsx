import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Footer = () => {
  return (
    <div style={{ padding: "40px", display: "grid", gridTemplateColumns: "1fr", rowGap: "40px", justifyItems: "center" }}>
      <div>
        <img src="https://via.placeholder.com/150x150" />
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
        <div>(801) 259-4056</div>
        <div>10:00 AM - 5:00 PM</div>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", textAlign: "center" }}>
        <div style={{ width: "120px" }}>Home</div>
        <div style={{ width: "120px" }}>Book Us</div>
        <div style={{ width: "120px" }}>Pricing</div>
        <div style={{ width: "120px" }}>Our Team</div>
        <div style={{ width: "120px" }}>Photo Gallery</div>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        </div>
        <div>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </div>
      </div>

      <div>
        Copyright @2022 All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer;