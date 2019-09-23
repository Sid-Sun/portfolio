import React, {PureComponent} from 'react';
import './home.css'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {NavLink} from 'react-router-dom'

export default class Home extends PureComponent {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="home">
                <div className="text-black-75 py-lg-5 py-3" id="home-intro">
                    <div className="text-center">
                        <Container className="text-center align-content-center">
                            <Row>
                                <Col lg className="order-lg-2 mb-3 mt-0">
                                    <img src="https://avatars0.githubusercontent.com/u/22845347?s=460&v=4"
                                         className="rounded-circle w-lg-75 w-sm-75 img-fluid" width="auto" height="auto"
                                         alt="Sid Sun"/>
                                </Col>
                                <Col lg className="mt-md-4 order-lg-1">
                                    <div className="container text-lg-left text-md-center">
                                        <h1 className="mb-1 ">{/*text-theme-secondary*/}
                                            Hi, I'm Sid Sun
                                        </h1>
                                        <span
                                            className="form-row justify-content-center justify-content-lg-start social-icon-group">
                                            <a href="https://github.com/sid-sun" className="nav-link">
                                                <i className="fab fa-github md-24 social-icon"/>
                                            </a>
                                            <a href="https://www.instagram.com/realsidsun" className="nav-link">
                                                <i className="fab fa-instagram md-24 social-icon"/>
                                            </a>
                                            <a href="https://www.linkedin.com/in/sidharth-soni-3a47b0164"
                                               className="nav-link">
                                                <i className="fab fa-linkedin md-24 social-icon"/>
                                            </a>
                                            <a href="https://medium.sidsun.com/" className="nav-link">
                                                <i className="fab fa-medium md-24 social-icon"/>
                                            </a>
                                            <a href="https://twitter.com/realSidSun" className="nav-link">
                                                <i className="fab fa-twitter md-24 social-icon"/>
                                            </a>
                                        </span>
                                        <p className="lead mb-1">
                                            Otherwise known as Sidharth Soni
                                        </p>
                                        <p className="lead mb-2">
                                            Student | Software Developer | Writer
                                        </p>
                                        <p className="lead mb-3">
                                            {/*Welcome to my portfolio! <br/>*/}
                                            I am an university student, a software developer who's worked in multiple
                                            domains like web, CLI programs, automation, etc. I also write on several topics on
                                            Medium!
                                            {/*I'm a flamingo that goes absolutely burst as soon as it sees a helium*/}
                                            {/*molecule within the range of 3 KM*/}
                                            {/*with an abnormal sense of helium detection which has been empowering my body*/}
                                            {/*since the last 1400 years*/}
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
                                I am passionate about developing software that has wide applications and is appreciated
                                by its users not only for doing the job well but also for keeping their privacy intact
                                without being inconvenient. <br/>I encourage software that protects user's privacy and
                                does not collect or use any data that it does not need in order for it to be useful.
                                Therefore, I apply my knowledge, skill, experience, problem solving methods and beliefs
                                to develop software that protects the user's privacy and which is cleanly implemented
                                with the right set of tools.
                            </p>
                            <p className="lead">
                                The only thing that can stop you from achieving your objectives is your unwillingness to
                                try. <br/> - Yours Truly
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
                                Doing software development and collaborating allow me to learn and grow further than my
                                curricular activities could while developing my abilities to work in teams. Writing
                                helps me collect and evolve my thoughts, it also allows me to prioritize and see things
                                from different perspectives.
                            </p>
                            <p className="lead">
                                Success is not a destination, it is a journey and experience is what guides us through
                                it. <br/> - Yours Truly
                            </p>
                            <h4>
                                Linux Server Administration
                            </h4>
                            <p className="lead">
                                Aside from managing my servers, I volunteer to manage Linux server for open source
                                projects which are used for multiple purposes like automating and configuring continuous
                                (And on demand) building, web hosting, file hosting, providing OTA updates etc. <br/> As
                                a Linux Server Admin I have been entrusted to keep servers running at optimal
                                efficiency, configuring them with the right resources for the purpose and security
                                config. As part of this, I have developed several programs which help server admins do
                                repetitive tasks with less hassle while maintaining best practices.
                            </p>
                            <h4>
                                Frontend Web Development
                            </h4>
                            <p className="lead">
                                As a frontend web developer, I have created, maintained and further developed several
                                websites some for personal purposes like my portfolios, blogs, and some in collaboration
                                with projects which have been adapted by several other projects. <br/> I use modern,
                                clean design philosophies for my frontend projects.
                            </p>
                            <h4>
                                Backend Web Developer
                            </h4>
                            <p className="lead">
                                As a backend web developer, I have developed, adapted and configured several backend
                                systems which use monolithic as well as microservice architecture to work seamlessly
                                with their frontend counterparts using stacks which allow high scalability without
                                manual
                                intervention while being efficient and optimal under less load while being extremely
                                fast under heavy load without compromising on security.
                            </p>
                            <h4>
                                Project Management
                            </h4>
                            <p className="lead">
                                I volunteer to manage some open source projects as a part of which I have been entrusted
                                to select official members for different positions such as maintainers, public
                                relations, community moderators and developers of the team as well as managing resources
                                such as servers, hosting, domains, etc. to keep them functioning optimally.
                            </p>
                            <h4>
                                Systems Architect
                            </h4>
                            <p className="lead">
                                Developing several projects of various domains has taught me what I should use where and
                                how to implement them simply to ensure desired effect without losing on efficiency,
                                performance and ease of use.
                            </p>
                            {/*<h4>*/}
                            {/*    Android Development*/}
                            {/*</h4>*/}
                            {/*<p className="lead">*/}
                            {/*    Prior to finding my interest in developing simple, secure and useful software I had*/}
                            {/*    gotten into development and building of the core android platform which has given me a*/}
                            {/*    good understanding of how many systems work internally and taught me best practices of*/}
                            {/*    how one should implement software in general.*/}
                            {/*</p>*/}
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}
