import React from 'react';
import { Tag } from '../../ui/misc'

const MatchesHome = () => {
	return (  
		<div className="home_matches_wrapper">
			<div className="container">
				<Tag
					bck="#0e1731"
					size="50px"
					color="#fffff"	
				>
				MATCHES
				</Tag>
				block 
				<Tag
					bck="#ffffff"
					size="22px"
					color="#0e1731"	
					link={true}
					linkTo="/teams"
				>
			  더 많은 경기 확인
				</Tag>
			</div>
		</div>
	);
}
 
export default MatchesHome;