import styled from 'styled-components';
import theme from '../../assets/theme.js';

export const Footer = styled.footer`
	width: 100%;
	float: left;
	background: ${theme.text_gray};
	margin-top: 80px;
	color: ${theme.light_gray};
	padding-top: 60px;
	a {
		font-size: 14px;
		&:hover,
		&:focus {
			color: white;
		}
	}
	.signup {
		width: 280px;
		margin-bottom: 40px;
		p {
			color: ${theme.medium_gray};
		}
	}
	.footerNav {
		max-width: 620px;
		width: 100%;
		section {
			.heading {
				color: white;
				font-size: 14px;
				margin-top: 0;
				margin-bottom: 20px;
				margin-top: 10px;
			}
		}
	}
	.footerBar {
		width: 100%;
		justify-content: space-between;
		font-size: 12px;
		padding: 10px 0;
		vertical-align: middle;
		align-items: center;
		border-top: 1px ${theme.light_gray} solid;
		margin-top: 40px;
		@media only screen and (max-width: 767px) {
			justify-content: space-around;
		}
		p {
			
		}
		a {
			font-size: 12px;
		}
		.endNav {
			li {
				position: relative;
				padding-left: 7px;
				&:before {
					content: ".";
					position: absolute;
					left: 0;
					top: -4px;
				}
				&:first-child {
					&:before {
						display: none;
					}
				}
			}
		}
		ul {
			li {
				display: inline-block;
				padding: 0 5px;
			}
		}
	}

`