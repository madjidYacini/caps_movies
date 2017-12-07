import React from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';

import Home from './components/Home';
import Nav  from './components/Nav';
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import Sign from './components/Sign';


const MyRoute = () => (
    
    <Router>
       
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/gallery" component={Gallery} />   
                <Route  path="/profile" component={Profile} /> 
                <Route  path="/sign" component={Sign} /> 
            </Switch>
   
    </Router>
    
    
   
);


export default MyRoute;