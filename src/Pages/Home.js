import React, { Component } from "react";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import GridViewCategories from "../components/GridViewProduct/GridViewCategories";
import SlideShow from "../components/SlideShow/SlideShow.js";
import GridViewProduct from "../components/GridViewProduct/GridViewProduct";
import { BrowserRouter as Router } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <SlideShow />
          </div>
          {/* { <GridViewProduct/> */}
          {<GridViewCategories /> }
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
