import React from 'react';
import { Navbar, NavItem, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Profile from "./Profile";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand>Pinpoint</Navbar.Brand>

        <NavItem><Link to="/about" className="nav-link"><Button>About</Button></Link></NavItem>

        <NavItem><Link to="/" className="nav-link"><Button>Home</Button></Link></NavItem>

        <NavItem><Link to="/search" className="nav-link"><Button>Pinpoint</Button></Link></NavItem>

        <Profile />
      </Navbar>
                
    )
  }
}

export default Header;