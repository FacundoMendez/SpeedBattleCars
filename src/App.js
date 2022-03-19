import React from 'react';
import Nav from './components/nav/Nav.jsx';
import './App.css';
import CarPrint from './components/cars/CarPrint.jsx';
import Logo from "./components/logo/Logo.jsx";
import Video from './components/nav/Video.jsx';
import models from './components/cars/Cars.jsx';



console.log(...models)


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
            <div className='cardImg'>
               <CarPrint 
                  nombre= {models[0].nombre}
                  color= {models[0].color}
                  velocidad= {models[0].velocidad}
                  drift= {models[0].drift}
                  img={models[5].img}
               />
            </div>
        </div>  

      </main>
    
    
    </div>
  );
}

export default App;
