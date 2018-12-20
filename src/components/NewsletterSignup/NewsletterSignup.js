import React, { Component } from 'react';
import SignupForm from './SignupForm';
import Logo from '../Logo';
import Success from './Success';

class NewsletterSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formSubmitted: false
    };
  }

  onSignupFormSubmit = () => {
    console.log('submit from parent fired')
    this.setState({ formSubmitted: true });
  };

  render() {
    return (
      <div className="newsletter-signup__container">
        <header className="newsletter-signup__header--container">
          <Logo />
        </header>
        <div className="newsletter-signup__wrapper">
          <h3 className="newsletter-signup__h3--title">
            {this.state.formSubmitted ? "Success!" : "Newsletter Sign-Up"}
          </h3>
          {
            this.state.formSubmitted 
              ? <Success />
              : <SignupForm onSignupFormSubmit={this.onSignupFormSubmit} />
          }
        </div>
      </div>
    );
  }
}

export default NewsletterSignup;