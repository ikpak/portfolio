import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="nav">
            <Col>
                <Row className="logoRow">
                    <NavLink 
                        to="/" 
                        style={{
                            color: '#04BFAD', 
                            textDecoration: 'none'
                        }}>
                            IP
                    </NavLink>
                </Row>
                <Row className="navIcons">
                    <ul>
                        <li>
                            <NavLink 
                                to="/home" 
                                style={{textDecoration: 'none'}} 
                                className="navIcon"
                                activeStyle={{color: '#D507D9'}}
                            >
                                <i className="fas fa-home"></i>
                                <div>Home</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                style={{textDecoration: 'none'}} 
                                className="navIcon"
                                activeStyle={{color: '#D507D9'}}
                            >
                                <i className="fas fa-user"></i>
                                <div>About</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/skills" 
                                style={{textDecoration: 'none'}} 
                                className="navIcon"
                                activeStyle={{color: '#D507D9'}}
                            >
                                <i className="fas fa-cogs"></i>
                                <div>Skills</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/projects" 
                                style={{textDecoration: 'none'}} 
                                className="navIcon"
                                activeStyle={{color: '#D507D9'}}
                            >
                                <i className="fas fa-briefcase"></i>
                                <div>Projects</div>
                            </NavLink>
                        </li>
                        <li className="contactListItem">
                            <NavLink 
                                to="/contact" 
                                style={{textDecoration: 'none'}} 
                                className="navIcon"
                                activeStyle={{color: '#D507D9'}}
                            >
                                <i className="fas fa-envelope"></i>
                                <div>Contact</div>
                            </NavLink>
                        </li>
                    </ul>
                </Row>
                <Row className="mediaIcons">
                    <ul>
                        <li>
                            <a href="https://github.com/ikpak">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/inkha-pak/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </Row>
            </Col>
        </div>
    )
}
