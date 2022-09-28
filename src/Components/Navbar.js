import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../store/store';
import { logout } from '../store/auth';

function Navbar() {
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  // const currUser = useSelector((state) => state.authReducer.currentUser.username);

  // console.log(currUser);

  function handleLogout(e) {
    e.preventDefault();
    store.dispatch(logout(loggedIn));
  }

  const userLinks = (
    <>
      {/* {currUser && <span className='text-green-400'>{currUser}</span>} */}
      <Link to='/addcountry' className=' hover:text-cyan-500 duration-500 mx-4 hover:underline'>
        Add Country
      </Link>
      <a href='#' onClick={handleLogout} className=' hover:text-cyan-500 duration-500 mx-4 hover:underline'>
        Log out
      </a>
    </>
  );
  const guestLinks = (
    <>
      <Link to='/signin' className=' hover:text-cyan-500 duration-500 mx-4 hover:underline'>
        Sign in
      </Link>
      <Link to='/login' className=' hover:text-cyan-500 duration-500 mx-4 hover:underline'>
        Log in
      </Link>
    </>
  );

  return (
    <nav className='p-5 bg-white shadow flex justify-between items-center font-medium'>
      <div className='text-2xl'>
        <p className='font-semibold'>Country-app</p>
      </div>

      <div className='text-xl '>{loggedIn ? userLinks : guestLinks}</div>
    </nav>
  );
}

export default Navbar;
