import React from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Nav  from './components/Nav';
import Gallery from './components/Gallery'

const MyRoute = () => (
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/gallery" component={Gallery} />
            </Switch>
        </App>
    </Router>
);


export default MyRoute;