import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", letterSpacing: "0.75px", lineHeight: "25px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "0.25fr 0.50fr 0.25fr", margin: "0px 5%", width: "90%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ paddingLeft: "10px", fontSize: "20px", transform: "rotate(135deg)" }}>
            <FontAwesomeIcon icon={['fas', 'phone']} />
          </div>

          <div style={{ fontSize: "15px", cursor: "pointer" }}>
            <div>(801) 259-4056</div>
            <div style={{ fontSize: "14px" }}>9:00 AM - 5:00 PM</div>
          </div>
        </div>

        <div style={{ justifySelf: "center" }}>
          <img style={{ display: "flex" }} src="https://via.placeholder.com/150x175"></img>
        </div>

        <div style={{ textAlign: "end", display: "flex", flexDirection: "row-reverse", alignItems: "center" }}>
          <div style={{ paddingLeft: "10px", fontSize: "20px" }}>
            <FontAwesomeIcon icon={['fas', 'map-pin']} />
          </div>

          <div style={{ fontSize: "15px", cursor: "pointer" }}>
            2423 S 500 W Bountiful,
            <div>UT, 84010</div>
          </div>
          
        </div>
      </div>

      <div style={{ textAlign: "center", margin: "20px 5%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
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