// App.js
import React from 'react';
import './App.css';
import './global.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginModule from './components/Login/LoginModule';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Sidebar/Pages/Dashboard';
import Header from './components/Sidebar/Header';
import Drawer from './components/Sidebar/Drawer';
import OtpForm from './components/Login/OtpForm';
import LoginForm from './components/Login/LoginForm';

const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<LoginModule/>}/>
      <Route path='/home/*' element={<Sidebar/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
