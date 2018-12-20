import React, { Component } from 'react';
import SignupForm from './SignupForm';
import Header from './Header';
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
      <div>
        <header>
          <Header />
          <h3>Newsletter Sign-Up</h3>
        </header>
        <SignupForm />
        {this.state.formSubmitted && <Success />}
      </div>
    );
  }
}

export default NewsletterSignup;