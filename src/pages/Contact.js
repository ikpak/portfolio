import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Contact() {
    return (
        <div className="main">
            <Container className="contactCont">
                <Col className="contactCol">
                    <h1>CONTACT</h1>
                    <ul>
                        <li>
                            <span>
                                <i class="fas fa-map-marker-alt"></i>
                                Ho Chi Minh City, Vietnam
                            </span>
                        </li>
                        <li>
                            <span>
                                <i class="fas fa-envelope"></i>
                                inkha.pak@gmail.com
                            </span>
                        </li>
                        <li>
                            <span>
                                <i class="fas fa-phone"></i>
                                +84 36 230 2130
                            </span>
                        </li>
                    </ul>
                </Col>
            </Container>
            
        </div>
    )
}
