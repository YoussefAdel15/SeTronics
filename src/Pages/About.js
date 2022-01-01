import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar />
      <div className="text-black-50 bg-light">
        <h1 className="text-black-50 bg-light">About US</h1>
        <p className="text-black-50 bg-light">Yassin Wael Mahmoud Nouh</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
