import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import HomeScreen from './HomeScreen';

export default function Home() {
  return (
    <div> 
      <nav className="navbar ">
        <div className="container-fluid navbar-expand-lg">
          <div className="d-flex flex-row navbar-brand">
            <img 
              src="https://cdn-icons-gif.flaticon.com/15547/15547234.gif" 
              height="70" 
              width="67" 
              alt="grocery store" 
              className="ms-4 rounded-5"
            />
            <p className="d-none d-lg-block text-white fs-2 ms-3 my-3 h1">
              Pick & Save Mart
            </p>            
          </div>
          <button 
            className="navbar-toggler"
            type="button" 
            data-bs-toggle="offcanvas"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start" id="menu">
            <ul className="navbar-nav me-5 mb-2 text-white ms-auto text-end">
              <li className="nav-item text-end border border-lg-2 border-white fs-5 rounded-1 px-3 me-2 link-opacity-75-hover">
                <a className="nav-link text-white link-opacity-75-hover" href="#">Login</a>
              </li>
              <li className="nav-item text-end border border-lg-2 border-white fs-5 rounded-1 px-3 link-opacity-75-hover">
                <a className="nav-link text-white link-opacity-75-hover" href="#">Sign Up</a>
              </li>
            </ul>
            <div class="offcanvas-body d-lg-none">
             
            </div>
          </div>
        </div>
      </nav>
      <HomeScreen/>
    </div>
  );
}
