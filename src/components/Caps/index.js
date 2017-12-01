import React, { Component } from 'react';
import './caps.css'

export default class Caps extends Component{
    render() {
        return(
            <div>
                <code>{this.props.name}</code>
                <br/>
                <img className="cap-img" src={this.props.img} alt={"Caps of " + this.props.name}/>
            </div>
        );
    } 
}

