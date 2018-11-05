import React from 'react';

import theme from '../assets/theme.js';

import {Card} from './assets/style.js';

class SimpleCard extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
		this.data = props.data;
		
	}

	createMessageMarkup() {
		return {__html: this.data.message}
	}
	

	render() {
		return (
			<Card className="simple-card">
				<span className="category">{this.data.category}</span>
				<div className="info">
					<h2 className="title">{this.data.title}</h2>
					<p className="description">{this.data.description}</p>
				</div>
				<div className="image">
					<img src={this.data.picture.src} alt={this.data.picture.description} />
				</div>
				<div className="author">
					<p className="message" dangerouslySetInnerHTML={this.createMessageMarkup()}></p>
				</div>
			</Card>
		);
	}
}

export default SimpleCard;