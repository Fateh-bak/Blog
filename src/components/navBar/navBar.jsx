import React from 'react';
import './navBar.css'
import SearchIcon from '@mui/icons-material/Search';

function NavBar() {
  return (<div className="navBar">
      <div className="navBarWraper">
          <div className="navBarLogo"><span className="navBarLogoSpan">Blog</span></div>
          <div className="navBarOptions">
          <ul className="navBarOptionsList">
              <li className="navBarOptionsListElement selected">Home</li>
              <li className="navBarOptionsListElement">Articles</li>
              <li className="navBarOptionsListElement">Headlines</li>
              <li className="navBarOptionsListElement">About Us</li>
          </ul>
      </div>
      <div className="navBarFunc">
          <ul className="navBarFuncList">
              <li className="navBarFuncListElement">Login</li>
              <li className="navBarFuncListElement">Register</li>
              <li className="navBarFuncListElement"><SearchIcon/></li>
              <li className="navBarFuncListElement">En</li>
          </ul>
      </div>
      </div>
      
  </div>);
}

export default NavBar;