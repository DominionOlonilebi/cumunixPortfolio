import React from "react";
import Header from "./Header";
import Navbars from "./Navbars";
import Background from "./Background";
import Cards from "./Cards";
import Services from "./Services";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbars />
      <Background />
      <Cards />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
