import React, { PureComponent } from 'react';
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

export default class ProjectDetails extends PureComponent {

  render() {
    return (
      <div className="project-details">
        <div className="text-white py-lg-5 py-3 bg-pink">
          <div className="text-center">
            <Container className="text-center align-content-center py-4">
              <h1 className="mb-1 ">{/*text-theme-secondary*/}
                Freda
              </h1>
              <p className="lead mb-1 w-lg-75 mx-lg-auto">
                A telegam bot which reads messages from a channel and stores them in a postgresql database, is superfast and concurrent
              </p>
            </Container>
          </div>
        </div>
        <div className="tableView text-black-75 py-5">
          <Container className="align-content-center">
            <div>
              <h2>
                Objective
              </h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="lead">
                "The only thing that can stop you from achieving your objectives is your unwillingness to try." <br/> - Yours Truly
              </p>
            </div>
          </Container>
        </div>
        <div className="tableView text-black-75 py-5">
          <Container className="align-content-center">
            <div>
              <h2>
                Stack
              </h2>
              <p className="lead">
                They were intended to be used for, you have to use the one which is
                appropriate for the project.
              </p>
              {/*<p className="lead">*/}
              {/*  I try to employ the best practices and use the latest versions and specs of all the*/}
              {/*  programming languages I learn.*/}
              {/*</p>*/}
              <ListGroup variant="flush" as="ul">
                <ListGroup.Item style={{
                  border: 0,
                }} className="styles-list-item bg-pink text-white rounded-lg" as="li">What was used:</ListGroup.Item>
                <ListGroup.Item className="styles-list-item" as="li">C</ListGroup.Item>
                <ListGroup.Item className="styles-list-item" as="li">C++</ListGroup.Item>
                <ListGroup.Item className="styles-list-item" as="li">GoLang (Go)</ListGroup.Item>
                <ListGroup.Item className="styles-list-item" as="li">JavaScript</ListGroup.Item>
                <ListGroup.Item className="styles-list-item" as="li">Python</ListGroup.Item>
              </ListGroup>
            </div>
          </Container>
        </div>
      </div>
    )
  }
}
