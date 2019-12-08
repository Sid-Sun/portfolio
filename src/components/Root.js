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

export default class Root extends PureComponent {
    render() {
        return (
            <div className="root">
                <NavigationBar/>
                <div className="w-100" style={{
                    height: '55px'
                }}/>                {/*Shift all content down by 55px to account for navbar height*/}
                <div id="content">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/skills" component={Skills}/>
                        {/*<Route path="/projects/:project" component={ProjectDetails}/>*/}
                        <Route path="/projects" component={Projects}/>
                        <Route path="/policy" component={Policy}/>
                        <Route path="/" component={NotFound}/>
                        {/*<Route path="/socials" render={() => <h1>Socials</h1>}/>*/}
                    </Switch>
                    <Footer />
                    <div className="w-100" style={{
                        height: '56px'
                    }} id="bottom-nav-adj"/>
                </div>
            </div>
        )
    }
}
