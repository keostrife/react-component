import React from 'react';

import theme from '../assets/theme.js';
import LinkItem from '../linkItemClass.js';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import {QuickForm, Input, LogoText} from '../assets/globalStyle.js';
import {Footer} from './assets/style.js';

class SiteFooter extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	contactEmail: "support@toothmeister.com",
	    	socialMedias: [
	    		LinkItem.create({
	    			title: "facebook",
	    			icon: (
	    				<svg style={{width: 24, height: 24}} viewBox="0 0 24 24">
						    <path fill={theme.light_gray} d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
						</svg>
					)
	    		}),
	    		LinkItem.create({
	    			title: "twitter",
	    			icon: (
						<svg style={{width: 24, height: 24}} viewBox="0 0 24 24">
						    <path fill={theme.light_gray} d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
						</svg>
	    			)
	    		}),
	    		LinkItem.create({
	    			title: "instagram",
	    			icon: (
						<svg style={{width: 24, height: 24}} viewBox="0 0 24 24">
						    <path fill={theme.light_gray} d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
						</svg>
	    			)
	    		}),
	    		LinkItem.create({
	    			title: "google",
	    			icon: (
						<svg style={{width: 24, height: 24}} viewBox="0 0 24 24">
						    <path fill={theme.light_gray} d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
						</svg>
	    			)
	    		}),
	    		LinkItem.create({
	    			title: "linkedin",
	    			icon: (
						<svg style={{width: 24, height: 24}} viewBox="0 0 24 24">
						    <path fill={theme.light_gray} d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
						</svg>
	    			)
	    		}),
	    	],
	    	nav1: [
	    		LinkItem.create({
	    			title: "Who we are"
	    		}),
	    		LinkItem.create({
	    			title: "Contact us"
	    		}),
	    		LinkItem.create({
	    			title: "Jobs"
	    		}),
	    		LinkItem.create({
	    			title: "FAQ"
	    		}),
	    	],
	    	nav2: [
	    		LinkItem.create({
	    			title: "Who we are"
	    		}),
	    		LinkItem.create({
	    			title: "Contact us"
	    		}),
	    		LinkItem.create({
	    			title: "Jobs"
	    		}),
	    		LinkItem.create({
	    			title: "FAQ"
	    		}),
	    	],
	    	nav3: [
	    		LinkItem.create({
	    			title: "Who we are"
	    		}),
	    		LinkItem.create({
	    			title: "Contact us"
	    		}),
	    		LinkItem.create({
	    			title: "Jobs"
	    		}),
	    		LinkItem.create({
	    			title: "FAQ"
	    		}),
	    	],
	    	footerNav: [
	    		LinkItem.create({
	    			title: "Term of use"
	    		}),
	    		LinkItem.create({
	    			title: "Privacy Policy"
	    		}),
	    		LinkItem.create({
	    			title: "Trust and Safty"
	    		}),
	    	]
	    }
	}

	

	

	

	

	

	render() {
		return(
		<Footer>
			<div className="container small flex">
				<div className="signup">
					<div className="logo">
						<LogoText color="white" fontWeight="600">tooth</LogoText>
						<LogoText color={theme.light_gray}>meister</LogoText>
					</div>
					<p><a href={`mailto:${this.state.contactEmail}`}>{this.state.contactEmail}</a></p>
					<QuickForm>
						<Input type="text" placeholder="Enter your email address" aria-label="Sign up for updates" />
						<Button variant="contained" color="primary">Sign Up</Button>
					</QuickForm>
				</div>
				<nav className="footerNav flex">
					<section className={this.state.nav1.length?"":"hidden"}>
						<h3 className="heading">Heading 1</h3>

						<ul>
						{this.state.nav1.map((obj, i) => (

						<li key={i} data-itemindex={i} className={obj.isActive?"active":""} aria-label={obj.ariaLable}>
							<a href={obj.url} target={obj.newWindow?"_blank":"_self"} onClick={obj.customHandler}>{obj.title}</a>
						</li>
							
						))}
						</ul>

					</section>
					
					<section className={this.state.nav2.length?"":"hidden"}>
						<h3 className="heading">About</h3>
						<ul>
						{this.state.nav2.map((obj, i) => (

						<li key={i} data-itemindex={i} className={obj.isActive?"active":""} aria-label={obj.ariaLable}>
							<a href={obj.url} target={obj.newWindow?"_blank":"_self"} onClick={obj.customHandler}>{obj.title}</a>
						</li>
							
						))}
						</ul>
					</section>
					
					<section className={this.state.nav3.length?"":"hidden"}>
						<h3 className="heading">Heading 3</h3>

						<ul>
						{this.state.nav3.map((obj, i) => (

						<li key={i} data-itemindex={i} className={obj.isActive?"active":""} aria-label={obj.ariaLable}>
							<a href={obj.url} target={obj.newWindow?"_blank":"_self"} onClick={obj.customHandler}>{obj.title}</a>
						</li>
							
						))}
						</ul>

					</section>
				</nav>
				<div className="footerBar flex">
					<p className="legal">
						@ 2018 Keo Strife
					</p>
					
					<div className="endNav">

						<ul className={this.state.footerNav.length?"":"hidden"}>
						{this.state.footerNav.map((obj, i) => (

						<li key={i} data-itemindex={i} className={obj.isActive?"active":""} aria-label={obj.ariaLable}>
							<a href={obj.url} target={obj.newWindow?"_blank":"_self"} onClick={obj.customHandler}>{obj.title}</a>
						</li>
							
						))}
						</ul>

					</div>

					<div className="social-media">

						<ul className={this.state.footerNav.length?"":"hidden"}>
						{this.state.socialMedias.map((obj, i) => (

						<li key={i} data-itemindex={i} className={obj.isActive?"active":""} aria-label={obj.title}>
							<a href={obj.url} target={obj.newWindow?"_blank":"_self"} onClick={obj.customHandler}>
								<IconButton>
									{obj.icon}
								</IconButton>
							</a>
						</li>
							
						))}
						</ul>

					</div>
				</div>
			</div>
		</Footer>
		);
	}
}

export default SiteFooter;