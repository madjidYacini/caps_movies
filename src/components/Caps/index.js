import React, { Component } from 'react';
import './caps.css'

export default class Caps extends Component{
    render() {
        var divStyle = {
            backgroundImage: 'url(' + this.props.img + ')'
        };
        return(
            <div id="caps">
                <div className="cards__item">
                    <div className="card">
                        <div className="card__image" style={divStyle}></div>
                            <div className="card__content">
                            <div className="card__title">{this.props.name}</div>
                            
                            <div className="social-buttons">
                                <a href="" className="social-button facebook"><i className="fa fa-share-alt"></i></a>
                                <a href="" className="social-button twitter"><i className="fa fa-star"></i></a>
                                <a href="" className="social-button google"><i className="fa fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            
        );
    } 
}

