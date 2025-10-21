import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Home from './pages/Home'; //  pulling from line 4
import About from './pages/About';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hi Chance</h1>
    <h2>Loving This</h2>
    <Home/>
    <About/>
  </React.StrictMode>
);

