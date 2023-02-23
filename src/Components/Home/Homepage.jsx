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
    <div className="homepage-wrapper">
      <div className="homepage-home-hero-wrapper">
        <div className="homepage-home-hero-background" />

        <div className="homepage-home-hero-content-container">
          <div className="homepage-home-hero-content-wrapper">
            <div className="homepage-home-hero-content-header">
              Grooming
            </div>

            <div className="homepage-home-hero-content-subtext">
              Taken to the next level
            </div>
          </div>
        </div>
      </div>

      <div className="homepage-company-info-container">
        <div className="homepage-company-info-wrapper">
          <div className="homepage-company-info-text-wrapper">
            <div className="homepage-company-info-text-header">
              Zukies Garage
            </div>

            <div className="homepage-company-info-text">
              Zukie's Garage Pet Grooming is a full service pet grooming salon located in Bountiful Utah. Your pets will be more at ease with our home based environment and one on one grooming experience.  We make a promise to you and you beloved pets to always be patience, compassionate and work with an attention for detail. Offering professional services for pets under 30 lbs.
            </div>
          </div>

          <div className="homepage-company-info-image-wrapper">
            <img 
              className="homepage-company-info-image"
              src={Aggie}
            />
          </div>
        </div>

        <div className="homepage-company-info-wrapper">
          <div className="homepage-company-info-image-wrapper homepage-company-info-image-wrapper-flipped">
            <img 
              className="homepage-company-info-image" 
              src={LupinL} 
            />
          </div>

          <div className="homepage-company-info-text-wrapper">
            <div className="homepage-company-info-text-header">
              Review
            </div>

            <div className="homepage-company-info-text">
              Sammi is absolutely amazing! I've been taking my pups to her for 12 years and have never once been disappointed. She's extremely patient with my dogs. My three pups get so excited when I tell them they are going to see Sammi. They literally push me out the door. It's such a relief to know they love their groomer as much I as do! 
            </div>

            <div className="homepage-company-info-subtext">
              - Sarah Later
            </div>
          </div>
        </div>

        <div className="homepage-company-info-wrapper">
          <div className="homepage-company-info-text-wrapper">
            <div className="homepage-company-info-text-header">
              Qoute
            </div>

            <div className="homepage-company-info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur blanditiis nostrum id. Praesentium vero, officia maiores temporibus repellendus natus amet expedita quaerat eveniet unde nisi itaque inventore vitae repudiandae.
            </div>
          </div>

          <div className="homepage-company-info-image-wrapper">
            <img 
              className="homepage-company-info-image" 
              src={Marvel} 
            />
          </div>
        </div>
      </div>

      <div className="homepage-google-map-wrapper">
        <iframe
          className="homepage-google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.39801034438!2d-111.89421368451502!3d40.863138879315635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f7bb4fa8aa11%3A0x9fe03a542f42a9fd!2s2423%20500%20W%2C%20Woods%20Cross%2C%20UT%2084010!5e0!3m2!1sen!2sus!4v1667150926443!5m2!1sen!2sus" 
          width="600" 
          height="450" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Homepage