import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import theme from '../assets/theme.js';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import {LogoText} from '../assets/globalStyle.js';
import {NavItems, DrawerHeader} from './assets/style.js';
import CustomIcon from './icons.js';

const styles = materialUITheme => ({
	
});

class HeaderNavigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drawerOpen: false,
		}

		//close when break layout
		window.addEventListener('resize', ()=>{
			if(window.innerWidth > theme.mobile_breakpoint) this.handleCloseDrawer();
		});
	}

	handleOpenDrawer(event) {
		this.setState({ drawerOpen: true });
	}

	handleCloseDrawer(event) {
		this.setState({ drawerOpen: false });
	}

	getLogo() {
		return (
			<div className="logo">
				<LogoText color={theme.dark_blue} fontWeight="600">keo</LogoText>
				<LogoText color={theme.light_gray}>strife</LogoText>
			</div>
		);
	}

	render () {
		return(
			<React.Fragment>
			<nav className="desktop-only">
				
				{this.getLogo()}
				
				<NavItems>
					{this.props.items.map((obj, i) => (

					<li key={i} data-itemindex={i} className={obj.isActive?"active":""} aria-label={obj.ariaLable}>
						<a href={obj.url} target={obj.newWindow?"_blank":"_self"} onClick={obj.customHandler}>{obj.title}</a>
					</li>
						
					))}
				</NavItems>
			</nav>

			<div className="menu-icon mobile-only">
				<IconButton
	              color="inherit"
	              aria-label="Open Navigation"
	              onClick={this.handleOpenDrawer.bind(this)}
	            >
					<CustomIcon>
					    menu
					</CustomIcon>
	            </IconButton>
			</div>

			<Drawer
	          variant="persistent"
	          anchor="left"
	          open={this.state.drawerOpen}
	        >
				<DrawerHeader className={this.state.drawerOpen?"open":"close"}>
					{this.getLogo()}
					<div className="chevron-icon">
						<IconButton onClick={this.handleCloseDrawer.bind(this)}>
							<CustomIcon>
							    chevron_left_icon
							</CustomIcon>
						</IconButton>
					</div>
				</DrawerHeader>
	          	<NavItems className="mobile">
	          		{this.props.items.map((obj, i) => (

	          		<li key={i} data-itemindex={i} className={obj.isActive?"active":""} aria-label={obj.ariaLable}>
	          			<a href={obj.url} target={obj.newWindow?"_blank":"_self"} onClick={obj.customHandler}>{obj.title}</a>
	          			<Divider />
	          		</li>

	          		))}
	          	</NavItems>
	        </Drawer>
	        </React.Fragment>
		);
	}
}

export default withStyles(styles)(HeaderNavigation);
