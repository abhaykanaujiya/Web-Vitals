import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header className='header'>
        <div>
          <h1>Web Vitals</h1>
        </div>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to="report">Report</Link></li>
          <li><Link to="about"> About</Link></li>
        </ul>
      </header>
    </div>
  );
};
