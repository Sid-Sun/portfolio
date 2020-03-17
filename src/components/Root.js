import React, {PureComponent} from 'react';
import NavigationBar from "./NavigationBar";
import {Route, Switch} from "react-router-dom";
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
// import ProjectDetails from "./Projects/ProjectDetails/ProjectDetails";
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
            response: {}
        }
    }

    componentDidMount() {
        if (!this.state.done) {
            axios.get("http://cdn.sidsun.com/portfolio-data.json").then(response => {
                this.setState({
                    done: true,
                    response: response.data
                });
            })
        }
    }

    render() {
        return (
            this.state.done ? <div className="root">
                <NavigationBar/>
                <div className="w-100" style={{
                    height: '55px'
                }}/>
                {/*Shift all content down by 55px to account for navbar height*/}
                <div id="content">
                    <Switch>
                        <Route path="/" exact render={(props) => <Home {...props} data={this.state.response.home} />} />
                        <Route path="/skills" render={(props) => <Skills {...props} data={this.state.response.skills} />} />
                        {/*<Route path="/projects/:project" component={ProjectDetails}/>*/}
                        <Route path="/projects" render={(props) => <Projects {...props} data={this.state.response.projects} />}/>
                        <Route path="/policy" component={Policy}/>
                        <Route path="/" component={NotFound}/>
                        {/*<Route path="/socials" render={() => <h1>Socials</h1>}/>*/}
                    </Switch>
                    <Footer/>
                    <div className="w-100" style={{
                        height: '56px'
                    }} id="bottom-nav-adj"/>
                </div>
            </div> : <div className="d-flex justify-content-center vertical-center-nf">
                <Spinner animation="border" className="mx-auto text-primary"/>
            </div>
        )
    }
}
