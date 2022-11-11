import React from 'react'

const PhotoGallery = () => {
  return (
    <div>
      <div style={{ position: "relative", width: "100%", display: "flex", overflow: "hidden" }}>
        <img 
          style={{ position: "relative", top: "-40px", width: "100%", objectPosition: "center", transform: "skewY(-5deg)", transformOrigin: "top left" }}
          src="https://via.placeholder.com/400x200"
        />
      </div>

      <div style={{ padding: "40px" }}>
        <div className="gallery-grid-container">
          <div className="h-stretch">
            <img src="https://source.unsplash.com/random/300x150" />
          </div>

          <div className="v-stretch">
            <img src="https://source.unsplash.com/random/150x250" />
          </div>

          <div>
            <img src="https://source.unsplash.com/random/150x150" />
          </div>

          <div className="v-stretch">
            <img src="https://source.unsplash.com/random/150x250" />
          </div>

          <div className="v-stretch">
            <img src="https://source.unsplash.com/random/150x250" />
          </div>

          <div>
            <img src="https://source.unsplash.com/random/150x150" />
          </div>

          <div>
            <img src="https://source.unsplash.com/random/150x150" />
          </div>

          <div className="h-stretch">
            <img src="https://source.unsplash.com/random/300x150" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery;