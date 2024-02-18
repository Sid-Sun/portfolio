import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "./NavigationBar.css";
// import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class NavigationBar extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Navbar
          expand="md"
          variant="light"
          className="bg-pink"
          fixed="top"
          id="top-navbar"
        >
          <Container>
            <Navbar.Brand>
              {/*Sid Sun // Portfolio*/}
              <NavLink to="/" className="no-outline">
                Sid Sun // Portfolio
              </NavLink>
            </Navbar.Brand>
            {/*<Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggle">*/}
            {/*    <i className="material-icons">*/}
            {/*        menu*/}
            {/*    </i>*/}
            {/*</Navbar.Toggle>*/}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <NavLink to="/" className="nav-link no-outline">
                    Home
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/skills" className="nav-link no-outline">
                    Skills
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/projects" className="nav-link no-outline">
                    Projects
                  </NavLink>
                </Nav.Item>
                {/*<Nav.Item>*/}
                {/*    <NavLink to="/socials" className="nav-link">Socials</NavLink>*/}
                {/*</Nav.Item>*/}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar
          bg="light"
          fixed="bottom"
          className="align-content-center justify-content-center"
          id="bottom-navbar"
        >
          <Row className="align-content-center justify-content-center text-center">
            <NavLink
              to="/"
              exact="true"
              className={({ isActive }) =>
                [
                  isActive ? "md-active" : "",
                  "nav-link col-4 align-self-center",
                ].join(" ")
              }
            >
              <i className="fas fa-home md-18 md-dark" />
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                [
                  isActive ? "md-active" : "",
                  "nav-link col-4 align-self-center",
                ].join(" ")
              }
            >
              <i className="fas fa-pencil-ruler md-18 md-dark" />
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                [
                  isActive ? "md-active" : "",
                  "nav-link col-4 align-self-center",
                ].join(" ")
              }
            >
              <i className="fas fa-code md-18 md-dark" />
            </NavLink>
          </Row>
        </Navbar>
      </React.Fragment>
    );
  }
}
