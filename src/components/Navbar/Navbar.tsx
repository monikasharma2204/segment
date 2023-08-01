

import React from 'react';
import './navbar.css'; 


interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="assets/data/logo.png" alt="Logo" />
      </div>
      <div className="links">
        <a href="/"></a>
        <a href="/demo"></a>
        <a href="/dataset"></a>
        <a href="/blog"></a>
        <a href="/paper"></a>
      </div>
    </div>
  );
};

export default NavBar;
