import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import store from '../store/store';
import { login } from '../store/auth';

function Login() {
  const [userlogin, setUserLogin] = useState({
    email: '',
    password: '',
  });
  function handleEvent(e) {
    setUserLogin((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const currState = store.getState();
    if (userlogin.email === '') {
      alert('Email is required');
    } else if (!userlogin.email.includes('@')) {
      alert('Email field must have @ sign');
    } else if (userlogin.password === '') {
      alert('Password must required');
    } else {
      if (currState?.authReducer?.allUsers) {
        const data = currState.authReducer.allUsers;
        const userLogin = data.filter((element, key) => {
          return element.email === userlogin.email && element.password === userlogin.password;
        });
        if (userLogin.length === 0) {
          alert('Invalid user details !');
        } else {
          alert('User login Successfully');
          store.dispatch(login(userLogin));
          history('/');
        }
      }
    }
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center h-full mt-28'>
        <form action='' className='flex flex-col '>
          <h1 className='text-2xl mb-4 pb-3 font-bold'>Login Form</h1>
          <input type='email' onChange={handleEvent} name='email' className='min-w-min px-5 pl-4 mb-3 outline-none  border rounded-md text-base' placeholder='example@gmail.com' />
          <input type='password' onChange={handleEvent} name='password' className='min-w-min px-5 pl-4 mb-3 outline-none  border rounded-md text-base' placeholder='password' />
          <button type='submit' onClick={handleSubmit} className='px-4 py-1 mt-3 bg-black border-none text-white text-base rounded-sm'>
            Submit
          </button>
        </form>
        <span className='py-4'>
          I don't have an account
          <span className='underline text-blue-600'>
            <NavLink to={'/signin'}> Sign up</NavLink>
          </span>
        </span>
      </div>
    </>
  );
}

export default Login;
