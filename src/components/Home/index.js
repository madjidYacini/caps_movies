import React, { Component } from 'react';
import Caps from '../Caps';
import _ from 'lodash';
import Nav from '../Nav';
import './home.css';

// console.log(Caps);

export default class Home extends Component {
     
    render(){
        const caps = require('../data/caps.json');
    
        const arrayCharacters = caps.map(c => {
            console.log(c);
            return <Caps name={c.movie} img={c.pathcaps}/> ;
        })

        return (
            <div id="home">
                <div>
                    <div className="App">
                        <Nav />
                        {this.props.children} 
                    </div>   
                </div>
                <div>{_.sample(arrayCharacters)}</div>
                <div id="footer">
                    <h3> movie finder &copy;2017</h3>
                </div>      
            </div>
        );
    }
}