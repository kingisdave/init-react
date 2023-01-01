import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component{
	state = { } 	
  	render() {
    	return (
    		
    			<nav className="navbar bg-primary text-white shadow navbar-expand"> 
	      		<span className="navbar-brand">Pick N Pay</span>
	      		<ul className="nav navbar-nav">
   					<li className="navbar-list m-3">
			        	<Link className="navbar-link" to="/"> Home </Link>
			        </li>
			        <li className="navbar-list m-3">
			        	<Link className="navbar-link" to="Products"> Products </Link>
			        </li>
			        <li className="navbar-list m-3">
			        	<Link className="navbar-link" to="About"> About Us </Link>
			        </li>
			        <li className="navbar-list m-3">
			        	<Link className="navbar-link" to="Contact"> Contact </Link>
			        </li>
	      		</ul>
		      	<ul className="nav navbar-nav navbar-right">
			        <li className="navbar-list m-3">
			        	<Link className="navbar-link" to="/"><span className="glyphicon glyphicon-user"></span> Your Account </Link>
			        </li>
			        <li className="navbar-list m-3">
			        	<Link className="navbar-link" to="Products"><span className="glyphicon glyphicon-shopping-cart"></span> Cart </Link>
			        </li>
				</ul>
			</nav>	
    	);
  	}
}
export default Navbar;
