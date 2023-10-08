import React from "react";
import BackgroundVideo from "../videos/BackgroundVideo.mp4";

function Video() {
  return (
    <div>
      <video
        style={{
          position: "relative",
          width: "100%",
          height: "50vh",
          overflow: "hidden",
        }}
        autoPlay
        loop
        muted
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <h1>Welcome to Our Website</h1>
        <p>Your amazing subtitle here</p>
      </div>
    </div>
  );
}

// const videoStyle = {
//   width: "100%",
//   height: "auto",
//   objectFit: "cover",
// };

// const contentStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   color: "white",
//   textAlign: "center",
// };

export default Video;
