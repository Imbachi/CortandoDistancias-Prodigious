import React from "react";
import "./styles/Carrusel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner from "../images/banner.jpg";

const Carrusel = (props) => {
  return (
    <div>
        <img src={banner} alt="" className="caca" />
        
    </div>
  );
};

export default Carrusel;
