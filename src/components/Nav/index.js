import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';
import logo from './popcorn.svg';

const Nav = () => (
      
    <div>
        <div className="logo-container">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="brand">
                Movie Finder
            </div>   
        </div>
        <div className="logo-icon">
            <img src="http://demos.creative-tim.com/material-bootstrap-wizard/assets/img/new_logo.png" alt=""/>
        </div>
        <input type="submit" value="Logout" className="btn btn-success btn-xs log"/>
        
        
        <nav id="nav" className='App-nav'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/gallery">gallery</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
            
        </nav>
        <div className="grid">
            <form action="" method="get" className="search">
        
              <div className="form__field">
                <input type="search" name="search" placeholder="What are you looking for?" className="form__input"/>
                <input type="submit" value="Search" className="button"/>
              </div>
        
            </form>
        
          </div>
        </div>    
      
)

export default Nav;
