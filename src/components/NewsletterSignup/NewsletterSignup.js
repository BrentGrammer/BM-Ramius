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

  render() {
    return (
      <div className="newsletter-signup__container">
        <header className="newsletter-signup__header--container">
          <Logo />
          <h3 className="newsletter-signup__h3--title">Newsletter Sign-Up</h3>
        </header>
        <SignupForm />
        {this.state.formSubmitted && <Success />}
      </div>
    );
  }
}

export default NewsletterSignup;