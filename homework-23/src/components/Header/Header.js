import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav';

function Header() {
  return (
    <header>
        <a className="logo" href="https://">Logo</a>
        <Nav/>
    </header>
  )
}

export default Header;