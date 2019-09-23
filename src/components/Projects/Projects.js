import React, {PureComponent} from 'react';
import Container from "react-bootstrap/Container";
// import {NavLink} from "react-router-dom";
import Project from "./Project/Project";
import axios from 'axios';

export default class Projects extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                "Sid-Sun/nginx-auto-config",
                "Sid-Sun/Freda",
                "Sid-Sun/portfolio",
                "Sid-Sun/Cosmic-OS.github.io",
                "Sid-Sun/codeMKII",
                "Sid-Sun/ssdWearOut",
                "Sid-Sun/strangeBits",
                "Sid-Sun/cProgramUpdate"
            ],
            done: false,
            dat: []
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (!this.state.done) {
            console.log(this.state.done);
            this.state.projects.map(val => {
                axios.get("https://api.github.com/repos/" + val)
                    .then(res => {
                        let uwu = [];
                        try {
                            uwu = res.data.description.split('//')
                        } catch (e) {
                            throw e;
                        }
                        const newProject = <Project key={res.data.id} name={uwu[0]} description={uwu[1]}
                                                    url={res.data.html_url}/>; //project={val.split('/')[1]}
                        this.setState({
                            dat: [
                                ...this.state.dat,
                                newProject
                            ]
                        });
                        if (this.state.projects.length === this.state.dat.length) {
                            console.log("OK");
                            this.setState({
                                done: true
                            });
                            console.log(this.state.done);
                        }
                    });
                return 0
            });
        }
    }

    render() {
        return (
            <div className="projects">
                <div className="text-black-75 py-3">
                    <Container className="align-content-center">
                        <div>
                            <h2>
                                Projects
                            </h2>
                            <p className="lead">
                                Learning is a continuous process and experience is the best teacher. Therefore, I try to
                                implement everything I learn
                                in projects, which allows me to understand how the implementation works at a much deeper
                                level while creating
                                a reference for when I am in need of it.
                            </p>
                            <p className="lead">
                                "Knowing is not enough; we must apply. Willing is not enough; we must do."
                                <br/>-Johann Wolfgang von Goethe
                            </p>
                            {this.state.dat}
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}
