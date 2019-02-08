import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import FormFields from '../../ui/formFields';

class Enroll extends Component {
	
	state = {
		formError: false,
		formSuccess: '',
		formdata: {
			email: {
				element: 'input',
				value: '',
				config: {
					name: 'email_input',
					type: 'email',
					placeholder: '이메일을 입력하세요'
				},
				validation: {
					required: true,
					email: true
				},
				valid: false,
				validationMessage: ''
			}
		}
	}

	submitForm = () => {

	}
	
	render() {
		return (
			<Fade>
				<div className="enroll_wrapper">
					<form onSubmit={(event)=> this.submitForm(event)}>
						<div className="enroll_title">
							이메일을 입력하세요
						</div>
						<div className="enroll_input">
							<FormFields
							id={'email'}
							formdata={this.state.formdata.email}
							/>
						</div>
					</form>
				</div>
			</Fade>
		)
	}
}

export default Enroll;