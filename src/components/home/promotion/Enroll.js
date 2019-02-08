import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import FormFields from '../../ui/formFields';
import { validate } from '../../ui/misc';

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

	updateForm = (element) => {
		// console.log(element)
		// 일단 카피
		const newFormdata = {...this.state.formdata}
		// state 카피 
		const newElement = { ...newFormdata[element.id]}
		// 유저 밸류 엘리먼트 
		newElement.value = element.event.target.value;

		// 유효성 검사

		let isValid = validate(newElement);
		console.log(isValid);
		newElement.valid = isValid[0];
		newElement.validationMessage = isValid[1];

		// 새로운 상태 대입 
		newFormdata[element.id] = newElement;
		this.setState({
			formdata: newFormdata
		})

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
							change={(element)=> this.updateForm(element)}
							/>
						</div>
					</form>
				</div>
			</Fade>
		)
	}
}

export default Enroll;