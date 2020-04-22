import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

// routes
import Home from './routes/Home.js'
import About from './routes/About.js'
import Facts from './routes/Facts.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const App = () => (
    <div className="App">
        <Router>
            <Navbar/>
            <div className='app-body'>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/facts">
                        <Facts/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
);

export default App;
