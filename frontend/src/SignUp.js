import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
  return (
    <div>
      <p className='text-black'>Sign Up</p>
      <Link to='/login'>
                <button className='btn btn-primary'>Login</button>
        </Link>
    </div>
  )
}
