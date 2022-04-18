import React, { Fragment, useState } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import '../../App.css';

interface NavbarProps {
	auth: {
		isAuthenticated: boolean,
		loading: boolean,
	}
	logout: () => void;
}

const NavbarComponent: React.FC<NavbarProps> = ({ 
	auth: { isAuthenticated, loading }, 
	logout, 
	}) => {	
	
	return (
		<Fragment>{ isAuthenticated ? 
		 <Navbar className="nav-top-line" expand="lg">
		   <Navbar.Brand href="/">SATURDAY CINEMA CLUB</Navbar.Brand>
		    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse className="dropdown top-row" id="basic-navbar-nav">
			   <Nav className="me-auto nav-right">
		        <Nav.Link href="/film/dashboard">Your films and tickets</Nav.Link>
		        <Nav.Link href="/film">All films</Nav.Link>
		        <Nav.Link className="howitworks" href="/howitworks">How it works</Nav.Link>
		        <Nav.Link href="/create-film">Create a screening</Nav.Link>
		        <Nav.Link onClick={logout} href="/create-film">Logout</Nav.Link>
			   </Nav>
			</Navbar.Collapse>
		   </Navbar>
			: 
		   <Navbar className="nav-top-line" expand="lg">
			  
			    <Navbar.Brand href="/">SATURDAY CINEMA CLUB</Navbar.Brand>
			    
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse className="dropdown" id="basic-navbar-nav">
			    	<Nav className="me-auto logged-out-nav nav-right-logged-out">
			        <Nav.Link href="/register">Register</Nav.Link>
			        <Nav.Link href="/login">Login</Nav.Link>
			        <Nav.Link href="/film">All films</Nav.Link>
			        <Nav.Link className="howitworks" href="/howitworks">How it works</Nav.Link>
			      </Nav>
			      </Navbar.Collapse>
			</Navbar>
	  	}
	  	</Fragment>
		);
	};

const mapStateToProps = state => ({
	auth: state.auth

});

export default withRouter(connect(mapStateToProps, { logout })(NavbarComponent));