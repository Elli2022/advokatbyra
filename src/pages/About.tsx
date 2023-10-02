import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Banner from "../components/Banner";
import Container from "../components/Container";

function About() {
  console.log("Om oss");
  return (
    <>
      <Navbar />
      <Title />
      <Banner />
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          fontSize: 28,
        }}
      >
        Detta är sidan om oss
      </div>
      <Container>
        <p>
          <strong
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Företagsnamn: JEWE Advokatbyrå
          </strong>
        </p>
        <p>
          <strong
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Grundat: 2023
          </strong>
        </p>
        <p>
          <strong
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Verksamhetsbeskrivning: Välkommen till vår advokatbyrå, där vi
            erbjuder professionella juridiska tjänster med en personlig prägel.
            Vi erbjuder en rad olika juridiska tjänster och strävar efter att ge
            varje klient högsta möjliga standard av rådgivning och stöd. Oavsett
            om det gäller affärsjuridik, familjerätt, brottmål eller något annat
            juridiskt område, arbetar vi tillsammans med våra klienter för att
            uppnå bästa möjliga resultat. Vår byrå värdesätter integritet,
            transparens och respekt, och vi arbetar oavbrutet för att
            upprätthålla och vidareutveckla vår expertis inom de juridiska
            områdena. Vi är här för att hjälpa dig navigera genom juridiska
            utmaningar och säkerställa dina rättigheter och intressen.
          </strong>
        </p>
      </Container>
    </>
  );
}

export default About;
