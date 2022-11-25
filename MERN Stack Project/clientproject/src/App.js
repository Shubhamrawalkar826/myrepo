import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import Login from './screens/Login';
import Customerregistration from './screens/Customerregistration';
import CustomerDashboard from './screens/CustomerDashboard';

function App() {
 return (
    <div className="App" >
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/customerregistration" element={<Customerregistration />} />
        <Route exact path="/customerDashboard" element={<CustomerDashboard />} />
      </Routes>
    </div>
  );
  }
export default App;
