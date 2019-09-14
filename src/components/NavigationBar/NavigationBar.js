import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container";

import './NavigationBar.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class NavigationBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar expand="md" variant="light" className="bg-pink" fixed="top" id="top-navbar">
                    <Container>
                        <Navbar.Brand>
                            <NavLink to="/">Sid Sun</NavLink>
                        </Navbar.Brand>
                        {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Item>
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/skills" className="nav-link">Skills</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/projects" className="nav-link">Projects</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/socials" className="nav-link">Socials</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Navbar bg="light" fixed="bottom" className="align-content-center justify-content-center" id="bottom-navbar">
                    <Row>
                        <Col>
                            <NavLink to="/" exact activeClassName="md-active" className="nav-link">
                                <i className="material-icons md-24 md-dark">
                                    home
                                </i>
                            </NavLink>
                        </Col>
                        <Col>
                            <NavLink to="/skills" activeClassName="md-active" className="nav-link">
                                <i className="material-icons md-24 md-dark" id="skill">
                                    school
                                </i>
                            </NavLink>
                        </Col>
                        <Col>
                            <NavLink to="/projects" activeClassName="md-active" className="nav-link">
                                <i className="material-icons md-24 md-dark">
                                    code
                                </i>
                            </NavLink>
                        </Col>
                        <Col>
                            <NavLink to="/socials" activeClassName="md-active" className="nav-link">
                                <i className="material-icons md-24 md-dark">
                                    group
                                    {/*emoji_emotions*/}
                                </i>
                            </NavLink>
                        </Col>
                    </Row>
                </Navbar>
            </React.Fragment>
        )
    }
}
