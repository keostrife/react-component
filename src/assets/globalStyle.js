import styled from 'styled-components';
import theme from './theme.js';
import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		font-family: Poppins;
		min-width: 320px;
		background-color: ${theme.background_gray};
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	.mobile-only {
		@media only screen and (min-width: ${theme.mobile_breakpoint}px) {
		    display: none !important;
		}
	}
	.desktop-only {
		@media only screen and (max-width: ${theme.mobile_breakpoint}px) {
		    display: none !important;
		}
	}
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.hidden {
		display: none;
	}
	#react-root {
		width: 100%;
		float: left;
	}
	.container {
		width: 100%;
		max-width: 960px;
		margin: 0 auto;
		padding: 0 20px;
		&:after {
			content: "";
			display: block;
			clear: both;
		}
	}
	.flex {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		align-items: flex-start;
		&:after {
			display: none;
		}
		> * {
			display: inline-block;
		}
		& > .flex {
			display: flex;
		}
	}
	a {
		text-decoration: none;
		color: ${theme.light_gray};
		font-size: 14px;
		font-weight: 400;
		font: inherit;
		&:hover,
		&:focus {
			color: ${theme.header_gray};
			text-decoration: underline;
		}
	}
`

export const LogoText = styled.span`
	height: 36px;
	font-size: 26px;
	font-weight: ${props => props.fontWeight?props.fontWeight:"400"};
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: left;
	color: ${props => props.color?props.color:"white"};
	vertical-align: middle;
`

export const Input = styled.input`
	text-align: left;
	font-size: 14px;
	font-weight: 400;
	background: white;
	color: ${theme.light_gray};
	border-radius: ${theme.border_radius}px;
	border: none;
	padding-left: 10px;
	padding-right: 10px;
`

let buttonWidth = 90;
export const QuickForm = styled.div`
	height: 45px;
	line-height: 45px;
	width: 280px;
	font-size: 14px;
	font-weight: 400;
	text-align: left;
	color: ${theme.light_gray};
	border-radius: ${theme.border_radius}px;
	overflow: hidden;
	position: relative;
	> input {
		height: inherit;
		line-height: inherit;
		width: 100%;
		padding-right: ${buttonWidth+10}px;
	}
	> button {
		position: absolute;
		top: 0;
		right: 0;
		width: ${buttonWidth}px;
		height: inherit;
		background-color: ${theme.light_blue};
		color: white;
		&:hover {
			background-color: ${theme.dark_blue};
		}
	}
`