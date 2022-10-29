import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Homepage = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "grid", width: "90%", margin: "0 auto", gridTemplateColumns: "1fr 0.5fr 1fr" }}>
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
      </div>
    </div>
  )
}

export default Homepage