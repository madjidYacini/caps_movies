import React, { Component } from 'react';
import Caps from '../Caps';
import _ from 'lodash';
import Nav from '../Nav';
import './home.css';
import axios from 'axios'

// console.log(Caps);

export default class Home extends Component {

    constructor(){
       
        super();

        this.state = {
            capsOne: null
        } 
        
    }
    
    componentDidMount() {
        this._fetchOneCaps();
    }

   
     
    render(){
        let display;

        if (this.state.capsOne) {
             display =  <Caps name={this.state.capsOne.movie.title} img={this.state.capsOne.path}/> ; 
        }
        

        return (
            <div id="home">
                <div>
                    <div className="App">
                        <Nav />
                        {this.props.children} 
                    </div>   
                </div>
                <div>{display}</div>
                <div id="footer">
                    <h3> movie finder &copy;2017</h3>
                </div>      
            </div>
        );
    }

    _fetchOneCaps() {
        
        axios.get('/caps/caps-random')
        .then((response) => {
            console.log(response.data.caps);
            this.setState({ capsOne: response.data.caps});
        })
        .catch(function (error) {
            console.log(error);
        });


    }
}