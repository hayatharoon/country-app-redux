import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signin } from '../store/auth';
import store from '../store/store';

function Signin() {
  const [userSignIn, setUserSignIn] = useState({
    username: '',
    email: '',
    password: '',
  });
  const history = useNavigate();

  function handleEvent(e) {
    setUserSignIn((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (userSignIn.username === '') {
      alert('Username is required');
    } else if (userSignIn.email === '') {
      alert('Email is required');
    } else if (!userSignIn.email.includes('@')) {
      alert('Email field must have @ sign');
    } else if (userSignIn.password === '') {
      alert('Password must required');
    } else if (userSignIn.password.length < 5) {
      alert('Password must have atleast 5 digits');
    } else {
      alert('Add data successfully');

      store.dispatch(signin(userSignIn));
      history('/');
    }
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center mt-28 '>
        <form action='' className='flex flex-col '>
          <h1 className='text-2xl mb-4 pb-3 font-bold'>Sign up Form</h1>
          <input type='text' name='username' className='min-w-min px-5 pl-4 mb-3 outline-none  border rounded-md text-base' placeholder='username' onChange={handleEvent} />
          <input type='email' name='email' className='min-w-min px-5 pl-4 mb-3 outline-none  border rounded-md text-base' placeholder='email' onChange={handleEvent} />
          <input type='password' name='password' className='min-w-min px-5 pl-4 mb-3 outline-none  border rounded-md text-base' placeholder='password' onChange={handleEvent} />
          <NavLink to={'/'}>
            <button type='submit' onClick={handleSubmit} className='px-4 py-1 mt-3 bg-black border-none text-white text-base rounded-sm'>
              Submit
            </button>
          </NavLink>
        </form>
        <span className='py-4'>
          Alread have an account?{' '}
          <span className='underline text-blue-600'>
            <NavLink to={'/login'}>login</NavLink>
          </span>
        </span>
      </div>
    </>
  );
}

export default Signin;
