import React from 'react';
import cov from '../../assets/imgs/cov.png';
import './Logo.scss';

export default function index() {
  return (
    <div className="logo">
      <div className="left">
        <img src={cov} alt="Covid Virus" />
      </div>
      <div className="data">
        <span className="header">
          COVID
          <small>-19</small>
        </span>
        <br />
        <span>ATUAL SITUAÇÃO GLOBAL</span>
      </div>
    </div>
  );
}
