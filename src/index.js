import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Pricing from './pricing';
import Contact from './contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Link to="/pricing">Pricing</Link>
  <Link to="/">Home</Link>

    <Routes>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/" element={<App />}/>
    </Routes>
    <App />
  </BrowserRouter>
);


reportWebVitals();
