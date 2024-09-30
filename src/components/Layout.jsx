// Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main'; 

function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4">
        <Main />
      </div>
    </div>
  );
}

export default Layout;
