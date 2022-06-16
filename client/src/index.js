import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EncuestaSinEmail } from './components/ui/EncuestaSinEmail';
import { EncuestaApp } from './EncuestaApp';
import './styles/main.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/:email' element={ <EncuestaApp /> } />       
        <Route path='/' element={ <EncuestaSinEmail /> } />       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
