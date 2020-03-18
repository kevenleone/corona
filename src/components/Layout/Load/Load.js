import React from 'react';
import { useSelector } from 'react-redux';
import { When } from 'react-if';

import './Load.css';

export default function Load() {
  const { loading } = useSelector((state) => state.base);
  return (
    <When condition={loading}>
      <div className="Load">
        <div className="background" />
        <div className="image">
          <div className="LoadImage lds-css">
            <div className="lds-rolling">
              <div />
            </div>
          </div>
          <h5 className="text-center pl-3 pr-3">Loading</h5>
        </div>
      </div>
    </When>
  );
}
