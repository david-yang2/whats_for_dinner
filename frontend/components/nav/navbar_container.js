import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
// import {getUsersCart} from '../../actions/cartitem_actions';

// allow us to create a button that will allow current user to log out
import { logout } from '../../actions/session_actions';

// make sure to pass down our currentUser from our state to NavBar component
const mapStateToProps = state => {
  return{
  currentUser: state.session.currentUser,
  // cartitems: state.cartitems,
  }
};


// make sure to pass down the logout function as well
const mapDispatchToProps = dispatch => {
  return{
  // getUsersCart: userId => dispatch(getUsersCart(userId)),
  logout: () => dispatch(logout()),
  }
};


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
