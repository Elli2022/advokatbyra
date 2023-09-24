import React from "react";
import lawFirmBanner from "../images/lawFirmBanner.jpg";
import TextInsideBanner from "./TextInsideBanner";

function LargeBanner() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={lawFirmBanner}
        alt="Stor bannerbild"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1, // Placera texten över bilden
        }}
      >
        <TextInsideBanner />
      </div>
    </div>
  );
}

export default LargeBanner;
