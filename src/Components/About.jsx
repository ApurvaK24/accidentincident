import React from "react";
import {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/1.png'
import img2 from '../images/7.png'
import img3 from '../images/6.png'
import img4 from '../images/3.png'
import Navbar from "./Navbar";
import Footer from "./Footer";
const slide = [
    {
     image:img1,
    },
    {
      image:img2, 
     },
     {
      image:img3, 
     } 
  ]
  

function About(){

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return(
    
        <div >
            <Navbar />
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {slide.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img height="550px" width="300px"
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
      </Carousel.Item>
        )
      })}
      
    </Carousel>

<div class="head">
<h2> About US</h2></div>

    <div class=" cc card mb-3" style={{maxWidth:" 1250px", backgroundColor:" #191D88"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img4} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
<Footer />



    </div>
    )
}

export default About
