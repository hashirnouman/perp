import React from "react";
import "./styles/Home.css";
import Header from "../components/Header";
import Navtop from "../components/Navtop";
import CardsSection from "../components/CardsSection";
import Footer from "../components/Footer.jsx"

const Home = () => {
  return (
    <div>
      <Navtop />
      <Header />
      <CardsSection/>
      <Footer/>
    </div>
  );
};

export default Home;
