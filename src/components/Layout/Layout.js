import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

import './Layout.scss';

export default function Layout({ children, title }) {
  return (
    <div className="Layout">
      <Sidebar />
      <main className="content">
        <div className="head">
          <span>{title}</span>
        </div>
        <div className="children_content">
          { children }
        </div>
      </main>
    </div>
  );
}
