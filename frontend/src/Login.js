import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div>
      <p className='text-black'>Login Page</p>
      <Link to='/signup'>
            <button className='btn btn-primary'>Sign Up</button>
      </Link>
    </div>
  )
}
