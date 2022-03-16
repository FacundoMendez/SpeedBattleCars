import React from 'react';
import Nav from './components/nav/Nav.jsx';
import './App.css';
import videoBanner from './img/banner.mp4';
import Logo from "./components/logo/Logo.jsx"

function App() {
  return (
    <div className='App'>
      <header>
        <Nav />
      </header>
    
      <main className='main'>
        <div className='container'>
          <div className='containerVideo' >
            <video  autoPlay loop muted  >
              <source src = {videoBanner} type="video/mp4"></source>
            </video>
            <Logo text="Speed Battle Cars" />
          </div>  
        </div>
        <div className='container2'></div>
      </main>
    
    
    </div>
 
    
  );
}

export default App;
