import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import capitalize from 'capitalize';
import { customInput, customSelect } from './Fields';
import {
  required,
  minLength,
  maxLength,
  confirmPassword,
  asyncValidate
} from './validation';
class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstname"
          component={customInput}
          type="text"
          label="First name"
          validate={[required]}
          normalize={capitalize}
          />
        <Field
          name="surname"
          component={customInput}
          type="text"
          label="Surname"
          validate={[required]}
          normalize={capitalize}
        />
        <Field
          name="username"
          component={customInput}
          type="text"
          label="Username"
          validate={[required, minLength, maxLength]}
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required]}
        />
        <Field
          name="confirmPassword"
          component={customInput}
          type="password"
          label="ConfirmPassword"
          validate={[required, confirmPassword]}
        />
        <Field name="preferred" component={customSelect} label="Preffered" />
        <Field
          name="newsletter"
          component={customInput}
          type="checkbox"
          label="Sign up?"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: 'register',
  asyncValidate,
  asyncBlurFields: ['username']
  // validate
})(RegisterForm);

export default RegisterForm;
