import React, {PureComponent} from 'react';
import Container from "react-bootstrap/Container";
import {Helmet} from "react-helmet";
import './Skills.css'
import ListGroup from "react-bootstrap/ListGroup";
// import {NavLink} from "react-router-dom";
// import axios from "axios";

export default class Skills extends PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0);
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
                                    {this.props.data.intro.text.map((text, index) => {
                                        if (index === this.props.data.intro.text.length -1) {
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
                                    {this.props.data.intro.quote.text} <br/> -
                                    {this.props.data.intro.quote.by}
                                </p>
                            </div>
                        </Container>
                    </div>
                    {
                        this.props.data.skills.map((skillset, index) => {
                            return <div className="text-black-75 py-5" key={index}>
                                <Container className="align-content-center">
                                    <div>
                                        <h2>
                                            {skillset.title}
                                        </h2>
                                        <p className="lead">
                                            {skillset.text.map((text, index) => {
                                                if (index === skillset.text.length -1) {
                                                    return text
                                                } else {
                                                    return <React.Fragment key={ index }>
                                                        {text}
                                                        <br/>
                                                    </React.Fragment>
                                                }
                                            })}
                                        </p>
                                        <ListGroup variant="flush" as="ul">
                                            <ListGroup.Item style={{
                                                border: 0,
                                            }} className="styles-list-item bg-pink text-white rounded-lg" as="li">{skillset.table.title}</ListGroup.Item>
                                            {
                                                skillset.table.list.map((skill, index) => {
                                                    return <ListGroup.Item className="styles-list-item" as="li"
                                                                           key={index}>{skill}</ListGroup.Item>
                                                })
                                            }
                                        </ListGroup>
                                    </div>
                                </Container>
                            </div>
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}
