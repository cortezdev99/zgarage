import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
        <img style={{ display: "flex" }} src="https://via.placeholder.com/150x175"></img>
      </div>

      <div style={{ paddingTop: "20px", textAlign: "center", margin: "20px 5%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <NavLink to="/" style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['fas', 'home']} />
          </div>

          <div style={{ paddingTop: "10px", fontSize: "14px" }}>
            Home 
          </div>
        </NavLink>

        <NavLink to="/schedule-an-appointment" style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['far', 'calendar-check']} />
          </div>

          <div style={{ paddingTop: "10px", fontSize: "14px" }}>
            Book us 
          </div>
        </NavLink>

        <NavLink to="/pricing" style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['fas', 'tag']} />
          </div>

          <div style={{ paddingTop: "10px", fontSize: "14px" }}>
            Pricing 
          </div>
        </NavLink>

        <NavLink to="/our-team" style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['fas', 'id-card']} />
          </div>

          <div style={{ paddingTop: "10px", fontSize: "14px" }}>
            Our team 
          </div>
        </NavLink>

        <NavLink to="/photo-gallery" style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['fas', 'images']} />
          </div>

          <div style={{ paddingTop: "10px", fontSize: "14px" }}>
            Photo gallery 
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar;