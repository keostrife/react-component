import React from 'react';

import theme from '../assets/theme.js';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import MediaCard from './mediaCard.js';
import BannerCard from './bannerCard.js';
import SimpleCard from './simpleCard.js';
import {FeedContainer, MediaPage} from './assets/style.js';
import cardData from './data/card_data.js';

class MediaFeed extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		//using masonry for card ordering
		window.onload = function() {
			var grid = document.querySelector('.grid');
			var msnry = new Masonry( grid, {
			  // options...
			  itemSelector: 'section',
			  columnWidth: "section",
			  percentPosition: true
			});
		}
		
	}

	render() {
		return (
			<MediaPage className="container">
				<h1>My Feed</h1>
				<div className="toolbar">
					<Button>Filters <Icon>arrow_drop_down</Icon></Button>
				</div>
				<FeedContainer className="grid">
					{cardData.map((obj, i) => {
						if(obj.type == "media")
							return (<MediaCard key={i} data={obj} />)
						else if(obj.type == "banner")
							return (<BannerCard key={i} data={obj} />)
						else if(obj.type == "simple")
							return (<SimpleCard key={i} data={obj} />)
						
					})}

				</FeedContainer>
			</MediaPage>
		);
	}
}

export default MediaFeed;