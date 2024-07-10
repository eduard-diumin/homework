import React from "react";
import './Nav.css';

function Nav() {
  return (
    <nav className="aside-nav">
        <ul className="list-reset">
            <li><a href="http://">Home</a></li>
            <li><a href="http://">About</a></li>
            <li><a href="http://">Contacts</a></li>
        </ul>
    </nav>
  )
}

export default Nav;
