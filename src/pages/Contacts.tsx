import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Banner from "../components/Banner";
import Container from "../components/Container";

function Contact() {
  console.log("Kontakt");
  return (
    <>
      <Navbar />
      <Title />
      <Banner />
      <div style={{ color: "white" }}>Kontakt</div>
      <Container>
        <p>
          <strong
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Hitta hit:
          </strong>
        </p>
      </Container>
    </>
  );
}

export default Contact;
