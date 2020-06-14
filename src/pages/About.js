import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
    return (
        <div className="main">
            <Container className="about">
                <Row>
                    <Col className="aboutText">
                        <h1>ABOUT</h1>
                        <div>
                            <p>
                                Russian-born Korean Full Stack Web Developer based in Vietnam.
                            </p>
                            <p>
                                A creative individual with high attention to detail, 
                                interested in working on unique projects with ambitious people.
                            </p>
                        </div>
                    </Col>
                    <Col className="aboutImg">
                        <img src="" />
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
