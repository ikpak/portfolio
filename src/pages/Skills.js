import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Skills() {
    return (
        <div className="main">
            <Container className="skills">
                <Row>
                    <Col className="skillsCol">
                        <div>
                            <h1>SKILLS</h1>
                            <div className="languageList">
                                <h2>Communication:</h2>
                                <ul>
                                    <li>Russian</li>
                                    <li>|</li>
                                    <li>Japanese</li>
                                    <li>|</li>
                                    <li>English</li>
                                </ul>
                            </div>
                            <div className="programmingList">
                                <h2>Programming:</h2>
                                <ul>
                                    <li className="programmingLang htmlIcon">
                                        <i class="fab fa-html5"></i>
                                        <div>HTML</div>
                                    </li>
                                    <li className="programmingLang cssIcon">
                                        <i class="fab fa-css3-alt"></i>
                                        <div>CSS</div>
                                    </li>
                                    <li className="programmingLang javaScriptIcon">
                                        <i class="fab fa-js-square"></i>
                                        <div>JavaScript</div>
                                    </li>
                                    <li className="programmingLang reactIcon">
                                        <i class="fab fa-react"></i>
                                        <div>React JS</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="toolList">
                                <h2>Design Tools:</h2>
                                <ul>
                                    <li className="adobeIcon">
                                        <i class="fab fa-adobe"></i>
                                        <div>XD / Illustrator</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col className="experienceCol">
                        <div>
                            <h1>EXPERIENCE</h1>
                            <div className="workList">
                                <h2>Work:</h2>
                                <ul>
                                    <li>
                                        <h3>Web Director</h3>
                                        <h4>GONOSEN Inc. | Vietnam</h4>
                                        <p>December 2018 - January 2020</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="educationList">
                                <h2>Education:</h2>
                                <ul>
                                    <li>
                                        <h3>Fashion Design & Pattern Certificate</h3>
                                        <h4>Vantan Design Institute | Japan</h4>
                                        <p>March 2018</p>
                                    </li>
                                    <li>
                                        <h3>International Baccalaureate Diploma</h3>
                                        <h4>Cebu International School | Philippines</h4>
                                        <p>May 2016</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            
        </div>
    )
}