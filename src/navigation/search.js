import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import theme from '../assets/theme.js';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

import {QuickForm, Input} from '../assets/globalStyle.js';
import CustomIcon from './icons.js';

const styles = materialUITheme => ({
	
});

class HeaderSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchAnchorEl: null
		}
		this.input = React.createRef();
	}

	handleOpenSearch(event) {
		
		this.setState({
			searchAnchorEl: event.currentTarget,
		});

	}

	handleCloseSearch(event) {
		this.setState({
			searchAnchorEl: null,
		});
	}

	render () {
		return(
			<React.Fragment>
			<IconButton aria-label="Search" color="primary" onClick={this.handleOpenSearch.bind(this)}>
				<CustomIcon>
				    search
				</CustomIcon>
			</IconButton>
			<Popover
			  id="search-popover"
			  open={Boolean(this.state.searchAnchorEl)}
			  anchorEl={this.state.searchAnchorEl}
			  onClose={this.handleCloseSearch.bind(this)}
			  anchorOrigin={{
			    vertical: 'bottom',
			    horizontal: 'right',
			  }}
			  transformOrigin={{
			    vertical: 'top',
			    horizontal: 'right',
			  }}
			>
				<QuickForm>
					<Input type="text" placeholder="" aria-label="Search" ref={this.input} />
					<Button variant="contained" color="primary">Search</Button>
				</QuickForm>
			</Popover>
	        </React.Fragment>
		);
	}
}

export default withStyles(styles)(HeaderSearch);
