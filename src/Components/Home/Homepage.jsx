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

{/* <div style={{ margin: "40px" }}>
        <div style={{ margin: "0px 20%", textAlign: "center", fontSize: "20px", paddingBottom: "15px", borderBottom: "1.5px solid #1d1d1d" }}>Reviews</div>

        <div className="reviews-wrapper" style={{ width: "100%", margin: "20px 0px", display: "flex", overflow: "auto" }}>
          <div style={{ marginRight: "20px", textAlign: "center", minWidth: "300px", width: "300px" }}>
            <div>
              <img src="https://via.placeholder.com/150x150" />
            </div>

            <div style={{ paddingTop: "10px", fontWeight: "600", fontSize: "16px", textDecorationLine: "underline" }}>Name</div>
            <div style={{ paddingTop: "5px", fontSize: "14px" }}>Carl Lee Junior</div>
            <div style={{ paddingTop: "10px", fontWeight: "600", fontSize: "16px", textDecorationLine: "underline" }}>Service</div>
            <div style={{ paddingTop: "5px" }}>Full Service Groom</div>
            <div style={{ paddingTop: "10px", fontWeight: "600", fontSize: "16px", textDecorationLine: "underline" }}>Review</div>
            <div style={{ paddingTop: "5px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at autem rem reprehenderit ut dolor, odit eos voluptates magni assumenda iusto voluptatum quis officiis facilis necessitatibus, corporis eaque! Temporibus, corporis!
            </div>
          </div>

          <div style={{ marginRight: "20px", textAlign: "center", minWidth: "300px", width: "300px" }}>
            <div>
              <img src="https://via.placeholder.com/150x150" />
            </div>

            <div style={{ paddingTop: "10px", fontWeight: "600", fontSize: "16px", textDecorationLine: "underline" }}>Name</div>
            <div style={{ paddingTop: "5px", fontSize: "14px" }}>Carl Lee Junior</div>
            <div style={{ paddingTop: "10px", fontWeight: "600", fontSize: "16px", textDecorationLine: "underline" }}>Service</div>
            <div style={{ paddingTop: "5px" }}>Full Service Groom</div>
            <div style={{ paddingTop: "10px", fontWeight: "600", fontSize: "16px", textDecorationLine: "underline" }}>Review</div>
            <div style={{ paddingTop: "5px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at autem rem reprehenderit ut dolor, odit eos voluptates magni assumenda iusto voluptatum quis officiis facilis necessitatibus, corporis eaque! Temporibus, corporis!
            </div>
          </div>

          <div style={{ marginRight: "20px", textAlign: "center", minWidth: "300px", width: "300px" }}>
            <div>
              <img src="https://via.placeholder.com/150x150" />
            </div>

            <div style={{ paddingTop: "10px", fontWeight: "600", fontSize: "16px", textDecorationLine: "underline" }}>Name</div>
            <div style={{ paddingTop: "5px", fontSize: "14px" }}>Carl Lee Junior</div>
            <div style={{ paddingTop: "10px", fontWeight: "600", fontSize: "16px", textDecorationLine: "underline" }}>Service</div>
            <div style={{ paddingTop: "5px" }}>Full Service Groom</div>
            <div style={{ paddingTop: "10px", fontWeight: "600", fontSize: "16px", textDecorationLine: "underline" }}>Review</div>
            <div style={{ paddingTop: "5px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at autem rem reprehenderit ut dolor, odit eos voluptates magni assumenda iusto voluptatum quis officiis facilis necessitatibus, corporis eaque! Temporibus, corporis!
            </div>
          </div>
        </div>

        <div>
          <div>Toggle L</div>
          <div>Review number</div>
          <div>Toggle R</div>
        </div>

        <div>
          <div>
            Font Awesome Icon
          </div>

          <div>
            Submit a review!
          </div>
        </div>
      </div> */}

{/* <div style={{ display: "grid", width: "90%", margin: "40px auto", gridTemplateColumns: "1fr 0.5fr 1fr" }}>
  <div style={{ paddingRight: "10px", textAlign: "left", letterSpacing: "0.75px", lineHeight: "25px", maxWidth: "250px", justifySelf: "center" }}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, inventore earum ut nisi vel consequuntur consectetur consequatur quasi asperiores omnis tempora sit. Magni ab nemo illo exercitationem provident quo quidem.
  </div>

  <div style={{ display: "flex" }}>
    <img 
      style={{ objectFit: "cover", width: "100%" }} 
      src="https://via.placeholder.com/200x300" 
    />
  </div>

  <div style={{ paddingLeft: "10px", textAlign: "right", letterSpacing: "0.75px", lineHeight: "25px", maxWidth: "250px", justifySelf: "center" }}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam asperiores adipisci ad vitae fugiat iste, soluta aliquam perferendis autem repellendus id rem quia saepe provident dicta temporibus laudantium. Quas, assumenda?
  </div>
</div> */}

{/* <div style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
  <div>
    <div style={{ fontWeight: "600", fontSize: "18px", textDecorationLine: "underline", marginBottom: "20px" }}>Verified Review</div>

    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia aspernatur, eligendi quam praesentium similique pariatur fugiat impedit quos aliquid omnis tempore distinctio quod vitae maxime inventore totam repellendus suscipit.
    </div>
  </div>

  <div>
    <div style={{ fontWeight: "600", fontSize: "18px", textDecorationLine: "underline", marginBottom: "20px" }}>Our Core Value</div>

    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia aspernatur, eligendi quam praesentium similique pariatur fugiat impedit quos aliquid omnis tempore distinctio quod vitae maxime inventore totam repellendus suscipit.
    </div>
  </div>

  <div>
    <div style={{ fontWeight: "600", fontSize: "18px", textDecorationLine: "underline", marginBottom: "20px" }}>Verified Review</div>

    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia aspernatur, eligendi quam praesentium similique pariatur fugiat impedit quos aliquid omnis tempore distinctio quod vitae maxime inventore totam repellendus suscipit.
    </div>
  </div>
</div> */}

{/* <div style={{ display: "grid", width: "90%", margin: "0 auto", gridTemplateColumns: "1fr 0.5fr 1fr" }}>
<div style={{ paddingRight: "10px", textAlign: "left", letterSpacing: "0.75px", lineHeight: "25px", maxWidth: "250px", justifySelf: "center" }}>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, inventore earum ut nisi vel consequuntur consectetur consequatur quasi asperiores omnis tempora sit. Magni ab nemo illo exercitationem provident quo quidem.
</div>

<div>
  <img 
    style={{ objectFit: "cover", width: "100%", display: "flex" }} 
    src="https://via.placeholder.com/200x300" 
  />
</div>

<div style={{ paddingLeft: "10px", textAlign: "right", letterSpacing: "0.75px", lineHeight: "25px", maxWidth: "250px", justifySelf: "center" }}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam asperiores adipisci ad vitae fugiat iste, soluta aliquam perferendis autem repellendus id rem quia saepe provident dicta temporibus laudantium. Quas, assumenda?
</div>
</div>

<div style={{ width: "90%", margin: "40px auto 20px", display: "flex", justifyContent: "space-between", textAlign: "center", lineHeight: "25px", letterSpacing: "0.75px" }}>
<div style={{ width: "40%" }}>
  <div style={{ fontSize: "20px" }}>
    <FontAwesomeIcon icon={['fas', 'paw']} />
  </div>

  <div>
    Call or Text
  </div>

  <div>
    (801) 726-9594
  </div>
</div>

<div style={{ width: "40%" }}>
  <div style={{ fontSize: "20px" }}>
    <FontAwesomeIcon icon={['fa', 'paw']} />
  </div>

  <div>
    Address
  </div>

  <div>
    2423 S 500 W, Bountiful UT, 84010 
  </div>
</div>
</div> */}