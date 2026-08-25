import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './pages/app/App.js';
import Contato from './pages/contato/index.jsx';
import NotFound from './pages/notfound/index.jsx';
import "./pages/contato/index.css";

import {BrowserRouter,Routes,Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
