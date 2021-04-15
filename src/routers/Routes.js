import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { Home } from '../components/Home';
import { Genres } from '../components/Genres';


export const Routes = () => {
    return (
        
        <Router>
            <>
            <Navbar />
            <div className="container mt-2">

                <Switch>
                    <Route exact path="/home" component={ Home } />
                    <Route exact path="/genres" component={ Genres } />

                    <Route  path="/" component={ Home } />


                </Switch>
            </div>
            </>
        </Router>
       
    )
}

