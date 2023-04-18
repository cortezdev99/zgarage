import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom';
import HeartIcon from "../../Images/Icons/AboutUs/heart.svg"
import SmileIcon from "../../Images/Icons/AboutUs/smile.svg"
import DogIcon from "../../Images/Icons/AboutUs/dog.svg"
import TrophyIcon from "../../Images/Icons/AboutUs/trophy.svg"
import HandshakeIcon from "../../Images/Icons/AboutUs/handshake.svg"
import ShieldIcon from "../../Images/Icons/AboutUs/shield.svg"
import MagGlassIcon from "../../Images/Icons/AboutUs/mag-glass.svg"
import SpeechIcon from "../../Images/Icons/AboutUs/speech-bubble.svg"
import KristynnHeadshot from "../../Images/AboutUs/kristynn.jpeg"
import SammiHeadshot from "../../Images/AboutUs/sammi.jpeg"

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <div className="about-page-intro-wrapper">
        <div className="about-page-intro">We specialize in helping your furry companion look and feel their best.</div>

        <NavLink
          className="about-page-intro-book-now-action-btn"
          to="/book-consultation"
        >
          Book Now
        </NavLink>
      </div>

      <div className="about-page-our-culture-container">
        <div className="about-page-our-culture-header">Our Culture</div>

        <div className="about-page-our-culture-wrapper">
          <div className="about-page-our-culture-items-wrapper">
            <div className="about-page-our-culture-item-wrapper">
              <div className="about-page-our-culture-item-icon-wrapper">
                <img 
                  src={HeartIcon}
                  className="about-page-our-culture-item-icon about-page-our-culture-item-icon-eco"
                />
              </div>

              <div className="about-page-our-culture-item-header">
                Passion for pets
              </div>

              <div className="about-page-our-culture-item-text">
                At ZukiesGarage, we're not just a grooming business - we're a team of animal lovers who are passionate about caring for pets.
              </div>
            </div>

            <div className="about-page-our-culture-item-wrapper">
              <div className="about-page-our-culture-item-icon-wrapper">
                <img 
                  src={DogIcon}
                  className="about-page-our-culture-item-icon about-page-our-culture-item-icon-quality"
                />
              </div>

              <div className="about-page-our-culture-item-header">
                Personalized attention
              </div>

              <div className="about-page-our-culture-item-text">
                We understand that every pet is unique, which is why we provide personalized attention to each and every client. Our experienced groomers take the time to understand your pet's needs and preferences, ensuring they receive the best possible care and attention during their visit.
              </div>
            </div>

            <div className="about-page-our-culture-item-wrapper">
              <div className="about-page-our-culture-item-icon-wrapper">
                <img 
                  src={TrophyIcon}
                  className="about-page-our-culture-item-icon about-page-our-culture-item-icon-quality"
                />
              </div>

              <div className="about-page-our-culture-item-header">
                Exceptional service
              </div>

              <div className="about-page-our-culture-item-text">
                We believe that our clients deserve nothing but the best, which is why we strive to provide exceptional service every time. From the quality of our grooming to the friendliness of our staff, we're committed to exceeding your expectations in every way.
              </div>
            </div>

            <div className="about-page-our-culture-item-wrapper">
              <div className="about-page-our-culture-item-icon-wrapper">
                <img 
                  src={HandshakeIcon}
                  className="about-page-our-culture-item-icon about-page-our-culture-item-icon-quality"
                />
              </div>

              <div className="about-page-our-culture-item-header">
                Community focus
              </div>

              <div className="about-page-our-culture-item-text">
                At ZukiesGarage, we're proud to be a part of the local community. We believe in giving back and supporting local pet-related causes, and we're always looking for ways to make a positive impact on the lives of pets and their owners in our community.
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="about-page-hero-wrapper">
        <div className="about-page-hero-background" />

        <div className="about-page-hero-content-container">
          <div className="about-page-hero-content-wrapper">
            <div className="about-page-hero-content-subtext">
              Transforming pets into pampered perfection, one groom at a time.
            </div>

            <div className="about-page-hero-content-subtext">
              We give your pet the pampering they deserve with our top-notch grooming services.
            </div>
          </div>
        </div>
      </div>

      <div className="about-page-values-container">
        <div className="about-page-values-intro-wrapper">
          <div className="about-page-values-intro-header">Our Values</div>

          <div className="about-page-values-intro">
            At ZukiesGarage, we believe that grooming isn't just about making pets look good - it's about providing them with the care and attention they deserve. That's why we're committed to upholding a set of core values that guide everything we do. From our passion for pets to our dedication to exceptional service, these values define who we are as a business and what we stand for. 
          </div>
        </div>

        <div className="about-page-values-wrapper">
          <div className="about-page-value-wrapper">
            <div className="about-page-our-value-icon-wrapper">
              <img 
                src={ShieldIcon}
                className="about-page-value-icon about-page-value-icon-quality"
              />
            </div>

            <div className="about-page-value-header">
              Safety first: 
            </div>

            <div className="about-page-value-text">
              At ZukiesGarage, the safety of our furry clients is our top priority. We take every precaution to ensure that pets are safe and secure during their grooming appointments, from using gentle handling techniques to keeping our equipment clean and well-maintained.
            </div>
          </div>

          <div className="about-page-value-wrapper">
            <div className="about-page-our-value-icon-wrapper">
              <img 
                src={MagGlassIcon}
                className="about-page-value-icon  about-page-value-icon-quality"
              />
            </div>

            <div className="about-page-value-header">
              Attention to detail:
            </div>

            <div className="about-page-value-text">
              We believe that the little things make a big difference when it comes to pet grooming. That's why we pay close attention to every detail, from nail trimming to ear cleaning, to ensure that pets receive a comprehensive grooming experience that leaves them looking and feeling their best.
            </div>
          </div>

          <div className="about-page-value-wrapper">
            <div className="about-page-our-value-icon-wrapper">
              <img 
                src={SpeechIcon}
                className="about-page-value-icon about-page-value-icon-quality"
              />
            </div>

            <div className="about-page-value-header">
              Open communication:
            </div>

            <div className="about-page-value-text">
              We value open communication with our clients and believe that it's essential for providing exceptional service. We listen carefully to your needs and preferences, and provide clear and honest communication throughout the grooming process.
            </div>
          </div>

          <div className="about-page-value-wrapper">
            <div className="about-page-our-value-icon-wrapper">
              <img 
                src={SmileIcon}
                className="about-page-value-icon about-page-value-icon-quality"
              />
            </div>

            <div className="about-page-value-header">
              Positive reinforcement: 
            </div>

            <div className="about-page-value-text">
              We believe in the power of positive reinforcement to build trust and strengthen the bond between pets and their owners. That's why we use gentle and encouraging techniques during grooming appointments, to help pets feel relaxed and comfortable throughout the process.
            </div>
          </div>

          <div className="about-page-value-wrapper">
            <div className="about-page-our-value-icon-wrapper about-page-value-icon-quality">
              <img 
                src={DogIcon}
                className="about-page-value-icon"
              />
            </div>

            <div className="about-page-value-header">
              Personalized care:
            </div>

            <div className="about-page-value-text">
              We understand that every pet is unique, which is why we provide personalized care tailored to their individual needs. Whether it's a special shampoo for sensitive skin or extra playtime for an energetic pup, we go above and beyond to make sure each pet receives the care they deserve.
            </div>
          </div>

          <div className="about-page-value-wrapper">
            <div className="about-page-our-value-icon-wrapper">
              <img 
                src={TrophyIcon}
                className="about-page-value-icon about-page-value-icon-quality"
              />
            </div>

            <div className="about-page-value-header">
              Quality grooming: 
            </div>

            <div className="about-page-value-text">
              We take pride in providing top-quality grooming services to make pets look and feel their best. From our attention to detail to our use of premium grooming products, we're committed to ensuring that every pet leaves our salon looking and feeling great.
            </div>
          </div>
        </div>
      </div>

      <div className="about-page-leadership-wrapper">
        <div className="about-page-leadership-header">
          Our Leadership
        </div>

        <div className="about-page-leadership-leaders-wrapper">
          <div className="about-page-leadership-leader-wrapper">
            <div className="about-page-leadership-leader-image-wrapper">
              <img 
                className="about-page-leadership-leader-image"
                src={SammiHeadshot}
              />
            </div>

            <div className="about-page-leadership-leader-text-wrapper">
              <div className="about-page-leadership-leader-name">
                Sammi Jo Roberts
              </div>

              <div className="about-page-leadership-leader-experience">
                Founder
              </div>

              <div className="about-page-leadership-leader-text">
                <div>
                  I am passionate about providing pets with the highest quality grooming services in a welcoming and comfortable environment. My love for animals began at a young age, and I have always been drawn to the joy and companionship that pets bring to our lives. 
                </div>

                <div>
                  After years of working in the grooming industry and developing my skills and knowledge, I decided to pursue my dream of opening a grooming business where pets could receive personalized care and attention. 
                </div>

                <div>
                  Today, I am proud to lead a team of dedicated professionals who share my commitment to providing exceptional grooming services that keep pets looking and feeling their best.
                </div>
              </div>
            </div>
          </div>

          <div className="about-page-leadership-leader-wrapper">
            <div className="about-page-leadership-leader-image-wrapper">
              <img 
                className="about-page-leadership-leader-image"
                src={KristynnHeadshot}
              />
            </div>

            <div className="about-page-leadership-leader-text-wrapper">
              <div className="about-page-leadership-leader-name">
                Kristynn Tyler
              </div>

              <div className="about-page-leadership-leader-experience">
                Lead Groomer
              </div>

              <div className="about-page-leadership-leader-text">
                <div>
                  I take great pride in my work and am committed to providing pets with the highest quality grooming services. With years of experience in the grooming industry and a deep love for animals, I have developed a keen eye for detail and a gentle touch that ensures every pet receives a thorough and enjoyable grooming experience. 
                </div>

                <div>
                  Whether it's a routine trim or a more extensive grooming session, I work closely with pet owners to understand their needs and preferences, and provide personalized care that helps pets feel calm and relaxed throughout the grooming process.
                </div>

                <div>
                  At ZukiesGarage, we believe that pets are an important part of our lives, and we are dedicated to providing exceptional grooming services that help them look and feel their best.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;