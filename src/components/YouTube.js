import React from "react"

const YouTube = props => (
  <div className={"video-container " + props.className}>
    <iframe
      title="BTNT Video"
      src="https://www.youtube.com/embed/dryF1hpGK4A"
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
)

export default YouTube
