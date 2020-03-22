import React from 'react';
import Timer from '../../Timer';
import Logo from '../../Logo';
import './Header.scss';

const Header = () => (
  <div className="Header">
    <div className="left">
      <Logo />
    </div>
    <div className="right">
      <div className="pull-right">
        <Timer userLocation={{}} />
      </div>
    </div>
  </div>
);

export default Header;
