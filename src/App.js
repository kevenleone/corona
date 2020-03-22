import React from 'react';
import Load from './components/Layout/Load';
import Routes from './routes';
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Load />
      <Routes />
    </div>
  );
}
