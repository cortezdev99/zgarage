import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import ZukiesGarageLogo from '../../Images/Logos/ZukiesGarage_logo.jpg'

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#FFF", display: "flex", flexDirection: "column", alignItems: "center", letterSpacing: "0.75px", lineHeight: "25px" }}>
      <div style={{ paddingTop: "20px", display: "grid", gridTemplateColumns: "0.25fr 0.50fr 0.25fr", margin: "0px 5%", width: "90%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ paddingLeft: "10px", fontSize: "20px", transform: "rotate(135deg)" }}>
            <FontAwesomeIcon icon={['fas', 'phone']} />
          </div>

          <div style={{ fontSize: "15px", cursor: "pointer" }}>
            <div>(801) 259-4056</div>
            <div style={{ fontSize: "14px" }}>9:00 AM - 5:00 PM</div>
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img style={{ display: "flex", width: "100%", maxWidth: "200px" }} src={ZukiesGarageLogo}></img>
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

          <div style={{ fontSize: "14px" }}>
            Home 
          </div>
        </NavLink>

        <a target="_blank" href="https://booking.moego.pet/go/?name=ZukiesGarage" style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['far', 'calendar-check']} />
          </div>

          <div style={{ fontSize: "14px" }}>
            Book us 
          </div>
        </a>

        <NavLink to="/pricing" style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['fas', 'tag']} />
          </div>

          <div style={{ fontSize: "14px" }}>
            Pricing 
          </div>
        </NavLink>

        <NavLink to="/our-team" style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['fas', 'id-card']} />
          </div>

          <div style={{ fontSize: "14px" }}>
            Our team 
          </div>
        </NavLink>

        <NavLink to="/photo-gallery" style={{ width: "100px", cursor: "pointer" }}>
          <div style={{ fontSize: "20px" }}>
            <FontAwesomeIcon icon={['fas', 'images']} />
          </div>

          <div style={{ fontSize: "14px" }}>
            Photo gallery 
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar;