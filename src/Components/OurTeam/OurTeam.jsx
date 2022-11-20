import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const OurTeam = () => {
  return (
    <div>
      <div>
        <div style={{ position: "relative", width: "100%", display: "flex", overflow: "hidden" }}>
          <img 
            style={{ position: "relative", top: "-40px", width: "100%", objectPosition: "center", transform: "skewY(-5deg)", transformOrigin: "top left" }}
            src="https://via.placeholder.com/400x200"
          />
        </div>

        <div style={{ padding: "0px 40px 40px" }}>
          <div style={{ textAlign: "center", paddingBottom: "10px", textTransform: "uppercase", letterSpacing: "0.75px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: "5px", paddingRight: "10px" }}>
              <span style={{ transform: "rotate(315deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ position: "relative", top: "-15px" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ transform: "rotate(45deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
            </div>

            <div>
              Meet our team!
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: "5px", paddingLeft: "10px" }}>
              <span style={{ transform: "rotate(315deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ position: "relative", top: "-15px" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ transform: "rotate(45deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <div>
              <div style={{ float: "left", paddingRight: "40px", paddingBottom: "40px" }}>
                <img style={{ display: "flex" }} src="https://via.placeholder.com/250x300" />
              </div>

              <div style={{ letterSpacing: "1px", lineHeight: "25px", "-webkit-font-smoothing": "subpixel-antialiased" }}>
                <div style={{ paddingBottom: "20px", borderBottom: "1.5px solid #1d1d1d" }}>
                  Sammi Jo Roberts
                </div>

                <div style={{ paddingBottom: "20px" }}>
                  I have been grooming since 2010, but I have been working in the dog industry for much longer! I started right out of high school working as a kennel technician at a local vets office and continued to work my way through many positions learning as much as I could about animals. I found my passion for grooming and started my business to serve the people and pets of my community. I truly love and appreciate everyone of my clients and I'm so happy that you have given me your trust for your pets grooming needs! 
                </div>
              </div>
            </div>

            <div style={{ marginTop: "40px" }}>
              <div style={{ float: "right", paddingLeft: "40px", paddingBottom: "40px" }}>
                <img style={{ display: "flex" }} src="https://via.placeholder.com/250x300" />
              </div>

              <div style={{ textAlign: "right", letterSpacing: "1px", lineHeight: "25px", "-webkit-font-smoothing": "subpixel-antialiased" }}>
                <div style={{ paddingBottom: "20px" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iure eum modi. Odit repellendus molestiae sequi modi, commodi quidem fugiat itaque sint officiis, explicabo necessitatibus quia veritatis, harum magnam quasi.
                  Pariatur vel illo, maxime aliquam beatae eveniet vitae voluptas odit reiciendis molestiae neque, facere iusto cumque nulla libero. Corporis vel ipsam dolorum totam doloremque architecto molestiae numquam neque reprehenderit quo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam;