import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="/about">About</Link>
      </h2>
      <h2>
        <Link to="/dashboard">Dashboard</Link>
      </h2>
    </div>
  );
}

export default Navbar