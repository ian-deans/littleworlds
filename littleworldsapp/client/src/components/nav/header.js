import React from "react";
import "./header.css";
import {Navbar, NavItem} from 'react-materialize';

const Top = props => (
    
<Navbar id="header" className="nav-center">
	<NavItem href='/about' className='valign-wrapper'>About</NavItem>
    <NavItem><img className="logo" src={props.imageUri} alt="logo"></img></NavItem>
	<NavItem href='/shop' className='valign-wrapper'>Shop</NavItem>
</Navbar>

);

export default Top;
