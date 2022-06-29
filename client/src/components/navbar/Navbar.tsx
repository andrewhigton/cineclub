import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
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
		 <Navbar className="navbar" expand="lg">
		   <Navbar.Brand className="navbar-title" href="/">SATURDAY CINEMA CLUB</Navbar.Brand>
		    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse className="hamburger-signedin">
			   
			   <Nav className="">
		        <NavDropdown.Item href="/film/dashboard">Your films and tickets</NavDropdown.Item>
		        <NavDropdown.Item href="/film">All films</NavDropdown.Item>
		        <NavDropdown.Item className="howitworks" href="/howitworks">How it works</NavDropdown.Item>
		        <NavDropdown.Item href="/create-film">Create a screening</NavDropdown.Item>
		        <NavDropdown.Item onClick={logout} href="/create-film">Logout</NavDropdown.Item>
			   </Nav>
			</Navbar.Collapse>
			
		   </Navbar>
			: 
		   
		   <Navbar className="navbar" expand="lg">
			<Navbar.Brand className="navbar-title" href="/">SATURDAY CINEMA CLUB</Navbar.Brand>        
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
				
			    <Navbar.Collapse className="hamburger-signedout">

			    	<Nav className="hamburger-signedout">
			        <NavDropdown.Item href="/register">Register</NavDropdown.Item>
			        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
			        <NavDropdown.Item href="/film">All films</NavDropdown.Item>
			        <NavDropdown.Item className="" href="/howitworks">How it works</NavDropdown.Item>
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

export default connect(mapStateToProps, { logout })(NavbarComponent);