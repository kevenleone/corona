import React from 'react';
import { useSelector } from 'react-redux';
import cov from '../../../assets/imgs/cov.png';

import './Load.scss';

export default function Load() {
  const { loading } = useSelector((state) => state.general);
  if (!loading) {
    return <></>;
  }

  return (
    <div className="Load">
      <div className="background" />
      <div className="content">
        <div className="left">
          <img src={cov} alt="Covid Virus" />
        </div>
        <div className="right">
          <span className="header">
            COVID
            <small>-19</small>
          </span>
          <br />
          <span>ATUAL SITUAÇÃO GLOBAL</span>
        </div>
      </div>
    </div>
  );
}
