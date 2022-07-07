import React from 'react';

import logo from "../../assets/digivice.png";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='logo'>
				<a href="/">
					<img src={logo} alt="digivice logo"/>
				</a>
			</div>

			<div className='title'>
					<h2>
						Digi<span>Déx</span>
					</h2>
			</div>
		</nav>
	)
}

export default Navbar