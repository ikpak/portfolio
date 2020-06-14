import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Projects() {
    return (
        <div className="main">
            <Container className="projectContainer">
                <h1 className="projectsTitle">PAST PROJECTS</h1>
                <div className="projectList">
                    <Card className="project chocobo">
                        <a href="https://week-2-monster-catch.netlify.app/">
                            <Card.Img src="../chocobo.png" className="projectImg" />
                        </a>
                    </Card>
                    <Card className="project itViec">
                        <a href="https://week-6-it-viec.netlify.app/">
                            <Card.Img src="../itViec.png" className="projectImg" />
                        </a>
                    </Card>
                    <Card className="project movieApp">
                        <a href="https://week-4-movie-app.netlify.app/">
                            <Card.Img src="../movieApp.png" className="projectImg" />
                        </a>
                    </Card>
                    <Card className="project weatherApp">
                        <a href="https://week-4-weather-app.netlify.app/">
                            <Card.Img src="../weatherApp.png" className="projectImg" />
                        </a>
                    </Card>
                </div>
            </Container>
        </div>
    )
}
