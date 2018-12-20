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

  onInputChange = (e, field) => {
    const value = e.target.value;

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

  render() {
    const { fields } = this.state;

    return (
      <div>
        <input 
          type="text"
          placeholder="Enter First Name..."
          value={fields.firstName.value}
          onChange={(e) => this.onInputChange(e, "firstName")}
        />
        <input 
          type="text"
          placeholder="Enter Last Name..."
          value={fields.lastName.value}
          onChange={(e) => this.onInputChange(e, "lastName")}
        />
        <input 
          type="text"
          placeholder="Enter Email..."
          value={fields.email.value}
          onChange={(e) => this.onInputChange(e, "email")}
        />
      </div>
    );
  }
}

export default SignupForm;