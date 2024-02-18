import React, { useEffect } from "react";
import AOS from 'aos';
import {Link} from "react-router-dom"
import img from '../images/7.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Goto() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (

        <div className="animation" data-aos="flip-right">
            <CardGroup>
                <Card>
                   { /*<Card.Img variant="top" src={img} />*/}
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            <Link to="/incident">Report an Incident</Link>
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    {/*<Card.Img variant="top" src={img} />*/}
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.
                            <Link to="/accident">Report an Accident</Link>
                        </Card.Text>
                    </Card.Body>

                </Card>

            </CardGroup>
        </div>

    )
}

export default Goto;






