import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();    
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <button onClick={this.showModal}>New Trip</button>
          <a href="#">Menu</a>          
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  showModal() {  
    this.props.showModal('trip-form');
  }

  render() {
    return (
      <div>        
        {this.getLinks()}        
      </div>
    );
  }
}

export default NavBar;
