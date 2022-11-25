import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
 return (
    <div className="App" >
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/customerregistration" element={<Customerregistration />} />
        <Route exact path="/customerDashboard" element={<customerDashboard />} />
      </Routes>
    </div>
  );
  }
export default App;
