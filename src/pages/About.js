import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
                A creative individual with high attention to detail, interested
                in working on unique projects with ambitious people.
              </p>
            </div>
            <div className="likesList">
              <h2>Likes:</h2>
              <ul>
                <li>
                  <i className="fas fa-gamepad"></i>
                  <div>Video Games</div>
                </li>
                <li>
                  <i className="fas fa-headphones-alt"></i>
                  <div>Music</div>
                </li>
                <li>
                  <i className="fas fa-paw"></i>
                  <div>Animals</div>
                </li>
                <li>
                  <i className="fas fa-palette"></i>
                  <div>Art</div>
                </li>
                <li>
                  <i class="fas fa-utensils"></i>
                  <div>Food</div>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="aboutImg">
            <img src="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
