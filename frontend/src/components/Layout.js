import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-content-wrapper">
        <TopNav />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
