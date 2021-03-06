import React from 'react';
import { Tag } from '../../ui/misc'
import Blocks from './Blocks';

const MatchesHome = () => {
	return (  
		<div className="home_matches_wrapper">
			<div className="container">
				<Tag
					bck="#0e1731"
					size="50px"
					color="#ffffff"	
				>
				최신 경기/결과
				</Tag>
				<Blocks/>
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