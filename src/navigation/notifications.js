import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import theme from '../assets/theme.js';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Badge from '@material-ui/core/Badge';

import {NotificationContainer} from './assets/style.js';
import CustomIcon from './icons.js';

const styles = materialUITheme => ({
	badge: {
		backgroundColor: theme.pink,
		color: "white",
		width: "18px",
		height: "18px",
		top: "-3px",
		right: "-3px",
		fontSize: 10
	}
});

class HeaderNotifications extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notificationAnchorEl: null
		}
	}

	handleOpenNotification(event) {
		this.setState({
			notificationAnchorEl: event.currentTarget,
		});
	}

	handleCloseNotification(event) {
		this.setState({
			notificationAnchorEl: null,
		});
	}

	render () {
		return(
			<React.Fragment>
			<IconButton aria-label="Notifications" color="primary" onClick={this.handleOpenNotification.bind(this)}>
				<Badge badgeContent={this.props.notifications.length} classes={{ badge: this.props.classes.badge }}>
					<CustomIcon>
					    notifications_none
					</CustomIcon>
				</Badge>
			</IconButton>
			<Popover
			  id="notification-popover"
			  open={Boolean(this.state.notificationAnchorEl)}
			  anchorEl={this.state.notificationAnchorEl}
			  onClose={this.handleCloseNotification.bind(this)}
			  anchorOrigin={{
			    vertical: 'bottom',
			    horizontal: 'right',
			  }}
			  transformOrigin={{
			    vertical: 'top',
			    horizontal: 'right',
			  }}
			>
				<NotificationContainer>
					<ul>
						{this.props.notifications.map((obj, i) => (

						<li key={i} data-itemindex={i} className={obj.isActive?"active":""} aria-label={obj.ariaLable}>
							<a href={obj.url} target={obj.newWindow?"_blank":"_self"} onClick={obj.customHandler}>
								<span className="title-text">{obj.title}</span>
								<span className="description-text">{obj.description}</span>
							</a>
						</li>
							
						))}

					</ul>
					
				</NotificationContainer>
			</Popover>
	        </React.Fragment>
		);
	}
}

export default withStyles(styles)(HeaderNotifications);
