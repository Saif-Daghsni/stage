import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className={`main-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
        <Navbar />
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;