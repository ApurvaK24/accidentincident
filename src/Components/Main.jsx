import React from "react";
import img1 from '../images/5.png'
import img2 from '../images/7.png'
import img3 from '../images/6.png'
const Main = () => {
    return (
        <div class="container px-4 py-5 dd">
            <h2 class="text-center display-5 fw-bold">What this system provides?</h2>
         
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">

                <div class="col px-5 text-center">
                    <div class="mb-3">
                        <img src={img1} className="w-50 h-50" alt="" />
                    </div>
                    <h2>Safety First, Records Always.</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" class="icon-link">
                        Call to action

                    </a>
                </div>
                <div class="col px-5 text-center">
                    <div class="mb-3">
                        <img src={img2} className="w-50 h-50" alt="" />
                    </div>
                    <h2>Guardians of Incident Accountability.</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" class="icon-link">
                        Call to action


                    </a>
                </div>
                <div class="col px-5 text-center">
                    <div class="mb-3">
                        <img src={img3} className="w-50 h-50" alt="" />

                    </div>
                    <h2>Records for Resilience, Safety for Success.</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" class="icon-link">
                        Call to action


                    </a>
                </div>
            </div>
        </div>
    )
}

export default Main