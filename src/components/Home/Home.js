import React, { PureComponent } from 'react';
import './home.css'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom'
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

export default class Home extends PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { intro, objective, experience } = this.props.data;
        return (
            <React.Fragment>
                <Helmet>
                    <title>Portfolio - Sid Sun</title>
                    <meta
                        name="description"
                        content="Sid Sun (Sidharth Soni)'s Portfolio"
                    />
                </Helmet>
                <div id="home">
                    <div className="text-black-75 py-lg-5 py-3" id="home-intro">
                        <div className="text-center">
                            <Container className="text-center align-content-center">
                                <Row>
                                    <Col lg className="order-lg-2 mb-3 mt-0">
                                        <img src="https://avatars0.githubusercontent.com/u/22845347?s=460&v=4"
                                            className="rounded-circle w-lg-75 w-sm-75 img-fluid" width="auto"
                                            height="auto"
                                            alt="Sid Sun" />
                                    </Col>
                                    <Col lg className="mt-md-4 order-lg-1">
                                        <div className="container text-lg-left text-md-center">
                                            <h1 className="mb-1 ">{/*text-theme-secondary*/}
                                                {intro.greeting}
                                            </h1>
                                            <span
                                                className="form-row justify-content-center justify-content-lg-start social-icon-group">
                                                <a href="https://github.com/sid-sun" className="nav-link pl-lg-1">
                                                    <i className="fab fa-github md-24 social-icon" />
                                                </a>
                                                <a href="https://www.linkedin.com/in/sidharth-soni-3a47b0164"
                                                    className="nav-link">
                                                    <i className="fab fa-linkedin md-24 social-icon" />
                                                </a>
                                                <a href="https://medium.sidsun.com/" className="nav-link">
                                                    <i className="fab fa-medium md-24 social-icon" />
                                                </a>
                                                <a href="mailto:sid@sidsun.com" className="nav-link">
                                                    <i className="fas fa-envelope md-24 social-icon" />
                                                </a>
                                            </span>
                                            <p className="lead mb-1">
                                                Otherwise known as Sidharth Soni
                                            </p>
                                            <p className="lead mb-2">
                                                {intro.roles}
                                            </p>
                                            <p className="lead mb-3">
                                                {/*Welcome to my portfolio! <br/>*/}
                                                {intro.about}
                                            </p>
                                            <Row className="mx-n2" id="explore-btns">
                                                <div className="col-md px-2">
                                                    {/*<a dataNavSection*/}
                                                    {/*         className="btn btn-lg btn-outline-primary w-100 mb-3">*/}
                                                    {/*    Find out more*/}
                                                    {/*</a>*/}
                                                    <NavLink to="/skills"
                                                        className="btn btn-lg btn-outline-primary w-100 mb-3">
                                                        Find out more
                                                    </NavLink>
                                                </div>
                                                <div className="col-md px-2">
                                                    <NavLink to="/projects"
                                                        className="btn btn-lg btn-outline-secondary w-100 mb-3">
                                                        Checkout my projects!
                                                    </NavLink>
                                                </div>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className="text-black-75 py-5" id="objective">
                        <Container className="align-content-center">
                            <div>
                                <h2>
                                    Objective
                                </h2>
                                <p className="lead">
                                    {objective.text.map((text, index) => {
                                        if (index === objective.text.length - 1) {
                                            return text
                                        } else {
                                            return <React.Fragment key={index}>
                                                {text}
                                                <br />
                                            </React.Fragment>
                                        }
                                    })}
                                </p>
                                <p className="lead">
                                    {objective.quote.text}
                                    <br /> - {objective.quote.by}
                                </p>
                            </div>
                        </Container>
                    </div>
                    <div className="text-black-75 py-5" id="experience">
                        <Container className="align-content-center">
                            <div>
                                <h2>
                                    Experience
                                </h2>
                                <p className="lead">
                                    {experience.intro.text.map((text, index) => {
                                        if (index === experience.intro.text.length - 1) {
                                            return text
                                        } else {
                                            return <React.Fragment index>
                                                {text}
                                                <br />
                                            </React.Fragment>
                                        }
                                    })}
                                </p>
                                <p className="lead">
                                    {experience.intro.quote.text}
                                    <br /> - {experience.intro.quote.by}
                                </p>
                                {experience.experiences.map((experience, index) => {
                                    return <React.Fragment key={index}>
                                        <h4> {experience.title} </h4>
                                        <p className="lead">
                                            {experience.text.map((text, index) => {
                                                if (index === experience.text.length - 1) {
                                                    return text
                                                } else {
                                                    return <React.Fragment key={index}>
                                                        {text}
                                                        <br />
                                                    </React.Fragment>
                                                }
                                            })}
                                        </p>
                                    </React.Fragment>
                                })}
                            </div>
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Home.propTypes = {
    data: PropTypes.shape({
        intro: PropTypes.shape({
            greeting: PropTypes.string.isRequired,
            roles: PropTypes.string.isRequired,
            about: PropTypes.string.isRequired
        }).isRequired,
        objective: PropTypes.shape({
            text: PropTypes.arrayOf(PropTypes.string).isRequired,
            quote: PropTypes.shape({
                text: PropTypes.string.isRequired,
                by: PropTypes.string.isRequired
            }).isRequired
        }).isRequired,
        experience: PropTypes.shape({
            intro: PropTypes.shape({
                text: PropTypes.arrayOf(PropTypes.string).isRequired,
                quote: PropTypes.shape({
                    text: PropTypes.string.isRequired,
                    by: PropTypes.string.isRequired
                }).isRequired
            }),
            experiences: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string.isRequired,
                text: PropTypes.arrayOf(PropTypes.string).isRequired,
            }).isRequired).isRequired
        }).isRequired,
    }).isRequired
}
