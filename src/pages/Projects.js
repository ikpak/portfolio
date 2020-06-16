import React from 'react'
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap'

export default function Projects() {
    return (
        <div className="main">
            <Container>
                <Row className="rowTop">
                    <Col>
                        <Card className="card firstCard" style={{border: 'none'}}>
                            <Card.Img src="../chocobo.png" className="cardImg" />
                            <Card.Body className="cardBody">
                                <h3>CHOCOBO CHRONICLES</h3>
                                <p>2D canvas game based on popular mascot character of Final Fantasy franchise.</p>
                                <span>
                                    <a href="https://week-2-monster-catch.netlify.app/">
                                        <button className="demoBtn">Live Demo</button>
                                    </a>
                                    <a href="https://github.com/ikpak/Week-2-Monster-Catch">
                                        <button>GitHub</button>
                                    </a>
                                </span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card secondCard" style={{border: 'none'}}>
                            <Card.Img src="../itviec.png" className="cardImg" />
                            <Card.Body className="cardBody">
                                <h3>IT VIEC</h3>
                                <p>Recreation of Vietnamese IT job search website.</p>
                                <span>
                                    <a href="https://week-6-it-viec.netlify.app/">
                                        <button className="demoBtn">Live Demo</button>
                                    </a>
                                    <a href="https://github.com/ikpak/Week-6-It-Viec">
                                        <button>GitHub</button>
                                    </a>
                                </span>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="card thirdCard" style={{border: 'none'}}>
                            <Card.Img src="../movieapp.png" className="cardImg" />
                            <Card.Body className="cardBody">
                                <h3>MOVIE APP</h3>
                                <p>A movie browser app that displays movie ratings and other information.</p>
                                <span>
                                    <a href="https://week-4-movie-app.netlify.app/">
                                        <button className="demoBtn">Live Demo</button>
                                    </a>
                                    <a href="https://github.com/ikpak/Week-4-Movie-App">
                                        <button>GitHub</button>
                                    </a>
                                </span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card fourthCard" style={{border: 'none'}}>
                            <Card.Img src="../weatherapp.png" className="cardImg" />
                            <Card.Body className="cardBody">
                                <h3>WEATHER APP</h3>
                                <p>Weather forecast for cities all over the world.</p>
                                <span>
                                    <a href="https://week-4-weather-app.netlify.app/">
                                        <button className="demoBtn">Live Demo</button>
                                    </a>
                                    <a href="https://github.com/ikpak/Week-4-Weather-App">
                                        <button>GitHub</button>
                                    </a>
                                </span>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
