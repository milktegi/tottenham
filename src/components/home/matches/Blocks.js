import React, { Component } from 'react';
import { firebaseLooper, reverseArray } from '../../ui/misc';
import { dbMatches, firebase } from '../../../firebase';

class Blocks extends Component {
	
	state = {
		matches: []
	}
	
	componentDidMount() {
		dbMatches.limitToLast(6).once('value').then(snapshot =>{
		const matches =	firebaseLooper(snapshot);
		this.setState({
			matches: reverseArray(matches)
		})
			
		})

	}

	
	// 추후 map
	showMatches = () => (
		<div>
			match
		</div>
	)
	
	render(){
		console.log(this.state.matches)
		return(
			<div className="home_matches">
				{this.showMatches(this.state.matches)}
			</div>
		)
	}
}

export default Blocks;