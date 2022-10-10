import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import "./styles/App.css";
import Navbar from './components/content/Navbar';
import ItemListContainer from './components/content/ItemListContainer';
import Contacto from './components/content/Contacto';
import Ofertas from './components/content/Ofertas';
import Carrito from './components/content/Carrito'
import Nosotros from './components/content/Nosotros';
import Footer from './components/content/Footer'
import ItemDetail from './components/content/ItemDetail';
import Categoria from './components/content/Categoria';



const App = () => {
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/Contacto" element={<Contacto/>} />
            <Route path="/ItemDetail/:id" element={<ItemDetail/>} />
            <Route path="/Categoria/:categoria/:id" element={<Categoria/>} />
            <Route path="/Ofertas" element={<Ofertas/>} />
            <Route path="/Carrito" element={<Carrito/>} />
            <Route path="/Nosotros" element={<Nosotros/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>        
    );
}

export default App;
