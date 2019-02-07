import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class Stripe extends Component {
	
	showStripe = () => (
		<div>
			stripes!
		</div>
	)
	
	render() {
		return (
			<div className="featured_stripes">
				{this.showStripe()}
			</div>
		)
	}
}

export default Stripe;