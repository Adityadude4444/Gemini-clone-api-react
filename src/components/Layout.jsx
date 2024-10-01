// Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-4 overflow-auto">
        <Main />
      </div>
    </div>
  );
}

export default Layout;
