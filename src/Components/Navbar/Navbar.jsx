import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
        <img style={{ display: "flex" }} src="https://via.placeholder.com/150x175"></img>
      </div>

      <div style={{ paddingTop: "20px", textAlign: "center", margin: "20px 5%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <div style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['fas', 'home']} />
          </div>

          <div style={{ paddingTop: "10px", fontSize: "14px" }}>
            Home 
          </div>
        </div>

        <div style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['far', 'calendar-check']} />
          </div>

          <div style={{ paddingTop: "10px", fontSize: "14px" }}>
            Book us 
          </div>
        </div>

        <div style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['fas', 'tag']} />
          </div>

          <div style={{ paddingTop: "10px", fontSize: "14px" }}>
            Pricing 
          </div>
        </div>

        <div style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['fas', 'id-card']} />
          </div>

          <div style={{ paddingTop: "10px", fontSize: "14px" }}>
            Our team 
          </div>
        </div>

        <div style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['fas', 'images']} />
          </div>

          <div style={{ paddingTop: "10px", fontSize: "14px" }}>
            Photo gallery 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;