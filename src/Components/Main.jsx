import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import img1 from '../images/5.png'
import img2 from '../images/7.png'
import img3 from '../images/6.png'
const Main = () => {
    return (
        <div className="dd1">
            <h2 class="text-center display-5 fw-bold">What this system provides?</h2>
            <Row xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
                <Col xs>
                    <Card className="info">
                        <Card.Body className="a">
                            <div className="team_img">
                                <Card.Img className="img" orientation="top" src={img1} />
                            </div>
                            <br></br>
                            <Card.Text>

                                <center><h3>Safety First, Records Always.</h3></center>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col xs>
                    <Card className="info">
                        <Card.Body className="a">
                            <div className="team_img">
                                <Card.Img className="img" orientation="top" src={img2} />
                            </div>

                            <br></br>

                            <Card.Text>

                                <center><h3>Guardians of Incident Accountability.</h3></center>

                            </Card.Text>


                        </Card.Body>

                    </Card>
                </Col>
                <Col xs>
                    <Card className="info">
                        <Card.Body className="a">
                            <div className="team_img">
                                <Card.Img className="img" orientation="top" src={img3} />
                            </div>
                            <br></br>
                            <Card.Text>

                                <center><h3>Records for Resilience, Safety for Success.</h3></center>

                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </div>
        /*<div class="container px-4 py-5 dd">
            <h2 class="text-center display-5 fw-bold">What this system provides?</h2>
         
            <div class="row g-2 py-5 row-cols-1 row-cols-lg-3">

                <div class="col px-7 text-center">
                    <div class="mb-3">
                        <img src={img2} className="w-50 h-50" alt="" />
                    </div>
                    <h3>Safety First, Records Always.</h3>
                    <p>
                    Protecting individuals from harm and ensuring accountability through thorough documentation,
                     ultimately fostering a culture of safety and accountability within an organization or community.
                     Prioritazing the safety first.
                    </p>
                    
                </div>
                <div class="col px-7 text-center">
                    <div class="mb-3">
                        <img src={img2} className="w-50 h-50" alt="" />
                    </div>
                    <h3>Guardians of Incident Accountability.</h3>
                    <p>Highlighting the crucial role of individuals or 
                    teams responsible for overseeing and managing incident
                     accountability within an organization or community, learning from mistakes. 
                     </p>
                    
                </div>
                <div class="col px-7 text-center">
                    <div class="mb-3">
                        <img src={img3} className="w-50 h-50" alt="" />

                    </div>
                    <h3>Records for Resilience, Safety for Success.</h3>
                    <p>  Documenting processes, incidents, and lessons learned, organizations can fortify their ability to adapt and 
                        thrive amidst adversity. Commitment to safety practices and
                         foundation of risk mitigation and well-being.</p>
                    
                </div>
            </div>
    </div>*/
    )
}

export default Main





