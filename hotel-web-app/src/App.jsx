// import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
// import LandingPage from './components/LandingPage/LandingPage';


const App = () => {
  return (
      <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Register" element={<Register />} />

          {/* <Header/> */}
          {/* <Register/> */}
          {/* <LandingPage/> */}
        </Routes>
        </div>
      </BrowserRouter>
  );
};

export default App;
