import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}

export default App;
