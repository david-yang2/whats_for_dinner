import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';

// Comment this back in after you have built the login functionality

// allow us to create a button that will allow current user to log out
import { logout } from '../../actions/session_actions';

// make sure to pass down our currentUser from our state to NavBar component
const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});


// make sure to pass down the logout function as well
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
