import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import {GlobalStyle} from './assets/globalStyle.js';

import Header from './navigation';
import Footer from './footer';
import Feed from './feed';

class App extends React.Component {
	constructor(props) {
	    super(props);
	    
	}
	render() {
		return(
			<React.Fragment>
				<CssBaseline />
				<Header />
				<div id="mainContent">
					<Feed />
				</div>
				<Footer />
				<GlobalStyle />
			</React.Fragment>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById("react-root")
);
