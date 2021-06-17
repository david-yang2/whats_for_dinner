import React from 'react';
import { Link } from 'react-router-dom';
// import './app/assets/stylesheets/nav_bar.scss';

export default ({ currentUser, logout }) => {

  // const display is being used below
  // we want to display:
  // login/signup if we DO NOT have a current user
  // greetings/logout if we DO have a current user

  // use ternary to accomplish that
    // currentUser ? () : ()
  const display = currentUser ? (
    <div className="welcome-container">
      <text className="welcome-text"> Hello, {currentUser.username}</text> <br/>
      <button className="logout" onClick={logout}>Log out</button>
    </div>
  )
  // : is part of the ternary function
  : (
    <div>
      <Link className="btnl" to="/login">Log In</Link>
      <Link className="btns" to="/signup">Sign Up</Link>
    </div>
  );

  const cart = currentUser ? (
    <li><Link className ="cartbtn" to='/cart'>Cart</Link></li>
  ) : (null)

  return (
    <header className="header">
      <img className="logo" src="./images/home/logo1.png" alt=""/>
      <div className="header-content">
        <div className="portfolio">
            <a className="github" href='https://github.com/david-yang2'>
              <div/>
            </a>
            <a className="linkedin" href='https://www.linkedin.com/in/david-yang2/'>
              <div/>
            </a>
          </div>
        <nav className="navbar">
          <ul className ="navlinks">
            <li><Link className ="homel" to='/'>Home</Link></li>
            <li><Link className ="chefsl" to='/chefs'>Our Chefs</Link></li>
            <li><Link className ="iteml" to='/items'>Items</Link></li>
            {cart}
          </ul>
        </nav>
        <div className="signup-container">
          {display}
        </div>
      </div>
    </header>
  );
};