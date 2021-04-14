import React from 'react';
import { Link } from 'react-router-dom';
import './nav_bar.css';

export default ({ currentUser, logout }) => {

  // const display is being used below
  // we want to display:
  // login/signup if we DO NOT have a current user
  // greetings/logout if we DO have a current user

  // use ternary to accomplish that
    // currentUser ? () : ()
  const display = currentUser ? (
    <div>
      <p> Hello, {currentUser.username}</p>
      <button onClick={logout}>Log out</button>
    </div>
  )
  // : is part of the ternary function
  : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="navbar">
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
      <div>
        {display}
      </div>
    </header>
  );
};