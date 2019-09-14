import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Root from './components/Root'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Root />
            </div>
        </BrowserRouter>
    );
}

export default App;
