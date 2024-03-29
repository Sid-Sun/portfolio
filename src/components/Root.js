import React, { PureComponent } from "react";
import NavigationBar from "./NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Policy from "./Policy";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

export default class Root extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      response: {},
    };
  }

  componentDidMount() {
    if (!this.state.done) {
      axios
        .get("https://cdn.sidsun.com/portfolio-data.json")
        .then((response) => {
          this.setState({
            done: true,
            response: response.data,
          });
        });
    }
  }

  render() {
    return this.state.done ? (
      <div className="root">
        <NavigationBar />
        <div
          className="w-100"
          style={{
            height: "55px",
          }}
        />
        {/*Shift all content down by 55px to account for navbar height*/}
        <div id="content">
          <Routes>
            <Route
              path="/"
              exact={"true"}
              element={<Home data={this.state.response.home} />}
            />
            <Route
              path="/skills"
              element={<Skills data={this.state.response.skills} />}
            />
            {/*<Route path="/projects/:project" component={ProjectDetails}/>*/}
            <Route
              path="/projects"
              element={<Projects data={this.state.response.projects} />}
            />
            <Route path="/policy" element={Policy} />
            <Route path="/" element={NotFound} />
            {/*<Route path="/socials" render={() => <h1>Socials</h1>}/>*/}
          </Routes>
          <Footer />
          <div
            className="w-100"
            style={{
              height: "56px",
            }}
            id="bottom-nav-adj"
          />
        </div>
      </div>
    ) : (
      <div className="d-flex justify-content-center vertical-center-nf">
        <Spinner animation="border" className="mx-auto text-primary" />
      </div>
    );
  }
}
