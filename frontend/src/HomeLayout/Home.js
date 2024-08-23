import React from 'react';
import '../App.css';
import HomeScreen from './HomeScreen';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation,useRegisterMutation,useLogoutMutation } from '../store/UserApiSlice';
import { setCredentials,setLogout} from '../store/UserSlice';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [login]=useLoginMutation();
  const [register]=useRegisterMutation();
  const [logout]=useLogoutMutation();

  const {userInfo}=useSelector((state)=>state.auth1)

  const handleSubmitLogin=async(e)=>{
    try{
      e.preventDefault();
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials(res));
      navigate('/mart')
      console.log('successfully logged in');
    }
    catch(error){
      console.log(error?.data?.message || error.message)
    }
     

  }
  const handleSubmitSignUp=async(e)=>{
    try{
      e.preventDefault();
      const res = await register({name,email, password }).unwrap();
      dispatch(setCredentials(res));
      navigate('/mart')

      console.log('successfully signed in');
    }
    catch(error){
      console.log(error?.data?.message || error.message)
    }

}
  const handleSubmitLogout=async(e)=>{
    try{
      e.preventDefault();
      await logout().unwrap();
      dispatch(setLogout())
      console.log('Logout Successfully')
    }
    catch(error){
      console.log(error?.data?.message || error.message)
    }
  }
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
          {!userInfo?
          <div className="offcanvas offcanvas-start w-50" id="menu">
            <ul className="navbar-nav me-5 mb-2 text-white ms-auto text-end">
              <li className="nav-item text-end  fs-5 rounded-1 px-3 me-2 link-opacity-75-hover">
                <button 
                  type="button" 
                  className="nav-link text-white link-opacity-75-hover"
                  data-bs-toggle="modal" 
                  data-bs-target="#loginModal"
                >
                  Login
                </button>
              </li>
              <li className="nav-item text-end  fs-5 rounded-1 px-3 link-opacity-75-hover">
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
          </div>
          :<div className="offcanvas offcanvas-start w-50" id="menu">
            <ul className="navbar-nav me-5 mb-2 text-white ms-auto text-end d-flex flex-column">
                <li className="nav-item text-center fs-5 rounded-1 px-3 me-2 py-2 ">
                  <div className='d-flex flex-row '>
                    <img src='https://cdn-icons-png.flaticon.com/128/1077/1077012.png' width='30' height='30'/>
                    <p className="nav-item text-center fs-5 rounded-1 px-3 me-2  "> {userInfo.name}</p>
                  </div>
                </li>
                <li className="nav-item text-center fs-5 rounded-1 px-3 me-2 link-opacity-75-hover">
                  <div className='d-flex flex-row'>
                    <button 
                        type="button" 
                        className="nav-link text-white link-opacity-75-hover"
                      onClick={handleSubmitLogout}
                      >
                        Logout
                      </button>
                      <img src='https://cdn-icons-png.flaticon.com/128/1286/1286853.png' width='30' height='30' className='my-2'/>
                  </div>
                </li>
              </ul>

          </div>}
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
            <form onSubmit={handleSubmitLogin}>
              <input className="form-control my-3" placeholder="E-mail" type="email" required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <input className="form-control my-3" placeholder="Password" type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
              <button  className="btn btn-primary">Sign In</button>
            </form>

          </div>
        <a className='text-black fs-6 py-4 text-decoration-none pointer mx-3'   data-bs-toggle="modal" data-bs-target="#signUpModal">New Registration? <span className='loginForm fs-6'>Sign Up </span></a>

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
                  <form onSubmit={handleSubmitSignUp}>
                    <input className="form-control my-3" type="text" placeholder="Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input className="form-control my-3" type="email" placeholder="E-mail" required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input className="form-control my-3" type="password" placeholder="Password" required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="btn btn-primary">Sign Up</button>
                  </form>
                </div>
              <a className='text-black fs-6 py-4 text-decoration-none pointer mx-3'   data-bs-toggle="modal" data-bs-target="#loginModal">Already Exist ? <span className='loginForm fs-6'>Login </span></a>

              </div>

            </div>
          </div>

      <HomeScreen />
      <Footer />
    </div>
  );
}
