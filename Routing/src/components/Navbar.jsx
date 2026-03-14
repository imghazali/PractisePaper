import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#ff0001" : "white",
            borderBottom: isActive ? "1px solid #ff0002" : "none",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "#ff0001" : "white",
            borderBottom: isActive ? "1px solid #ff0002" : "none",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "#ff0001" : "white",
            borderBottom: isActive ? "1px solid #ff0002" : "none",
          })}
        >
          Contact
        </NavLink>
        <NavLink
          to="/gallery"
          style={({ isActive }) => ({
            color: isActive ? "#ff0001" : "white",
            borderBottom: isActive ? "1px solid #ff0002" : "none",
          })}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            color: isActive ? "#ff0001" : "white",
            borderBottom: isActive ? "1px solid #ff0002" : "none",
          })}
        >
          Dashboard
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar