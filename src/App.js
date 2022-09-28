import React from 'react';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import Login from './Components/Login';
import AddCountry from './Components/AddCountry';
import Navbar from './Components/Navbar';
import Logout from './Components/Logout';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/addcountry' element={<AddCountry />} />
      </Routes>
    </div>
  );
}

export default App;
