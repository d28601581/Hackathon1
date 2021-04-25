import React, { Component } from 'react';
import Background from '../Background/Background';
import NavBar from '../NavBar/NavBar';
import './Main.css';

class Main extends Component {
	render() {
		return (
			<div className="mainPage">
				<NavBar/>

				<Background />
			</div>
		);
	}
}
export default Main;
