import React, { Component } from 'react';
import Caps from '../Caps';
import Nav  from '../Nav';
import _ from "lodash";
import axios from "axios";


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
       
        const arrCaps = this.state.caps.map((c, idx) => {
            return <Caps name={c.movie} img={c.path} key={idx}/> ;
        })

        return (
            <div>
                <Nav />
                <div>{arrCaps}</div>
            </div>
        );
    }

    _fetchCaps() {

        axios.get('/caps')
        .then((response) => {
          console.log(response.data.caps);
          this.setState({ caps: response.data.caps});
        })
        .catch(function (error) {
          console.log(error);
        });


    }
}