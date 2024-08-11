import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div> <nav className="navbar bg-light">
    <div className="navbar-nav" style={{ display: 'flex',  flexDirection: 'row', gap: '15px' }}>
      <Link className="nav-item nav-link active" style={{justifyContent: 'space-between'}} to="/">Home</Link>
      <Link className="nav-item nav-link" style={{justifyContent: 'space-between'}} to="/contact">Contact</Link>
      <Link className="nav-item nav-link" style={{justifyContent: 'space-between'}} to="/profile">Profile</Link>
    </div>
  </nav></div>
  )
}
