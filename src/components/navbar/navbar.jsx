import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
    <div className='nav'>
      <ul className='nav-menu'>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        
      </ul>
    </div>
  );
};

export default Navbar;
