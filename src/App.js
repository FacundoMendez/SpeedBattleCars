import React, {useState}from 'react';
import Nav from './components/nav/Nav.jsx';
import './App.css';
import CarsVisual from './components/cars/CarPrint.jsx';
import Logo from "./components/logo/Logo.jsx";
import Video from './components/nav/Video.jsx';
import Models from './components/cars/Cars.jsx';
import Garaje from "./components/cars/Garaje.jsx"
console.log(...Models)


function App() {


  return (
    <div className='App'>
      <header>
        <Nav />
      </header>
    
      <main className='main'>
        <div className='container'>
          <div className='containerVideo' >
            <Video/>
            <Logo text="Speed Battle Cars" />
          </div>  
        </div>
        <div className='container2'/>
    
        <div id='models' className='container3'>
            <Garaje />
            <CarsVisual/> /* muestra el auto de portada */
        </div>  

      </main>
    
    
    </div>
  );
}

export default App;
