import React from 'react'

const Pricing = () => {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "0.75fr 1.25fr", columnGap: "40px" }}>
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
      </div>
    </div>
  )
}

export default Pricing;