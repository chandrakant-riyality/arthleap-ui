import React from 'react';
import Header from './Header';
import Drawer from './Drawer';
import './dashboard.css';

import { NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import PersonalLoan from '../Loan/PersonalLoan/PersonalLoan';

const Sidebar = () => {
  return (
    <>

      <div className="web-13">
        <Header />
        <Drawer />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/home' element={<Dashboard />} />
          <Route path='/personalloans' element={<PersonalLoan />} />
        </Routes>


      </div>
    </>
  );
};

export default Sidebar;
