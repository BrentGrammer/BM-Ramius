import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        firstName: {
          value: ''
        },
        lastName: {
          value: ''
        },
        email: {
          value: ''
        }
      }
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
    console.log('form submitted')
  };

  render() {
    const { fields } = this.state;

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
          <div className="form__container--input">
            <label className="form__label" htmlFor="email">Email:</label> 
            <input
              className="form__input form__input--email" 
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email..."
              value={fields.email.value}
              onChange={this.onInputChange}
            />
          </div>
          <button className="form__button--submit" type="submit">Submit</button>
        </form>
    );
  }
}

export default SignupForm;