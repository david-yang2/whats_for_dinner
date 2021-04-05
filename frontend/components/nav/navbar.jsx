import React from 'react';
import {Link} from 'react-router-dom';
//import './navbar.css';

class NavBar extends React.Component{

    render(){
        return (
            <nav>
                <ul>
                    <Link to='/'>
                        <li> Home </li>
                    </Link>
                    <Link to='/chefs'>
                        <li> Our Chefs </li>
                    </Link>
                    <Link to='/plates'>
                        <li> Plates </li>
                    </Link>
                </ul>
            </nav>
        );
    }

}
export default NavBar;