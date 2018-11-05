import React from 'react';

import theme from '../assets/theme.js';

import {Card} from './assets/style.js';

class BannerCard extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
		this.data = props.data;
		
	}

	

	render() {
		return (
			<Card className="banner-card">
				<div className="image">
					<img src={this.data.picture.src} alt={this.data.picture.description} />
				</div>
			</Card>
		);
	}
}

export default BannerCard;