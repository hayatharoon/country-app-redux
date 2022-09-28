import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../store/store';
import { login, logout } from '../store/auth';

function Navbar() {
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  console.log(loggedIn);

  return (
    <nav className='p-5 bg-white shadow flex justify-between items-center font-medium'>
      <div className='text-2xl'>
        <p className='font-semibold'>Country-app</p>
      </div>

      <div className='text-xl '>
        {loggedIn && (
          <Link to='/addcountry' className=' hover:text-cyan-500 duration-500 mx-4 hover:underline'>
            Add Country
          </Link>
        )}

        {!loggedIn && (
          <Link to='/signin' className=' hover:text-cyan-500 duration-500 mx-4 hover:underline'>
            Sign in
          </Link>
        )}
        {loggedIn ? (
          <Link to='/logout' className=' hover:text-cyan-500 duration-500 mx-4 hover:underline'>
            Log out
          </Link>
        ) : (
          <Link to='/login'  className=' hover:text-cyan-500 duration-500 mx-4 hover:underline'>
            Log in
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
