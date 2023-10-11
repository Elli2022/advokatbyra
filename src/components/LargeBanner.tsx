import React from "react";
import lawFirmBanner from "../images/lawFirmBanner.jpg";
import TextInsideBanner from "./TextInsideBanner";

function LargeBanner() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={lawFirmBanner}
        alt="Stor bannerbild"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "left",
          backgroundColor: "rgba(0, 0, 0, 0)", // Lätt genomskinlig svart bakgrund för att förbättra textläsbarheten
        }}
      >
        <h2
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            color: "white",
            display: "flex",
            fontFamily: "adobe-caslon-pro,times,georgia,serif",
            fontSize: "calc(56px + 0.5vw)", // Exempel på responsiv fontstorlek
            maxWidth: "800px", // Maxbredd för textbehållaren
            lineHeight: "1.6", // Optimal line-height för läsbarhet
            margin: "26px auto", // Centrera behållaren horisontellt med 'auto'
            padding: "10px", // Utrymme runt texten
          }}
        >
          Welcome to Our Website
        </h2>
        <div style={{ backgroundColor: "transparent" }}>
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
              letterSpacing: ".5px",
              margin: "4px 2px",
              minWidth: "246px",
              transitionDuration: "0.4s",
              cursor: "pointer",
              borderRadius: "0",
            }}
            onClick={() => alert("Button clicked!")} // Exempelhändelse när knappen klickas
          >
            Om oss
          </button>
        </div>
      </div>
    </div>
  );
}

export default LargeBanner;
