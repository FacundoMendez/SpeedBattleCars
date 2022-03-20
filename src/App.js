import React from 'react';
import Nav from './components/nav/Nav.jsx';
import './App.css';
import {CuadrosCars,CarsVisual} from './components/cars/CarPrint.jsx';
import Logo from "./components/logo/Logo.jsx";
import Video from './components/nav/Video.jsx';
/* import CuadrosCars from './components/cars/SelectCard.jsx'; */
import Models from './components/cars/Cars.jsx';


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
    
        <div className='container3'>
            <CarsVisual /> {/* muestra el auto de portada */}
            <CuadrosCars /> {/* muestra los buttons */}
        </div>  

      </main>
    
    
    </div>
  );
}

export default App;
