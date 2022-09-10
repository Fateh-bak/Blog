import React from 'react';
import './navBar.css'
import SearchIcon from '@mui/icons-material/Search';

function NavBar() {
  return (<div className="navBar">
      <div className="navBarWraper">
          <div className="navBarLogo"><span className="navBarLogoSpan">Blog</span></div>
          <div className="navBarOptions">
          <ul className="navBarOptionsList">
              <li className="navBarOptionsListElement "><a href="/" className="navlink">Home</a></li>
              <li className="navBarOptionsListElement selected"><a href="/" className="navlink">Articles</a></li>
              <li className="navBarOptionsListElement"><a href="/" className="navlink">Headlines</a></li>
              <li className="navBarOptionsListElement"><a href="/" className="navlink">About Us</a></li>
          </ul>
      </div>
      <div className="navBarFunc">
          <ul className="navBarFuncList">
              <li className="navBarFuncListElement"><a href="/login" className="navlink">Login</a></li>
              <li className="navBarFuncListElement"><a href="/signup" className="navlink">register</a></li>
              <li className="navBarFuncListElement"><SearchIcon/></li>
              <li className="navBarFuncListElement">En</li>
          </ul>
      </div>
      </div>
      
  </div>);
}

export default NavBar;