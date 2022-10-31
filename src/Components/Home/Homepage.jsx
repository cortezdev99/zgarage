import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import HomeHeroImage from '../../Images/Homepage/home-hero-image.jpg'
import QouteSectionBackgroundImage from "../../Images/Homepage/paw-print.jpg"

const Homepage = () => {
  return (
    <div>
      <div className="homepage-home-hero-wrapper">
        <div className="homepage-home-hero" />

        <div className="homepage-home-hero-content">
          <div style={{ textAlign: "center", fontSize: "4vw", letterSpacing: "0.75px", display: "flex", height: "100%", justifyContent: "center", flexDirection: "column" }}>
            <div style={{ color: "#FFF", fontWeight: "600" }}>
              Grooming
            </div>

            <div style={{ fontWeight: "600", fontSize: "3vw", marginTop: "20px", color: "#c9c9c9" }}>
              Taken to the next level
            </div>
          </div>
        </div>
      </div>

      <div style={{ margin: "40px 5%", width: "90%", display: "grid", gridTemplateColumns: "1fr", rowGap: "40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "10px" }}>
          <div style={{ textAlign: "center", letterSpacing: "0.75px", lineHeight: "25px" }}>
            <div style={{ paddingBottom: "10px", borderBottom: "1.5px solid #1d1d1d" }}>
              Why Zukies Garage Was Founded
            </div>

            <div style={{ textAlign: "left", marginTop: "20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur blanditiis nostrum id. Praesentium vero, officia maiores temporibus repellendus natus amet expedita quaerat eveniet unde nisi itaque inventore vitae repudiandae.
            </div>
          </div>

          <div style={{ alignSelf: "center", justifySelf: "end" }}>
            <img style={{ objectFit: "contain" }} src="https://via.placeholder.com/250x250" />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "10px" }}>
          <div style={{ alignSelf: "center", justifySelf: "start" }}>
            <img style={{ objectFit: "contain" }} src="https://via.placeholder.com/250x250" />
          </div>

          <div style={{ textAlign: "center", letterSpacing: "0.75px", lineHeight: "25px" }}>
            <div style={{ paddingBottom: "10px", borderBottom: "1.5px solid #1d1d1d" }}>
              Our Core Value
            </div>

            <div style={{ textAlign: "right", marginTop: "20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur blanditiis nostrum id. Praesentium vero, officia maiores temporibus repellendus natus amet expedita quaerat eveniet unde nisi itaque inventore vitae repudiandae.
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "10px" }}>
          <div style={{ textAlign: "center", letterSpacing: "0.75px", lineHeight: "25px" }}>
            <div style={{ paddingBottom: "10px", borderBottom: "1.5px solid #1d1d1d" }}>
              Our Testimony
            </div>

            <div style={{ textAlign: "left", marginTop: "20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur blanditiis nostrum id. Praesentium vero, officia maiores temporibus repellendus natus amet expedita quaerat eveniet unde nisi itaque inventore vitae repudiandae.
            </div>
          </div>

          <div style={{ alignSelf: "center", justifySelf: "end" }}>
            <img style={{ objectFit: "contain" }} src="https://via.placeholder.com/250x250" />
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.39801034438!2d-111.89421368451502!3d40.863138879315635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f7bb4fa8aa11%3A0x9fe03a542f42a9fd!2s2423%20500%20W%2C%20Woods%20Cross%2C%20UT%2084010!5e0!3m2!1sen!2sus!4v1667150926443!5m2!1sen!2sus" 
          width="600" 
          height="450" 
          style={{ border: "0px", width: "100%" }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Homepage