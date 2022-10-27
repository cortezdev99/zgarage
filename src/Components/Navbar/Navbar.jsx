import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
        <img src="https://via.placeholder.com/200x225"></img>
      </div>

      <div style={{ paddingTop: "20px", textAlign: "center", margin: "20px 5%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <div style={{ width: "100px" }}>
          Home <FontAwesomeIcon icon={['fas', 'trash-alt']} />
        </div>

        <div style={{ width: "100px" }}>
          Book us
        </div>

        <div style={{ width: "100px" }}>
          Pricing
        </div>

        <div style={{ width: "100px" }}>
          Our team
        </div>

        <div style={{ width: "100px" }}>
          Photo gallery
        </div>
      </div>
    </div>
  )
}

export default Navbar;