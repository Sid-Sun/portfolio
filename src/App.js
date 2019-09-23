import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/brands.min.css'
import '@fortawesome/fontawesome-free/css/solid.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
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
