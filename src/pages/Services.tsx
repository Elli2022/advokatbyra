import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Banner from "../components/Banner";

function Services() {
  console.log("tjänster");
  return (
    <>
      <Navbar />
      <Title />
      <Banner />
      <div style={{ color: "white" }}>Tjänster</div>
    </>
  );
}

export default Services;
