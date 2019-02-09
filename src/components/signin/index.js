import React, { Component } from 'react';
import FormFields from '../ui/formFields';
import { validate } from '../ui/misc';

import { firebase } from '../../firebase';

class Signin extends Component {
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
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: '패스워드를 입력하세요'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ''
      }
    }
  };

  updateForm = element => {
    // 일단 카피
    const newFormdata = { ...this.state.formdata };
    // state 카피
    const newElement = { ...newFormdata[element.id] };
    // 유저 밸류 엘리먼트
    newElement.value = element.event.target.value;

    // 유효성 검사
    let isValid = validate(newElement);
    newElement.valid = isValid[0];
    newElement.validationMessage = isValid[1];

    // 새로운 상태 대입
    newFormdata[element.id] = newElement;
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }
    if (formIsValid) {
      // console.log(dataToSubmit);
      // check if user can move forward
      firebase
        .auth()
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
					// console.log('user is auth')
					this.props.history.push('/dashboard')
				})
        .catch(err => {
          this.setState({
            formError: true
          });
        });
    } else {
      this.setState({
        formError: true
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="signin_wrapper" style={{ margin: '100px' }}>
          <form onSubmit={event => this.submitForm(event)}>
            <h2>로그인</h2>
            <FormFields
              id={'email'}
              formdata={this.state.formdata.email}
              change={element => this.updateForm(element)}
            />
            <FormFields
              id={'password'}
              formdata={this.state.formdata.password}
              change={element => this.updateForm(element)}
            />
            {this.state.formError ? (
              <div className="error_label">이메일 또는 패스워드가 일치하지 않습니다.</div>
            ) : null}
            <button onClick={event => this.submitForm(event)}>로그인</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
