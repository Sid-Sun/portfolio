import React, { Component } from 'react';
import NavigationBar from "./NavigationBar/NavigationBar";
import {Route, Switch} from "react-router-dom";


export default class Root extends Component {
  render() {
    return (
      <div className="root">
        <NavigationBar/>
        <div className="w-100" style={{
            height: '61px'
        }}/> {/*Shift all content down by 61px to account for navbar height*/}
        <Switch>
          <Route path="/" exact render={() => <h1>HOME</h1>}/>
          <Route path="/skills" render={() => <h1>Skills</h1>}/>
          <Route path="/projects" render={() => <h1>Projects</h1>}/>
          <Route path="/socials" render={() => <h1>Socials</h1>}/>
        </Switch>
      </div>
    )
  }
}
