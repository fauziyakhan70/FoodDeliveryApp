import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import React from "react";
import Carousel from "../components/Carousel";
import Search from "../components/Search";


function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
     
      <div className="m-1 cards">
        <Card />

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
