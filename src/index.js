import React from 'react';
import ReactDOM from 'react-dom/client';
import { CarritoProvider } from './CarritoContext';
import './styles/index.css';
import App from './App';
//import './components/layouts/consultarBDD.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
        <App />
  </CarritoProvider>
    
  
);

