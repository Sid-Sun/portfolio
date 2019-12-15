import React, {PureComponent} from 'react';
import Container from "react-bootstrap/Container";
// import {NavLink} from "react-router-dom";
import Project from "./Project/Project";
import axios from 'axios';
import Spinner from "react-bootstrap/Spinner";
import {Helmet} from "react-helmet";

export default class Projects extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            fetchedProjects: false,
            done: false,
            dat: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (!this.state.done) {
            axios.get("https://cdn.sidsun.com/projects.json").then(res1 => {
                this.setState({
                    fetchedProjects: true,
                    projects: res1.data
                });
                axios.get("https://api.github.com/users/sid-sun/repos").then(res => {
                    res.data.map(val => {
                        if (this.state.done) {
                            return 0
                        }
                        if (this.state.projects.includes(val.full_name)) {
                            let uwu = [];
                            try {
                                uwu = val.description.split('//')
                            } catch (e) {
                                throw e;
                            }
                            const newProject = <Project key={val.id} name={uwu[0]} description={uwu[1]}
                                                        url={val.html_url}/>; //project={val.split('/')[1]}
                            this.setState({
                                dat: [
                                    ...this.state.dat,
                                    newProject
                                ]
                            });
                        }
                        if (this.state.projects.length === this.state.dat.length) {
                            console.log("All projects have been fetched and properly added to list!");
                            this.setState({
                                done: true
                            });
                        }
                        return 0
                    });
                })
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Projects - Sid Sun</title>
                    <meta
                        name="description"
                        content="Sid Sun (Sidharth Soni)'s Projects"
                    />
                </Helmet>
                <div className="projects">
                    <div className="text-black-75 py-3">
                        <Container className="align-content-center">
                            <div>
                                <h2>
                                    Projects
                                </h2>
                                <p className="lead">
                                    Learning is a continuous process and experience is the best teacher. Therefore, I
                                    try to
                                    implement everything I learn
                                    in projects, which allows me to understand how the implementation works at a much
                                    deeper
                                    level while creating
                                    a reference for when I am require it.
                                </p>
                                <p className="lead">
                                    "Knowing is not enough; we must apply. Willing is not enough; we must do."
                                    <br/>-Johann Wolfgang von Goethe
                                </p>
                                {this.state.done ? this.state.dat :
                                    <div className="d-flex justify-content-center">
                                        <Spinner animation="border" className="mx-auto text-orange"/>
                                    </div>
                                }
                            </div>
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
