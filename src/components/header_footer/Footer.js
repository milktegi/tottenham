import React from 'react';
import { CityLogo } from '../ui/icons';
const Footer = () => {
	return (  
		<footer className="bck_lblue">
			<div className="footer_logo">
			<CityLogo
					link={true}
					linkTo="/"
					width="70px"
					height="70px"		
					/>
			</div>
			<div className="footer_discl">
				Tottenham 2019. All rights reserved.
			</div>
		</footer>
	);
}
 
export default Footer;