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

interface ChildComponentProps extends RouteComponentProps<any> {
	params: any
}

interface NavbarProps {
	auth: {
		isAuthenticated: boolean,
		loading: boolean,
	}
	logout: () => void;
}

type JointNavbarProps = ChildComponentProps & NavbarProps;

const NavbarComponent: React.FC<JointNavbarProps> = ({ 
	auth: { isAuthenticated, loading }, 
	logout, 
	params 
	}) => {	
	//so use the same one for both, with a hampburger drop down on the right like picturehouse 
	return (
		<Fragment>{ isAuthenticated ? 
		 <Navbar bg="light" expand="lg">
		   <Navbar.Brand href="#home">SATURDAY CINEMA CLUB</Navbar.Brand>
		    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse className="dropdown" id="basic-navbar-nav">
			   <Nav className="me-auto">
		        <Nav.Link href="/film/dashboard">Your films and tickets</Nav.Link>
		        <Nav.Link href="/film">All films</Nav.Link>
		        <Nav.Link className="howitworks" href="/howitworks">How it works</Nav.Link>
		        <Nav.Link href="/create-film">Create a screening</Nav.Link>
		        <Nav.Link onClick={logout} href="/create-film">Logout</Nav.Link>
			   </Nav>
			</Navbar.Collapse>
		   </Navbar>
			: 
		   <Navbar className="navbar" fixed="top" bg="light" expand="md">
			  
			    <Navbar.Brand href="#home">SATURDAY CINEMA CLUB</Navbar.Brand>
			    
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse className="dropdown" id="basic-navbar-nav">
			    	<Nav className="">
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

{/*	const [ dropdownActive, setDropdownActive ] = useState(false);
	
	const authLinks = (
		<div className="logged-in-nav">
		<ul className={`${dropdownActive ? "dropdown" : "top-row"}`}>
	        
	        
	        <li className={`${dropdownActive ? "reg-dropdown" : "films-tickets-link"}`}>
		        
		        <Link to='/film/dashboard'>
		        <i/>{' '}
		        <span>Your films and tickets</span>
		        </Link>
	        </li>
	        <li className={`${dropdownActive ? "buytickets-dropdown" : "buy-tickets-link"}`}>
		        <Link to='/film'>
		        All films
		        </Link>
	        </li>
	        <li className={`${dropdownActive ? "how-dropdown" : "howitworks-loggedin"}`}>
			        <Link to='/create-film'>
			        Create screening
			        </Link>
		    </li>        
	      	<li onClick={logout}
	        className={`${dropdownActive ? "buy-dropdown" : "logout"}`}
	        >
		        <Link to='/'>
		        <i/>{' '}
		        <span>Logout</span>
		        </Link>
		        
	        </li>
		  	<div className={`${dropdownActive ? "dropdown" : ""}`}>
	      	</div>
	      </ul>
	      <div 
		      className="hamburgDiv-loggedin"
		      onClick={() => setDropdownActive(!dropdownActive)}
		      >
		        <p className="hamburger"></p>
				<p className="hamburger"></p>
				<p className="hamburger"></p>
		  	</div> 	
		  </div> 		
		);

	const guestLinks = (
		<Fragment> 
		<div className="navbar-right">
		<ul className={`${dropdownActive ? "dropdown" : "top-row"}`}>
	        
	        <li className={`${dropdownActive ? "reg-dropdown" : "register"}`}>
		        <Link to="/register">Register</Link>
	        </li>
	        <li className={`${dropdownActive ? "log-dropdown" : "login"}`}>
	    	    <Link to="/login">/ Login</Link>
	        </li>
	        <li className={`${dropdownActive ? "buy-dropdown" : "buytickets-loggedout"}`}>
		        <Link to='/film'>
		        All films
		        </Link>
	        </li>
	        <li className={`${dropdownActive ? "how-dropdown" : "howitworks"}`}>
		        <Link to='/howitworks'>
		        How it works
		        </Link>
	        </li>
	     	
	     
	      </ul>
	   
	     </div> 
	     <div 
		      className="hamburgerDiv"
		      onClick={() => setDropdownActive(!dropdownActive)}
		      >
		        <p className="hamburger"></p>
				<p className="hamburger"></p>
				<p className="hamburger"></p>
		   </div>
	    </Fragment>
	      
		);
*/}

{/*<nav className="navbar">
	      <div className="navbar-left">
				<Link to="/" className="main-title">
		        	<h1>SATURDAY CINEMA CLUB</h1> 
		        </Link>
		      
		        <h2 className="main-title-subdeck">
		            Your film, your screen  
		        </h2>
 	      </div>
	      	{(
	      	<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>
	      	)}
	    </nav>*/}