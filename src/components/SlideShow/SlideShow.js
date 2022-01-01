import React from "react";
import { products } from "../data/products";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import './SlideShowStyle.css'
import "react-image-gallery/styles/css/image-gallery.css";
import {Bundles}  from "../data/products";

const Slider = () => {
  return (
    <div>
      <ImageGallery
        className= "SlideShow"
        items={Bundles}
        showThumbnails={false}
        infinite={true}
        showBullets={true}
        showIndex={false}
        lazyLoad={true}
        showPlayButton={false}
        slideInterval={"1000"}
      />
    </div>
  );
};

export default Slider;
