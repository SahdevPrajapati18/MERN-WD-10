import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    gap: '20px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    listStyle: 'none',
  };

  return (
    <nav>
      <ul style={navStyle}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
