import React, { Component } from 'react';
import Caps from '../Caps';

// console.log(Caps);

export default class Home extends Component {
     
        render(){
            const caps = require('../data/caps.json');
            console.log(caps);

            const arrayCharacters = caps.map(c => {
                console.log(c);
                return <Caps name={c.movie} img={c.pathcaps}/> ;
            })

            let nb =  Math.floor(Math.random() * arrayCharacters.length);

            return (
                <div>{arrayCharacters[nb]}</div>
            );
        }
    }