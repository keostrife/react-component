import styled from 'styled-components';
import theme from '../../assets/theme.js';

export const NotificationContainer = styled.div`
	width: 280px;
	border-radius: ${theme.border_radius}px;
	overflow: hidden;
	& > ul {
		width: 100%;
		margin: 0;
		padding: 0;
		li {
			border-bottom: 1px ${theme.light_gray} solid;
			&:last-child {
				border-bottom: 0;
			}
			a {
				display: block;
				padding: 20px;
				text-decoration: none;
				&:hover,
				&:focus {
					.title-text {
						text-decoration: underline;
					}
				}
				span {
					display: block;
				}
				.title-text {
					font-size: 16px;
					font-weight: 600;
					color: ${theme.header_gray};
				}
				.description-text {
					margin-top: 5px;
					font-size: 14px;
					font-weight: 400;
					color: ${theme.text_gray};
				}
			}
		}
	}
`

export const UserSummary = styled.button`
	height: inherit;
	line-height: inherit;
	display: inline-block;
	border: 0;
	background: none;
	a {
		text-decoration: none;
		color: ${theme.text_gray};
		font-size: 14px;
		font-weight: 400;
	}
`
let boxShadow = "0 8px 14px 0 rgba(100, 109, 130, 0.16), 0 0 2px 0 rgba(100, 109, 130, 0.12)";

export const Header = styled.header`
	height: 80px;
	line-height: 80px;
	width: 100%;
	padding: 0 1.5em;
	float: left;
	box-shadow: ${boxShadow};
	color: ${theme.text_gray};
	font-size: 14px;
	font-weight: 500;
	vertical-align: middle;
	margin-bottom: 60px;
	background: white;
	> * {
		display: inline-block;
		float: left;
		vertical-align: middle;
	}
	.logo {
		padding: 0 20px;
		float: left;
	}
	nav {
		
	}
	.menu-icon {
		float: left;
		vertical-align: middle;
	}
	.status {
		float: right;
		.user-summary {
			cursor: pointer;
			margin-left: 5px;
			font-family: Poppins;
			.compressed-version {
				display: none;
			}
			&:hover,
			&:focus {
				.avatar {
					transform: scale(1);
				}
			}
			@media only screen and (max-width: 380px) {
				.full-version {
				    display: none;
				}
			    .compressed-version {
			    	display: inline-block;
			    	
			    }
			}
		}
		.avatar {
			display: inline-block;
			vertical-align: middle;
			margin-right: 5px;
			transform: scale(0.9);
			transition: transform 0.2s ease-out;
			img {
				float: left;
			}
		}
		.username {

		}
		.arrow-icon {
			font-size: 20px;
			color: ${theme.text_gray};
			vertical-align: middle;
		}
		.more-icon {
			font-size: 30px;
			vertical-align: middle;
			color: ${theme.text_gray};
		}
		&:hover,
		&:focus {
			.username,
			.arrow-icon,
			.more-icon {
				color: ${theme.header_gray};
			}
			.username {
				text-decoration: underline;
			}
		}
	}
`

export const DrawerHeader = styled.div`
	text-align: center;
	box-shadow: ${boxShadow};
	padding-left: 1.5em;
	.chevron-icon {
		float: right;
	}
	& > span {
		display: none;
	}
	&.open {
		& > span {
			display: inline-block;
		}
	}
`

export const NavItems = styled.ul`
	margin: 0;
	padding: 0;
	float: left;
	li {
		list-style: none;
		float: left;
		position: relative;
		a {
			display: block;
			padding: 0 20px;
			text-decoration: none;
			color: ${theme.text_gray}
		}
		&:hover,
		&:focus {
			a {
				color: ${theme.header_gray};
			}
			&:after {
				width: 100%;
				opacity: 1;
			}
		}
		&:after {
			content: "";
			display: block;
			position: absolute;
			width: 100%;
			height: 3px;
			background: ${theme.light_gray};
			left: 50%;
			bottom: 0;
			z-index: 10;
			transform: translateX(-50%);
			width: 0;
			transition: all 0.2s;
			opacity: 0;
		}
		&.active {
			a {
				color: ${theme.header_gray};
				&:hover {
					text-decoration: none;
				}
			}
			&:after {
				width: 100%;
				background: ${theme.light_blue};
				opacity: 1;
			}

		}
	}
	&.mobile {
		width: 280px;
		li {
			width: 100%;
			text-align: center;
			height: 60px;
			line-height: 60px;
			&.active {
				&:after {
					width: 3px;
					height: 100%;
					left: auto;
					right: 0;
				}
			}
		}
	}
`