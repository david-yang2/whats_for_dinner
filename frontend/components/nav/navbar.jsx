import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component{

    render(){
        return (
            <nav className="navbar">
                <ul className ="navLinks">
                    <Link to='/'>
                        <li> Home </li>
                    </Link>
                    <Link to='/chefs'>
                        <li> Our Chefs </li>
                    </Link>
                    <Link to='/items'>
                        <li> Items </li>
                    </Link>
                    <Link to='/cart'>
                        <li> Cart </li>
                    </Link>
                </ul>
            </nav>
        );
    }

}
export default NavBar;