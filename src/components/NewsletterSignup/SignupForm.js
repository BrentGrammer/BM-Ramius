import React, { Component } from 'react';
import { 
  trimFormValues, 
  firstNameValidator, 
  lastNameValidator, 
  emailValidator,
  validateFields 
} from '../../util/validators';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        firstName: {
          value: '',
          validationError: ''
        },
        lastName: {
          value: '',
          validationError: ''
        },
        email: {
          value: '',
          validationError: ''
        }
      },
      valid: true
    };
  }

  onInputChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;

    this.setState(prevState => {
      return {
        fields: {
          ...prevState.fields,
          [field]: { 
            value: value
          } 
        }
      }; 
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { fields } = this.state;
    const trimmedFormValues = trimFormValues(fields);

    const validators = {
      firstName: firstNameValidator,
      lastName: lastNameValidator,
      email: emailValidator
    };

    const validation = validateFields(trimmedFormValues, validators);

    if (validation.isValid === false) {
      const { validationErrors } = validation;

      this.setState({
        fields: {
          firstName: {
            ...this.state.fields.firstName,
            validationError: validationErrors.firstName
          },
          lastName: {
            ...this.state.fields.lastName,
            validationError: validationErrors.lastName
          },
          email: {
            ...this.state.fields.email,
            validationError: validationErrors.email
          }
        },
        valid: false
      });

      return;
    } else {
      this.props.onSignupFormSubmit();
    }
  };

  render() {
    const { fields, valid } = this.state;

    return (
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form__container--input">
            <label className="form__label" htmlFor="firstName">First Name:</label>
            <input 
              className="form__input"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter First Name..."
              value={fields.firstName.value}
              onChange={this.onInputChange}
            />
          </div> 
          {!valid && <p className="form__message--error">{fields.firstName.validationError}</p>}
          <div className="form__container--input">
            <label className="form__label" htmlFor="lastName">Last Name:</label> 
            <input 
              className="form__input"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter Last Name..."
              value={fields.lastName.value}
              onChange={this.onInputChange}
            />
          </div>
          {!valid && <p className="form__message--error">{fields.lastName.validationError}</p>}
          <div className="form__container--input">
            <label className="form__label" htmlFor="email">Email:</label> 
            <input
              className="form__input form__input--email" 
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email..."
              value={fields.email.value}
              onChange={this.onInputChange}
            />
          </div>
          {!valid && <p className="form__message--error">{fields.email.validationError}</p>}
          <button className="form__button--submit" type="submit">Submit</button>
        </form>
    );
  }
}

export default SignupForm;