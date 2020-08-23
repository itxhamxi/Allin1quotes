import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Nav from "./components/Nav.js"
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contactus from './Pages/Contactus.js';

function App() {
    return (
        <Router>
            <div className="App">

                <Nav/>
                <Switch>
                    <Route exact="exact" path="/" component={Home}/>
                    <Route exact="exact" path="/home" component={Home}/>
                    <Route exact="exact" path="/about" component={About}/>
                    <Route exact="exact" path="/contactus" component={Contactus}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
