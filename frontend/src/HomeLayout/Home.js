import React from 'react';
import '../App.css';
import HomeScreen from './HomeScreen';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <nav className="navbar sticky">
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
          <div className="offcanvas offcanvas-start w-50" id="menu">
            <ul className="navbar-nav me-5 mb-2 text-white ms-auto text-end">
              <li className="nav-item text-end border border-lg-2 border-white fs-5 rounded-1 px-3 me-2 link-opacity-75-hover">
                <button 
                  type="button" 
                  className="nav-link text-white link-opacity-75-hover"
                  data-bs-toggle="modal" 
                  data-bs-target="#loginModal"
                >
                  Login
                </button>
              </li>
              <li className="nav-item text-end border border-lg-2 border-white fs-5 rounded-1 px-3 link-opacity-75-hover">
                <button 
                  type="button" 
                  className="nav-link text-white link-opacity-75-hover"
                  data-bs-toggle="modal" 
                  data-bs-target="#signUpModal"
                >
                  Sign Up
                </button>
              </li>
            </ul>
            <div className="offcanvas-body d-lg-none">
            </div>
          </div>
        </div>
      </nav>
      
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 loginForm">Sign In</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <input className="form-control my-3" placeholder="E-mail" type="email" required />
              <input className="form-control my-3" placeholder="Password" type="password" required />
              <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
            <a className='text-black fs-6 py-4 text-decoration-none pointer'   data-bs-toggle="modal" data-bs-target="#signUpModal">New Registration? <span className='loginForm fs-6'>Sign Up </span></a>

          </div>
        </div>
      </div>
    </div>

          <div className="modal fade" id="signUpModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 loginForm">Sign Up</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <input className="form-control my-3" type="text" placeholder="Name" required/>
                    <input className="form-control my-3" type="email" placeholder="E-mail" required />
                    <input className="form-control my-3" type="password" placeholder="Password" required />
                    <button type="submit" className="btn btn-primary">Sign Up</button>

                  </form>
                  <a className='text-black fs-6 py-4 text-decoration-none pointer'   data-bs-toggle="modal" data-bs-target="#loginModal">Already Exist ? <span className='loginForm fs-6'>Login </span></a>
                </div>
              </div>
            </div>
          </div>

      <HomeScreen />
      <Footer />
    </div>
  );
}
