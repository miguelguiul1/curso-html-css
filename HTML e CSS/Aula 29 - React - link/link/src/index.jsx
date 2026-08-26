import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './aplicativos/app/App';
import Contato from './aplicativos/contato/contato';
import NotFound from './aplicativos/notfound/notfound';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
