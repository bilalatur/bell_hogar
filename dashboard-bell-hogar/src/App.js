import React from 'react';
import './App.css';

import Header from './components/Header';
import Volver from './components/Volver';
import Navbar from './components/Navbar';
import Contenedor from './components/Contenedor';

function App() {
  return (
    <div className="container">
      <div className="container-head col-12">
        <Header className="col-12"/>
      </div>
      <div className="col-12">
        <Volver className="col-12"/>
        <Navbar className="container"/>
      </div>
      < Contenedor className="container-fluid"/>
    </div>
  )
}

export default App;

