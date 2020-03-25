import React, {PureComponent} from 'react';
import Container from "react-bootstrap/Container";
import Project from "./Project/Project";
import axios from 'axios';
import Spinner from "react-bootstrap/Spinner";
import {Helmet} from "react-helmet";

export default class Projects extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data.projects,
            done: false,
            projects: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (!this.state.done) {
            axios.get("https://api.github.com/users/sid-sun/repos?per_page=1000").then(res => {
                res.data.map(val => {
                    if (this.state.done) {
                        return 0
                    }
                    if (this.state.data.includes(val.full_name)) {
                        let uwu = [];
                        try {
                            uwu = val.description.split('//')
                        } catch (e) {
                            throw e;
                        }
                        const newProject = <Project key={val.id} name={uwu[0]} description={uwu[1]}
                                                    url={val.html_url}/>; //project={val.split('/')[1]}
                        this.setState({
                            projects: [
                                ...this.state.projects,
                                newProject
                            ]
                        });
                    }
                    if (this.state.data.length === this.state.projects.length) {
                        this.setState({
                            done: true
                        });
                    }
                    return 0
                });
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
                                    {this.props.data.intro.text.map((text, index) => {
                                        if (index === this.props.data.intro.text.length - 1) {
                                            return text
                                        } else {
                                            return <React.Fragment key={ index }>
                                                {text}
                                                <br/>
                                            </React.Fragment>
                                        }
                                    })}
                                </p>
                                <p className="lead">
                                    {this.props.data.intro.quote.text}
                                    <br/> - {this.props.data.intro.quote.by}
                                </p>
                                {this.state.done ? this.state.projects :
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
