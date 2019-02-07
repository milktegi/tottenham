import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toobar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom';

import { CityLogo } from '../ui/icons';

class Header extends React.Component {
  render() {
    return(
			<AppBar
			position="fixed"
			style={{
				backgroundColor: '#111735',
				boxShadow: 'none',
				padding: '5px 0',
				borderBottom: '1px solid #111735'
			}}
			>
			<Toobar
			style={{
				display: 'flex'
			}}
			>
				<div style={{ flexGrow: 1 }}>
					<div className="header_logo">
							<CityLogo
							link={true}
							linkTo="/"
							width="70px"
							height="70px"
							/>
					</div>
				</div>
				
				<Link 
				style={{ textDecoration: 'none' }}
				to="/teams">
					<Button 
					style={{ 
						color: 'white'
						
					}}
					color="inherit">TEAMS</Button>
				</Link>
				<Link 
				style={{ textDecoration: 'none' }}
				to="/matches">
					<Button 
					style={{ color: 'white'}}
					color="inherit">MATCHES</Button>
				</Link>
				
			</Toobar>
			</AppBar>	
		)
  }
}

export default Header;
