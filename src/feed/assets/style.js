import styled from 'styled-components';
import theme from '../../assets/theme.js';

export const MediaPage = styled.div`
	h1 {
		float: left;
		width: 100%;
		color: ${theme.header_gray};
		font-size: 38px;
		line-height: 44px;
		margin: 0;
	}

	.toolbar {
		width: 100%;
		float: left;
		text-align: right;
		margin-bottom: 10px;
		button {
			font-size: 14px;
			color: ${theme.light_gray};
			font: Poppins;
			font-weight: 600;
			text-transform: none;
			&:hover {
				color: ${theme.text_gray};
			}
		}
	}
`

let sidePadding = 20;
export const FeedContainer = styled.div`
	width: 102%;
	float: left;
	
	
	@media only screen and (max-width: 950px) {
		section {
			width: 46%;
			margin-right: 2%;
		}
	}
	@media only screen and (max-width: 640px) {
		width: 100%;
		section {
			width: 100%;
			margin-right: 0;
		}
		justify-content: space-around;
	}
`

export const Card = styled.section`
	width: 30%;
	min-width: 280px;
	border-radius: 4px;
	overflow: hidden;
	background: white;
	margin-bottom: 30px;
	box-shadow: 0 2px 4px 0 rgba(100, 109, 130, 0.14), 0 0 1px 0 rgba(100, 109, 130, 0.1);
	margin-right: 3%;
	margin-bottom: 25px;

	.categories {
		width: 100%;
		float: left;
		padding: 10px ${sidePadding}px;
		background: ${props => props.color ? props.color : "black"};;
		color: white;
		font-size: 12px;
		.categoryTitle {
			font-weight: 400;
			float: left;
			margin-right: 5px;
		}
		ul {
			li {
				display: inline-block;
				list-style: disc;
				padding: 0 5px;
				padding-left: 7px;
				position: relative;
				&:before {
					content: ".";
					position: absolute;
					left: 0;
					top: -4px;
				}
				a {
					color: white;
					font-weight: 700;
					&:hover,
					&:focus {
						color: white;
					}
				}
			}
		}
	}
	.image {
		width: 100%;
		float: left;
		cursor: pointer;
		img {
			width: 100%;
			float: left;
		}
	}
	.tags {
		width: 100%;
		float: left;
		padding: 10px ${sidePadding}px 0;
		li {
			display: inline-block;
			margin-right: 8px;
			a {
				display: inline-block;
				background-color: ${theme.light_blue};
				border-radius: 10.5px;
				font-size: 12px;
				color: white;
				padding: 0 7px;
				&:hover,
				&:focus {
					color: white;
					background-color: ${theme.dark_blue};
					text-decoration: none;
				}
			}
		}
	}
	.title {
		width: 100%;
		float: left;
		padding: 0 ${sidePadding}px;
		font-size: 18px;
		color: ${theme.header_gray};
		margin: 0;
		margin-top: 10px;
	}
	.infos {
		width: 100%;
		float: left;
		padding: 0 ${sidePadding}px;
		color: ${theme.light_gray};
		font-size: 14px;

		.date_created {
			float: left;
		}
		.stats {
			& > * {
				padding: 0 5px;
				cursor: pointer;
			}
			float: right;
			span,
			svg {
				font-size: 13px;
				vertical-align: middle;
				margin-right: 3px;

			}
		}
	}
	.description {
		padding: 10px ${sidePadding}px;
		color: ${theme.text_gray};
		font-size: 14px;
		line-height: 22px;
		margin-top: 5px;
		width: 100%;
		float: left;
	}
	.author {
		width: 100%;
		float: left;
		box-shadow: 0 -1px 0 0 #e8eaee;
		padding: 10px ${sidePadding}px;
		background: ${theme.light_gray_background};
		cursor: pointer;
		.avatar {
			float: left;
			margin-right: 10px;
		}
		.author-infos {
			float: left;
			line-height: 18px;
			.author-name {
				margin: 0;
				font-size: 13px;
				color: ${theme.header_gray};
				font-weight: 600;
			}
			.author-title {
				font-size: 12px;
				font-style: italic;
				font-weight: 500;
				color: ${theme.text_gray};
			}
			.author-location {
				font-size: 13px;
				color: ${theme.header_gray};
				font-weight: 400;
			}
			span {
				vertical-align: middle;
				font-size: 16px;
				margin-left: 5px;
				color: ${theme.header_gray};
			}
		}
	}
	&.simple-card {
		.category {
			width: 100%;
			float: left;
			padding: 10px ${sidePadding}px;
			font-size: 12px;
			font-weight: 600;
			color: ${theme.light_gray};
		}
		.message {
			font-size: 12px;
			font-weight: 600;
			color: ${theme.header_gray};
			margin: 0;
			text-align: center;
			a {
				font-size: inherit;
				font-weight: inherit;
				color: ${theme.light_blue};
				&:hover,
				&:focus {
					color: ${theme.dark_blue};
					text-decoration: underline;
				}
			}
		}
		.description {
			margin: 0;
			font-size: 12px;
		}
		.title {
			font-size: 16px;
		}
		.info {
			width: 60%;
			float: left;
		}
		.image {
			width: 40%;
			float: right;
			margin-top: 20px;
			margin-bottom: 20px;
		}
	}
`