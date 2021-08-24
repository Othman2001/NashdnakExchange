/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
import React from 'react';
import navbarRender from './functions/navbarRender';
import logo from '../logo.png';
import './css/navbar.css';

const NavBar = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light mx-1 px-4 ">
      <a className="navbar-brand mx-5 px-5" href="#">
        <img src={logo} alt="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
          {navbarRender()}
        </ul>
      </div>
    </nav>

  </div>
);
export default NavBar;
