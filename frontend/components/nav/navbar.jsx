import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }




    render(){
        const display = this.props.currentUser ? (
            <div>
              <p> Hello, {this.props.currentUser.username}</p>
              <button onClick={this.props.logout}>Log out</button>
            </div>
          ) : (
            <div>
              <Link className="btn" to="/signup">Sign Up</Link>
              <Link className="btn" to="/login">Log In</Link>
            </div>
        );
        return (
            <div className ="navbar">
                <nav className="navlinks">
                    <ul className ="navoptions">
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
                <div className="signup">
                    {display}
                </div>
            </div>
        );
    };

};
export default NavBar;