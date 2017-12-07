import React, { Component } from 'react';
import Caps from '../Caps';
import Nav  from '../Nav';


export default class Gallery extends Component {

    constructor(){
        console.log('bbbbb');
        super();

        this.state = {
            caps: []
        } 
        
    }
    
    componentDidMount() {
        this._fetchCaps();
    }


    render(){
        console.log('render');
        const arrCaps = this.state.caps.map((c, idx) => {
            return <Caps name={c.movie} img={c.pathcaps} key={idx}/> ;
        })

        return (
            <div>
                <Nav />
                <div>{arrCaps}</div>
            </div>
        );
    }

    _fetchCaps() {

        let arrayInfo = require('../data/caps.json');
        this.setState({ caps: arrayInfo});
    }
}