import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
    return (
       <div>
         <Navbar />
        <div class="container-fluid px-3 py-4 hh">
            
            <h2 class="text-center display-5 fw-bold">Contact Us</h2>

            <br></br>
            
            <div class="row row-cols-7 row-cols-sm-10 row-cols-md-7 g-7 gg">
                <div class="col">
                    <div class="card shadow-sm">

                    <div class="contact">
                        <section class="mb-3">

                            <h2 class="h1-responsive font-weight-bold text-center my-4">We are here to help you!</h2>

                            <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                                a matter of hours to help you.</p>

                            <div class="row">


                                <div class="col-md-9 mb-md-0 mb-9">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                        <div class="row">

                                            <div class="col-md-6">
                                                <div class="md-form mb-4">
                                                <label for="name" class="">Your name</label>
                                                    <input type="text" id="name" name="name" class="form-control" />
                                                        
                                                </div>
                                            </div>


                                            <div class="col-md-6">
                                                <div class="md-form mb-4">
                                                <label for="email" class="">Your email</label>

                                                    <input type="text" id="email" name="email" class="form-control" />
                                                </div>
                                            </div>


                                        </div>


                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form mb-4">
                                                <label for="subject" class="">Subject</label>
                                                    <input type="text" id="subject" name="subject" class="form-control" />
                                                       
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">


                                            <div class="col-md-12">

                                                <div class="md-form mb-4">
                                                <label for="message">Your message</label>
                                                    <textarea type="text" id="message" name="message" rows="4" class="form-control md-textarea"></textarea>
                                                    
                                                </div>

                                            </div>
                                        </div>


                                    </form>

                                    <div class="text-center text-md-left">
                                        <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                                    </div>
                                    <div class="status"></div>
                                </div>

                                <div class="col-md-3 text-center">
                                    <ul class="list-unstyled mb-0">
                                        <li>{/*<i class="fas fa-map-marker-alt fa-2x"></i>*/}
                                        <i class="fa-solid fa-location-dot"></i>
                                            <p>ARAI, Kothrud, Pune.</p>
                                        </li>

                                        <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                            <p>+ 91 11234 567 89</p>
                                        </li>

                                        <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                            <p>contact@arai.com</p>
                                        </li>
                                    </ul>
                                </div>


                            </div>

                        </section>







                    </div>
                </div>

            </div>


          

        </div>
        
       
        </div>
         
          </div>
    )
}

export default ContactUs