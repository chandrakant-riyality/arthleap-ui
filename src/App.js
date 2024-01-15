// App.js
import React from 'react';
import './App.css';
import './global.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginModule from './components/Login/LoginModule';
import Sidebar from './components/Sidebar/Sidebar';

import store from './store';
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<LoginModule />} />
          <Route path='/home/*' element={<Sidebar />} />
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
