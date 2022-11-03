import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import PricingHeading from '../../Images/Pricing/pricing-header-image.jpg'

const Pricing = () => {
  return (
    <div>
      <div>
        <div style={{ position: "relative", width: "100%", display: "flex", overflow: "hidden" }}>
          <img style={{ position: "relative", top: "-40px", width: "100%", objectPosition: "center", transform: "skewY(-5deg)", transformOrigin: "top left" }} src={PricingHeading} />
        </div>

        <div style={{ padding: "40px" }}>
          <div style={{ textAlign: "center", paddingBottom: "10px", textTransform: "uppercase", letterSpacing: "0.75px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: "5px", paddingRight: "10px" }}>
              <span style={{ transform: "rotate(315deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ position: "relative", top: "-15px" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ transform: "rotate(45deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
            </div>

            <div>
              Pricing and Services
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: "5px", paddingLeft: "10px" }}>
              <span style={{ transform: "rotate(315deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ position: "relative", top: "-15px" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ transform: "rotate(45deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
            </div>
          </div>

          <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "40px" }}>
            <div>
              <div style={{ paddingBottom: "10px", borderBottom: "1.5px solid #1d1d1d" }}>Bath and Brush</div>

              <ul style={{ margin: "20px 0px 0px" }}>
                <li style={{ paddingBottom: "10px" }}>High Quality Shampooing</li>
                <li style={{ paddingBottom: "10px" }}>Fluff Dry</li>
                <li style={{ paddingBottom: "10px" }}>Brush Out</li>
                <li style={{ paddingBottom: "10px" }}>Nail Trim and Dremel</li>
                <li style={{ paddingBottom: "10px" }}>Pad, Face, and Body Area Trim</li>
                <li style={{ paddingBottom: "10px" }}>Gland Expression</li>
                <li style={{ paddingBottom: "10px" }}>Nail Trim and Dremel</li>
                <li style={{ paddingBottom: "10px" }}>Ear Cleaning (Upon Request)</li>
                <li style={{ paddingBottom: "10px" }}>Lots of Cuddles!</li>
              </ul>
            </div>

            <div style={{ alignSelf: "center", justifySelf: "end" }}>
              <img src="https://via.placeholder.com/250x250" />
            </div>
          </div>

          <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "40px" }}>
            <div style={{ alignSelf: "center", justifySelf: "start" }}>
              <img src="https://via.placeholder.com/250x250" />
            </div>

            <div>
              <div style={{ paddingBottom: "10px", borderBottom: "1.5px solid #1d1d1d", textAlign: "end" }}>Bath and Brush</div>

              <ul style={{ margin: "20px 0px 0px", direction: "rtl" }}>
                <li style={{ paddingBottom: "10px" }}>High Quality Shampooing</li>
                <li style={{ paddingBottom: "10px" }}>Fluff Dry</li>
                <li style={{ paddingBottom: "10px" }}>Brush Out</li>
                <li style={{ paddingBottom: "10px" }}>Nail Trim and Dremel</li>
                <li style={{ paddingBottom: "10px" }}>Pad, Face, and Body Area Trim</li>
                <li style={{ paddingBottom: "10px" }}>Gland Expression</li>
                <li style={{ paddingBottom: "10px" }}>Nail Trim and Dremel</li>
                <li style={{ paddingBottom: "10px" }}>Ear Cleaning (Upon Request)</li>
                <li style={{ paddingBottom: "10px" }}>Lots of Cuddles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing;

{/* <div style={{ display: "grid", gridTemplateColumns: "0.75fr 1.25fr", columnGap: "40px" }}>
  <div style={{ marginTop: "20px" }}>
    <img
      src="https://via.placeholder.com/250x300"
      style={{ 
        width: "100%",
        objectFit: "cover",
        display: "flex"
        }} 
    />
  </div>

  <div style={{ marginTop: "40px", marginRight: "40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div
      style={{ paddingBottom: "12px", width: "100%", textAlign: "center", fontSize: "18px", fontWeight: "600", letterSpacing: "0.75px", lineHeight: "25px", borderBottom: "2.5px solid #000" }}
    >
      Services and Pricing
    </div>

    <div style={{ lineHeight: "25px", letterSpacing: "0.75px", textAlign: "center", width: "100%", margin: "20px 20px 0px", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "20px" }}>
        <div>
          <div style={{ textDecorationLine: "underline", fontWeight: "600" }}>Full Service Groom</div>

          <div style={{ fontSize: "14px" }}>
            <div>High Quality Shampooing</div>
            <div>Fluff Dry</div>
            <div>Brush Out</div>
            <div>Nail Trim and Dremel</div>
            <div>Haircut</div>
            <div>Gland Expression</div>
            <div>Ear Cleaning (Upon Request)</div>
            <div>Plenty of Love and Pets!</div>
          </div>
        </div>

        <div>
          <div style={{ textDecorationLine: "underline", fontWeight: "600" }}>Bath and Brush</div>

          <div style={{ fontSize: "14px" }}>
            <div>High Quality Shampooing</div>
            <div>Fluff Dry</div>
            <div>Brush Out</div>
            <div>Nail Trim and Dremel</div>
            <div>Pad, Face, and Body Area Trim</div>
            <div>Gland Expression</div>
            <div>Ear Cleaning (Upon Request)</div>
            <div>Lots of Cuddles!</div>
          </div>
        </div>
    </div>
  </div>
</div> */}