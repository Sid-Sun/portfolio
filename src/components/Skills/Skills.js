import React, { PureComponent } from 'react';
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";
import './Skills.css'
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from 'prop-types';

export default class Skills extends PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { intro, skills } = this.props.data;
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
                                    {intro.text.map((text, index) => {
                                        if (index === intro.text.length - 1) {
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
                                    {intro.quote.text} <br /> -
                                    {intro.quote.by}
                                </p>
                            </div>
                        </Container>
                    </div>
                    {
                        skills.map((skillset, index) => {
                            return <div className="text-black-75 py-5" key={index}>
                                <Container className="align-content-center">
                                    <div>
                                        <h2>
                                            {skillset.title}
                                        </h2>
                                        <p className="lead">
                                            {skillset.text.map((text, index) => {
                                                if (index === skillset.text.length - 1) {
                                                    return text
                                                } else {
                                                    return <React.Fragment key={index}>
                                                        {text}
                                                        <br />
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

Skills.propTypes = {
    data: PropTypes.shape({
        intro: PropTypes.shape({
            text: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            quote: PropTypes.shape({
                text: PropTypes.string.isRequired,
                by: PropTypes.string.isRequired
            }).isRequired
        }).isRequired,
        skills: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            table: PropTypes.shape({
                title: PropTypes.string.isRequired,
                list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
            }).isRequired
        }).isRequired).isRequired
    }).isRequired
}
