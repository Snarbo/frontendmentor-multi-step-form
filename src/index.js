import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/tailwind.css';
import './css/dist/site.min.css';
import App from './App';
import { ContextProvider } from './store/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
