import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import { SubmissionError } from 'redux-form';

export default class RegisterFormContainer extends Component {
  submit = value => {
    return alert(JSON.stringify(value, null, 4));
  };

  getInitialValues() {
    return {
      newsletter: true
    };
  }
  render() {
    return (
      <RegisterForm
        onSubmit={this.submit}
        getInitialValue={this.getInitialValues()}
      />
    );
  }
}
