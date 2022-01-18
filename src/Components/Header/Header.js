import React from "react";
import { Link } from "react-router-dom";
import icon from "./Group 1.svg";
import "./header.css";

function Header(props) {
  return (
    <div>
      <header className='header'>
        <div>
          <img className='icon' src={icon} alt='img' />
        </div>

        <div className='ul-body'>
          <Link className='links' to={{ pathname: "/" }}>
            Home
          </Link>

          <Link className='links' to='/report'>
            Report
          </Link>

          <Link className='links' to='/about'>
            About
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
