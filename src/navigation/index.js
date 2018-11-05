import React from 'react';

import theme from '../assets/theme.js';
import LinkItem from '../linkItemClass.js';
import {Header} from './assets/style.js';

import HeaderNavigation from './navigation.js';
import HeaderSearch from './search.js';
import HeaderNotifications from './notifications.js';
import HeaderUserMenu from './userMenu.js';

class SiteHeader extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	userName: "Keo Strife",
	    	userProfilePic: "http://sarahai.com/assets/images/profile-photo.jpg",
	    	notifications: [
	    		LinkItem.create({
	    			title: "notification 1",
	    			description: "Your friend Justin mentioned you in one of his post"
	    		}),
	    		LinkItem.create({
	    			title: "notification 2",
	    			description: "You have 3 comments on your post"
	    		}),
	    	],
	    	items: [
	    		LinkItem.create({
	    			title: "My Feed",
	    			isActive: true
	    		}),
	    		LinkItem.create({
	    			title: "Upload Photo"
	    		}),
	    		LinkItem.create({
	    			title: "Item Directory",
	    		}),
	    	],
	    	userMenuItems: [
	    		LinkItem.create({
	    			title: "Profile"
	    		}),
	    		LinkItem.create({
	    			title: "My Account"
	    		}),
	    		LinkItem.create({
	    			title: "Log Out"
	    		}),
	    	]
	    }
	}

	

	

	

	

	

	render() {
		return(
		<Header>
			<HeaderNavigation items={this.state.items} />
			

			<div className="status">
				<HeaderSearch />
				<HeaderNotifications notifications={this.state.notifications} />
				<HeaderUserMenu userName={this.state.userName} userProfilePic={this.state.userProfilePic} menuItems={this.state.userMenuItems} />
				
			</div>
		</Header>
		);
	}
}

export default SiteHeader;