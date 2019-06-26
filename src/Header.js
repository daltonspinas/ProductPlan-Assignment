import React from "react";
import logo from "./assets/logo1.png";
import searchIcon from "./assets/search-icon.png";

function Header() {
  return (
    <div className='header'>
      <div id='logo'>
        <img src={logo} alt='' />
      </div>
      <div id='header-container'>
        <div id='header-title'>
          <h4>Candidate Roadmap</h4>
        </div>
        <div id='header-space' />
        <div id='icon'>
          <img src={searchIcon} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Header;
