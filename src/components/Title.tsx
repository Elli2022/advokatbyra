import React from "react";

function Title() {
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1
        className="title-style"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          backgroundColor: "black",
          fontFamily: "adobe-caslon-pro,times,georgia,serif",
          fontSize: 28,
          padding: "12px",
        }}
      >
        W ADVOKATBYRÅ
      </h1>
    </div>
  );
}

export default Title;
