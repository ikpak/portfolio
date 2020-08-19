import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div className="main">
            <Container className="mainVisCont">
                <div className="mainText">
                    <h1>ILONA PAK</h1>
                    <h2>Full Stack Web Developer</h2>
                    <NavLink to="/contact" style={{textDecoration: 'none'}}>
                        <button className="contactBtn">CONTACT</button>
                    </NavLink>
                </div>
            </Container>
        </div>
    )
}
