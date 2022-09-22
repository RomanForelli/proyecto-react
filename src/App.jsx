import React from 'react';
import "./styles/App.css";
import Navbar from './components/content/Navbar';
import ItemListContainer from './components/layouts/ItemListContainer';

const App = () => {
    return (
      <>
        <Navbar/>
        <ItemListContainer/>
      </>        
    );
}

export default App;
