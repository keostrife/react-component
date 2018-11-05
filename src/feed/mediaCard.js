import React from 'react';

import theme from '../assets/theme.js';

import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import {Card} from './assets/style.js';

class MediaCard extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
		this.data = props.data;
		
	}



	render() {
		return (
			<Card className="media-card" color={this.data.color}>
				<div className={`categories ${this.data.categories.length?"":"hidden"}`}>
					<span className="categoryTitle">BLOG</span>
					<ul>
						{this.data.categories.map((obj, i) => (

						<li key={i} data-itemindex={i} className={obj.isActive?"active":""} aria-label={obj.ariaLable}>
							<a href={obj.url} target={obj.newWindow?"_blank":"_self"} onClick={obj.customHandler}>{obj.title}</a>
						</li>
							
						))}
					</ul>
				</div>
				<div className={`image ${this.data.picture.src?"":"hidden"}`}>
					<img src={this.data.picture.src} alt={this.data.picture.description} />
				</div>
				<div className={`tags ${this.data.tags.length?"":"hidden"}`}>
					<ul>
						{this.data.tags.map((obj, i) => (

						<li key={i} data-itemindex={i} className={obj.isActive?"active":""} aria-label={obj.ariaLable}>
							<a href={obj.url} target={obj.newWindow?"_blank":"_self"} onClick={obj.customHandler}>{obj.title}</a>
						</li>
							
						))}
					</ul>
				</div>
				<h2 className="title">{this.data.title}</h2>
				<div className="infos">
					<small className="date">{this.data.date_created}</small>
					<div className="stats">
						<small><Icon>thumb_up</Icon> {this.data.likeCount}</small>
						<small><Icon>mode_comment</Icon> {this.data.commentCount}</small>
						<small>
							<svg style={{width: 16, height: 16}} viewBox="0 0 24 24">
    							<path fill={theme.light_gray} d="M21,11L14,4V8C7,9 4,14 3,19C5.5,15.5 9,13.9 14,13.9V18L21,11Z" />
							</svg>
							{this.data.shareCount}
						</small>
					</div>
				</div>
				<p className="description">{this.data.description}</p>
				<div className="author">
					<Avatar alt={this.data.author.name} src={this.data.author.profilePicture} className="avatar" />
					<div className="author-infos">
						<p className="author-name">
							<strong>{this.data.author.name}</strong>
						</p>
						<small className="author-title">{this.data.author.title}</small>
						<small className="author-location"><Icon>location_on</Icon>{this.data.author.location}</small>
					</div>
				</div>
			</Card>
		);
	}
}

export default MediaCard;