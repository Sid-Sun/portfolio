import React, {PureComponent} from 'react';
import Container from "react-bootstrap/Container";
import {Helmet} from "react-helmet";
import './Skills.css'
import ListGroup from "react-bootstrap/ListGroup";
import {NavLink} from "react-router-dom";
import axios from "axios";

export default class Skills extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            languages: [],
            frameworks: [],
            tools: [],
            fetched: false,
            done: false,
            response: {}
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (!this.state.done) {
            axios.get("https://cdn.sidsun.com/skills.json").then(response => {
                console.log(response);
                this.setState({
                    fetched: true,
                    done: true,
                    response: response.data,
                    // languages: response.data.languages,
                    // frameworks: response.data.frameworks,
                    // tools: response.data.tools
                });
                response.data.languages.map((val, index) => {
                    const newSkill = <ListGroup.Item className="styles-list-item" as="li"
                                                     key={index}>{val}</ListGroup.Item>;
                    this.setState({
                        languages: [
                            ...this.state.languages,
                            newSkill
                        ]
                    });
                    return 0
                });
                response.data.frameworks.map((val, index) => {
                    const newSkill = <ListGroup.Item className="styles-list-item" as="li"
                                                     key={index}>{val}</ListGroup.Item>;
                    this.setState({
                        frameworks: [
                            ...this.state.frameworks,
                            newSkill
                        ]
                    });
                    return 0
                });
                response.data.tools.map((val, index) => {
                    const newSkill = <ListGroup.Item className="styles-list-item" as="li"
                                                     key={index}>{val}</ListGroup.Item>;
                    this.setState({
                        tools: [
                            ...this.state.tools,
                            newSkill
                        ]
                    });
                    return 0
                })
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Skills - Sid Sun</title>
                    <meta
                        name="description"
                        content="Sid Sun (Sidharth Soni)'s Skills"
                    />
                </Helmet>
                <div className="skills">
                    <div className="text-black-75 py-3">
                        <Container className="align-content-center">
                            <div>
                                <h2>
                                    Skills
                                </h2>
                                <p className="lead">
                                    I work on various types of projects at different levels with the right set of tools
                                    which allows me to develop
                                    a lot of unique and generic skills and be flexible. Maintaining and further
                                    developing
                                    the projects allow me to keep practicing.
                                    <br/>
                                    To get a deeper understanding of how things work, I create projects, find
                                    them <NavLink
                                    to="/projects">here</NavLink>.
                                </p>
                                {/*Add a nice quote below:*/}
                                <p className="lead">
                                    "It's all to do with the training: you can do a lot if you're properly
                                    trained." <br/> -
                                    Queen Elizabeth II
                                </p>
                            </div>
                        </Container>
                    </div>
                    <div className="text-black-75 py-5">
                        <Container className="align-content-center">
                            <div>
                                <h2>
                                    Programming Languages
                                </h2>
                                <p className="lead">
                                    I like to think of programming languages as being an interface to the logic, with
                                    each
                                    one being well
                                    suited for tasks they were intended to be used for, you have to use the one which is
                                    appropriate for the project.
                                </p>
                                <p className="lead">
                                    I try to employ the best practices and use the latest versions and specs of all the
                                    programming languages I learn.
                                </p>
                                <ListGroup variant="flush" as="ul">
                                    <ListGroup.Item style={{
                                        border: 0,
                                    }} className="styles-list-item bg-pink text-white rounded-lg" as="li">What I
                                        know:</ListGroup.Item>
                                    {this.state.done ? this.state.languages :
                                        <ListGroup.Item className="styles-list-item"
                                                        as="li">Loading....</ListGroup.Item>
                                    }
                                </ListGroup>
                            </div>
                        </Container>
                    </div>
                    <div className="tableView text-black-75 py-5">
                        <Container className="align-content-center">
                            <div>
                                <h2>
                                    Frameworks and Libraries
                                </h2>
                                <p className="lead">
                                    To cleanly implement a solution, frameworks and libraries play a vital role in
                                    development, they facilitate KISS design principles while keeping the code clean and
                                    simple. Reducing development time and complexity while increasing efficiency and
                                    promoting best practices.
                                </p>
                                <p className="lead">
                                    "Simplicity is the key to Brilliance." <br/> - Bruce Lee
                                </p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{
                                        border: 0,
                                    }} className="styles-list-item bg-pink text-white rounded-lg" as="li">What I
                                        know:</ListGroup.Item>
                                    {this.state.done ? this.state.frameworks :
                                        <ListGroup.Item className="styles-list-item"
                                                        as="li">Loading....</ListGroup.Item>
                                    }
                                </ListGroup>
                            </div>
                        </Container>
                    </div>
                    <div className="text-black-75 py-5">
                        <Container className="align-content-center">
                            <div>
                                <h2>
                                    Development and Deployment Tools
                                </h2>
                                <p className="lead">
                                    {/*writing clean, efficient and maintainable code.*/}
                                    These tools are crucial in making it faster and easier to develop, deploy and
                                    maintain
                                    software. <br/>
                                    These diverse set of tools and services go a long way towards making projects more
                                    streamlined and in
                                    finding and fixing bugs while saving time by automating parts of the software
                                    development process.
                                </p>
                                <p className="lead">
                                    Using these tools makes it easier to implement industry-standard development
                                    processes
                                    and in following the
                                    best practices to write and maintain code.
                                </p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{
                                        border: 0,
                                    }} className="styles-list-item bg-pink text-white rounded-lg" as="li">What I
                                        know:</ListGroup.Item>
                                    {this.state.done ? this.state.tools :
                                        <ListGroup.Item className="styles-list-item"
                                                        as="li">Loading....</ListGroup.Item>
                                    }
                                </ListGroup>
                            </div>
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
