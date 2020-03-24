import React from 'react';
import ReactGA from 'react-ga';
import Load from './components/Layout/Load';

import Routes from './routes';
import './App.scss';

ReactGA.initialize(process.env.REACT_APP_GA_ID);

export default function App() {
  return (
    <div className="App">
      <Load />
      <Routes />
    </div>
  );
}
