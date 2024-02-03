import React from "react";
import img from "../images/8.jpg"

const Hero = () => {
    return (
        <div class="container-fluid col-xxl-8 px-4 py-7 hero-container">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src={img} 
                    class="d-block mx-lg-auto img-fluid"
                     alt="Bootstrap Themes" 
                     width="400" 
                     height="350" loading="lazy" />
                </div>
                <div class="col-lg-6 py-5 hero-text">
                    <h1 class="display-1 fw-bold lh-1 mb-3">
                        <span>ACCIDENT INCIDENT REGISTER</span>
                    </h1>

                    <div className="d-flex align-items-center my-2">
                    <p class="fw-bold">
                    Empowering Safety Through Documentation. Incident Aware, Future Prepared</p></div>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-start hero-button">
                        <button type="button" class="btn btn-warining btn-lg px-4 me-md-2 rounded-0">
                            REGISTER</button>
                       
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero