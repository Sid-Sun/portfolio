import React, {PureComponent} from 'react';
import Container from "react-bootstrap/Container";
import {NavLink} from "react-router-dom";
// import Nav from "react-bootstrap/Nav";

export default class Footer extends PureComponent {
    render() {
        return (
            <div className="footer">
                <div className="text-black-75 py-2">
                    <Container className="align-content-center">
                        <div>
                            <p className="text-center">
                                — Copyright © 2019 Sid Sun. All Rights Reserved. —
                            </p>
                            <span
                                className="form-row justify-content-center social-icon-group mx-auto">
                              <a href="https://github.com/sid-sun" className="nav-link">
                                <i className="fab fa-github md-24 social-icon"/>
                              </a>
                              <a href="https://www.instagram.com/realsidsun" className="nav-link">
                                <i className="fab fa-instagram md-24 social-icon"/>
                              </a>
                              <a href="https://www.linkedin.com/in/sidharth-soni-3a47b0164" className="nav-link">
                                <i className="fab fa-linkedin md-24 social-icon"/>
                              </a>
                              <a href="https://medium.sidsun.com" className="nav-link">
                                <i className="fab fa-medium md-24 social-icon"/>
                              </a>
                              <a href="https://twitter.com/realSidSun" className="nav-link">
                                <i className="fab fa-twitter md-24 social-icon"/>
                              </a>
                              <a href="mailto:sid@sidsun.com" className="nav-link">
                                  <i className="fas fa-envelope md-24 social-icon"/>
                              </a>
                            </span>
                            <p className="text-center social-icon-group">
                                <NavLink to="/policy" className="social-icon">
                                    Privacy Policy
                                </NavLink>
                            </p>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}
