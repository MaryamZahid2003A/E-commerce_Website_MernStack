import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogout } from '../store/UserSlice'
import { useLogoutMutation } from '../store/UserApiSlice'
import { useDispatch } from 'react-redux'

export default function MainMart() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {userInfo}=useSelector((state)=>state.auth1)
    const [logout]=useLogoutMutation();
    const handleSubmitLogout=async(e)=>{
        try{
          e.preventDefault();
          await logout().unwrap();
          dispatch(setLogout())
          navigate('/')
          console.log('Logout Successfully')
        }
        catch(error){
          console.log(error?.data?.message || error.message)
        }
      }
  return (
    <div className='bg-black w-100 h-100'>
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
          {userInfo?
          <div className="offcanvas offcanvas-start w-50" id="menu">
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

          </div>: <p>hello</p>}
        </div>
      </nav>
    </div>
  )
}
