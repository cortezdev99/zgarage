import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Footer = () => {
  return (
    <div style={{ padding: "40px", display: "grid", gridTemplateColumns: "1fr", rowGap: "40px", justifyItems: "center" }}>
      <div>
        <img src="https://via.placeholder.com/150x150" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", margin: "0px 20%", width: "60%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ paddingLeft: "10px", fontSize: "20px", transform: "rotate(135deg)" }}>
            <FontAwesomeIcon icon={['fas', 'phone']} />
          </div>

          <div style={{ fontSize: "15px", cursor: "pointer" }}>
            <div>(801) 259-4056</div>
            <div style={{ fontSize: "14px" }}>9:00 AM - 5:00 PM</div>
          </div>
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

      <div style={{ fontSize: "14px", letterSpacing: "0.75px", lineHeight: "25px", width: "100%", display: "flex", justifyContent: "space-evenly", textAlign: "center" }}>
        <div style={{ width: "120px", cursor: "pointer" }}>Home</div>
        <div style={{ width: "120px", cursor: "pointer"  }}>Book Us</div>
        <div style={{ width: "120px", cursor: "pointer"  }}>Pricing</div>
        <div style={{ width: "120px", cursor: "pointer"  }}>Our Team</div>
        <div style={{ width: "120px", cursor: "pointer"  }}>Photo Gallery</div>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ fontSize: "24px", marginRight: "40px", cursor: "pointer" }}>
          <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        </div>

        <div style={{ fontSize: "24px", cursor: "pointer" }}>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </div>
      </div>

      <div style={{ fontSize: "12px" }}>
        Copyright @2022 All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer;