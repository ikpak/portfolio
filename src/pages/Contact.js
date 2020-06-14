import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Contact() {
    return (
        <div className="main">
            <Container className="contactCont">
                <Col className="contactCol">
                    <Row className="contactTitle">
                        <h1>CONTACT</h1>
                    </Row>
                    <Row className="user">
                        <input type="text" placeholder="Name:" className="nameInput" />
                        <input type="email" placeholder="Email:" />
                    </Row>
                    <Row className="subject">
                        <input type="text" placeholder="Subject:" />
                    </Row>
                    <Row className="message">
                        <input type="text" placeholder="Message:" />
                    </Row>
                    <Row className="submitBtn">
                        <button>SUBMIT</button>
                    </Row>
                </Col>
            </Container>
            
        </div>
    )
}
