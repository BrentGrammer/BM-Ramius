import React, { Component } from 'react';
import NewsletterSignup from './components/NewsletterSignup/NewsletterSignup';
import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsletterSignup />
      </div>
    );
  }
}

export default App;
