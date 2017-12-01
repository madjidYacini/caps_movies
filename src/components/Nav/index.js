import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
      
        <nav className='App-nav'>
            <Link to='/'>Home</Link> &nbsp; &nbsp; 
            <Link to='/gallery'>gallery</Link> &nbsp; &nbsp;
        </nav>
)

export default Nav;
