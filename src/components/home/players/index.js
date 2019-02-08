import React, { Component } from 'react'
import Stripes from '../../../Resources/images/stripe.png'
import { Tag } from '../../ui/misc'
import Reveal from 'react-reveal/Reveal';
import Cards from './cards'
class Players extends Component {
	
	state = {
		show: false
	}
	
	render() {
		return (
			<Reveal
			fraction={0.7}
				onReveal={()=>{
					this.setState({
						show: true
					})
				}}
			>
			<div className="home_meetplayers"
			style={{
				background: `#ffffff url(${Stripes})`
			}}
			>
			<div className="container">
				<div className="home_meetplayers_wrapper">
					<div className="home_card_wrapper">
						<Cards
						show={this.state.show}
						/>
					</div>
					<div className="home_text_wrapper">
						<div>
							<Tag
							bck="#0e1731"
							size="80px"
							color="#ffffff"
							add={{
								display: 'inline-block',
								marginBottom: '20px'
							}}
							>
								토트넘
							</Tag>
						</div>
						<div>
							<Tag
							bck="#0e1731"
							size="80px"
							color="#ffffff"
							add={{
								display: 'inline-block',
								marginBottom: '20px'
							}}
							>
								선수들을
							</Tag>
						</div>
						<div>
							<Tag
							bck="#0e1731"
							size="80px"
							color="#ffffff"
							add={{
								display: 'inline-block',
								marginBottom: '20px'
							}}
							>
								확인하세요
							</Tag>
						</div>
					  <div>
							<Tag
							bck="#ffffff"
							size="27px"
							color="#0e1731"
							link={true}
							linkTo="/teams"
							add={{
								display: 'inline-block',
								borderRadius: '10px',
								marginBottom: '27px',
								border: '1px solid #0e1731',
								padding: '15px'
							}}
							>
								더 많은 팀 선수 보기
							</Tag>
						</div>
					</div>
				</div>
			</div>
			</div>
			</Reveal>
		
		)
	}
}

export default Players;