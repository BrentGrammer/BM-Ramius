import React, { Fragment } from 'react';
import logo from '../../assets/img/logo.svg';

const Header = props => {
  return (
    <Fragment>
      <img src={logo} alt="logo" />
    </Fragment>
  );
};

export default Header;