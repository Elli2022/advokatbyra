import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Banner from "../components/Banner";
import LargeBanner from "../components/LargeBanner";

function Home() {
  return (
    <>
      <Navbar />
      {/* <Title /> */}
      <Banner />
      <LargeBanner />
    </>
  );
}

export default Home;
