import React from "react";
import {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/huge.png'
import img2 from '../images/huge1.png'
import img3 from '../images/huge2.png'
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

    <div class=" cc card mb-3" style={{maxWidth:" 1250px", backgroundColor:" #191D88", marginBottom:"100px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img4} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">A system accident incident register is a structured database or log where all accidents,
         incidents, near misses, and hazards within 
        a system or organization are systematically recorded, documented, and tracked over time.
        It helps organizations comply with legal and regulatory requirements related to workplace safety and incident reporting. 
        By maintaining accurate records of all incidents, organizations demonstrate 
        their commitment to safety and fulfill their obligations to regulatory authorities.</h5>
        <br></br>
        <p class="card-text"> 1. Centralized Repository<br></br>
        2. Analysis and Investigation<br></br>
        3. Risk Management<br></br>
        4. Continuous Improvement<br></br>
        5. Communication and Transparency<br></br>
        6. Benchmarking and Reporting<br></br>
        
        </p>
      </div>
    </div>
  </div>
</div>




    </div>
    )
}

export default About
