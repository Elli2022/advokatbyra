import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Banner from "../components/Banner";

function About() {
  console.log("Om oss");
  return (
    <>
      <Navbar />
      <Title />
      <Banner />
      <div style={{ color: "white" }}>Detta är sidan om oss</div>
    </>
  );
}

export default About;
