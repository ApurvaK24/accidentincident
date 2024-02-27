import React from "react";
import im from "../images/2.png"
import { Link } from "react-router-dom";
const Main1 = () => {
    return (
        <div class="container-fluid px-4 py-5 hh">
            <h2 class="text-center display-5 fw-bold">Our Aim</h2>

<br></br>
            <div class="row row-cols-9 row-cols-sm-12 row-cols-md-9 g-9 gg">
                <div class="col">
                    <div class="card shadow-sm">
                      {/*  <img src={im} width="100%" height="225" />*/}
                        <div class="card-body">
                            <p class="card-text">
                            The aim of the Accident Incident Register project is to enhance workplace safety by establishing a systematic and centralized system for documenting incidents, promoting timely reporting, analyzing data to identify trends, and fostering a culture of continuous improvement.

                                </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <Link type="button" class="btn btn-sm btn-outline-secondary" to="/about">Know More About Us</Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default Main1