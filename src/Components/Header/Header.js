import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "../../Pages/HomePage/HomePage";
import "./header.css";

export const Header = () => {
  return (
    <div>
      <Router>
        <header className='header'>
          <div>
            <h1>Web Vitals</h1>
          </div>
          <ul className='ul-body'>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='report'>Report</Link>
            </li>
            <li>
              <Link to='about'> About</Link>
            </li>
          </ul>
        </header>
      </Router>
      <HomePage />
    </div>
  );
};
