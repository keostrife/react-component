import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import theme from '../assets/theme.js';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';

import {UserSummary} from './assets/style.js';

const styles = materialUITheme => ({
	menu: {
		marginTop: "50px",
	},
	menuitem: {
		font: "Poppins",
		fontSize: 14,
		fontWeight: 400
	}
});

class HeaderSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuAnchorEl: null
		}
	}

	handleOpenMenu(event) {
		this.setState({
			menuAnchorEl: event.currentTarget,
		});
	}

	handleCloseMenu(event) {
		this.setState({
			menuAnchorEl: null,
		});
	}

	handleSelectMenu(event) {
		this.handleCloseMenu(event);
		window.location = event.currentTarget.getAttribute("data-url");
	}

	render () {
		return(
			<React.Fragment>
			<UserSummary
	          aria-owns={this.state.menuAnchorEl ? 'user-menu' : undefined}
	          aria-haspopup="true"
	          onClick={this.handleOpenMenu.bind(this)}
	          className="user-summary"
	        >
	        	<span className="full-version">
					<Avatar alt={this.props.userName} src={this.props.userProfilePic} className="avatar" />
					<span className="username">{this.props.userName}</span>
					<Icon className="arrow-icon">arrow_drop_down</Icon>
				</span>
				<Icon className="more-icon compressed-version">more_vert</Icon>
	        </UserSummary>
	        <Menu
	          id="user-menu"
	          anchorEl={this.state.menuAnchorEl}
	          open={Boolean(this.state.menuAnchorEl)}
	          onClose={this.handleCloseMenu.bind(this)}
	          className={this.props.classes.menu}
	        >
	        	{this.props.menuItems.map((obj, i) => (

        		<MenuItem key={i} data-itemindex={i} onClick={this.handleSelectMenu.bind(this)} className={this.props.classes.menuitem} aria-label={obj.ariaLable} data-url={obj.url}>{obj.title}</MenuItem>
	        		
	        	))}
	        </Menu>
	        </React.Fragment>
		);
	}
}

export default withStyles(styles)(HeaderSearch);
