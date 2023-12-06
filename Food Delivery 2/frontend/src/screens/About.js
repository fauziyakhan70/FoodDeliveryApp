import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer"; 

function About() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="img-center"> 
      <div className="about-us">
    </div>
      </div>
    

    <div className="text-center" >
      <h2>About Our Food Delivery Service</h2> <p>
        We are passionate about delivering delicious food to your doorstep.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
        fringilla turpis.
      </p>
      <p>
        Our mission is to provide high-quality meals made with fresh
        ingredients and love.
      </p>
      <p>
        Contact us at: <a href="mailto:info@example.com">info@example.com</a>
      </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
