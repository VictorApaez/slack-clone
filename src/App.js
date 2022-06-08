import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
