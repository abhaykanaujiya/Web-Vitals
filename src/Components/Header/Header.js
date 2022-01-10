import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import icon from "./Group 1.svg";
import "./header.css";

export const Header = () => {
  return (
    <div>
      <Router>
        <header className='header'>
          <div>
            <img className='icon' src={icon} alt='img' />
          </div>

          <div className='ul-body'>
            <div>
              <Link className='links' to='/home'>
                Home
              </Link>
            </div>
            <div>
              <Link className='links' to='/table'>
                Report
              </Link>
            </div>
            <div>
              <Link className='links' to='about'>
                {" "}
                About
              </Link>
            </div>
          </div>
        </header>
      </Router>
      <HomePage />
    </div>
  );
};
