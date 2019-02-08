
import React from 'react';

const MatchesBlock = ({match}) => {
	// console.log(match);
	return ( 
		<div className="match_block">
			<div className="match_date">
				{ match.final ? match.date : `경기 예정 ${match.date}` }
			</div>
			<div className="match_wrapper">
				 <div className="match_top">
					 <div className="left">
						 <div 
						 style={{ 
							 background: `
							 url(/images/team_icons/${match.localThmb}.png)` 
						 }}
						 className="icon">
						 </div>
						 <div className="team_name">
							 {match.local}
						 </div>
					 </div>
					 <div className="right">
						 { match.final ? match.resultLocal : '-'}
					 </div>
				 </div>
				 <div className="match_bottom">
					 <div className="left">
						 <div 
						 style={{ 
							 background: `
							 url(/images/team_icons/${match.awayThmb}.png)` 
						 }}
						 className="icon">
						 </div>
						 <div className="team_name">
							 {match.away}
						 </div>
					 </div>
					 <div className="right">
						 { match.final ? match.resultAway : '-'}
					 </div>
					 </div>
			 </div>
		</div>
	 );
}
 
export default MatchesBlock;