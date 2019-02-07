import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class Stripe extends Component {
  state = {
    stripes: [
      {
				background: '#ffffff',
				left: 120,
				rotate: 25,
				top: -260,
				delay: 0
      },
      {
				background: '#20bfa7',
				left: 360,
				rotate: 25,
				top: -397,
				delay: 200
      },
      {
				background: '#ffffff',
				left: 600,
				rotate: 25,
				top: -498,
				delay: 400
      }
    ]
  };

  showStripe = () =>
    this.state.stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: '#ffffff',
					opcaity: 0,
					left: 0,
					rotate: 0,
					top: 0
        }}
        enter={{
          background: [ stripe.background ],
					opcaity: [1],
					left: [ stripe.left],
					rotate: [ stripe.rotate ],
					top: [ stripe.top ],
					timing: {
						delay: stripe.delay,
						duration: 200,
						ease: easePolyOut
					},
					events: {
						end(){
							console.log('animation finished')
						}
					}
        }}
      >
      {/*👇 여기에 패스 */}
        {({background, opacity, left, rotate, top}) => {
          return (
            <div
              className='stripe'
              style={{
                background,
								opacity,
								transform: `rotate(${rotate}deg) translate(${left}px, ${top}px)`
              }}
            />
          );
        }}
      </Animate>
    ));

  render() {
    return <div className='featured_stripes'>{this.showStripe()}</div>;
  }
}

export default Stripe;
