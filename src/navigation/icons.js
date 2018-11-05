import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import theme from '../assets/theme.js';

const styles = materialUITheme => ({
	icon: {
		color: theme.light_blue,
		fontSize: 30
	}
});

class CustomIcon extends React.Component {
	render () {
		return(
		<Icon className={this.props.classes.icon}>
			{this.props.children}
		</Icon>
		);
	}
}

export default withStyles(styles)(CustomIcon);
