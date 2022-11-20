import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import HomeHeroImage from '../../Images/Homepage/home-hero-image.jpg'
import QouteSectionBackgroundImage from "../../Images/Homepage/paw-print.jpg"
import MouseTrap from "../../Images/Homepage/mousetrap.jpg"
import Aggie from "../../Images/ProductionImagesOrganizeSoon/aggie.jpg"
import Marvel from "../../Images/ProductionImagesOrganizeSoon/marvel.jpg"
import LupinL from "../../Images/ProductionImagesOrganizeSoon/LupinL.jpg"
import HomeHero from "../../Images/ProductionImagesOrganizeSoon/homepagehomehero.jpg"
// Colors
// Primary 1 #FFF
// Accent 1 #e1e0e0


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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "20px" }}>
          <div style={{ textAlign: "center", letterSpacing: "0.75px", lineHeight: "25px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ paddingBottom: "10px", borderBottom: "1.5px solid #1d1d1d" }}>
              Zukies Garage
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              Zukie's Garage Pet Grooming is a full service pet grooming salon located in Bountiful Utah. Your pets will be more at ease with our home based environment and one on one grooming experience.  We make a promise to you and you beloved pets to always be patience, compassionate and work with an attention for detail. Offering professional services for pets under 30 lbs.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "end", width: "100%" }}>
            <img style={{ objectFit: "cover", width: "100%", maxWidth: "300px", borderRadius: "5px" }} src={Aggie} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "20px" }}>
          <div style={{ alignSelf: "center", justifySelf: "start" }}>
            <img style={{ objectFit: "contain", width: "100%", maxWidth: "300px", borderRadius: "5px" }} src={LupinL} />
          </div>

          <div style={{ textAlign: "center", letterSpacing: "0.75px", lineHeight: "25px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ paddingBottom: "10px", borderBottom: "1.5px solid #1d1d1d" }}>
              Review
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              Sammi is absolutely amazing! I've been taking my pups to her for 12 years and have never once been disappointed. She's extremely patient with my dogs. My three pups get so excited when I tell them they are going to see Sammi. They literally push me out the door. It's such a relief to know they love their groomer as much I as do! 
            </div>

            <div style={{ color: "#1d1d1d" }}>
              - Sarah Later
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "20px" }}>
          <div style={{ textAlign: "center", letterSpacing: "0.75px", lineHeight: "25px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ paddingBottom: "10px", borderBottom: "1.5px solid #1d1d1d" }}>
              Qoute
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur blanditiis nostrum id. Praesentium vero, officia maiores temporibus repellendus natus amet expedita quaerat eveniet unde nisi itaque inventore vitae repudiandae.
            </div>
          </div>

          <div style={{ alignSelf: "center", justifySelf: "end" }}>
            <img style={{ objectFit: "contain", width: "100%", maxWidth: "300px", borderRadius: "5px" }} src={Marvel} />
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