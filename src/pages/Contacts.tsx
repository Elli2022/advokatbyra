import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Banner from "../components/Banner";

function Contact() {
  console.log("Kontakt");
  return (
    <>
      <Navbar />
      <Title />
      <Banner />
      <div style={{ color: "white" }}>Kontakt</div>
    </>
  );
}

export default Contact;
